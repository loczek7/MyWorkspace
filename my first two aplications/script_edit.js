document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.querySelector('#tbl tbody');
    const addRowButton = document.getElementById('add-row');
    const submitButton = document.getElementById('submit');
    const inputField = document.getElementById("inputField");
   //-------------------------------------------------------------------------------------
   const links = [];

   async function fetchData() {
       try {
           const response = await fetch('/app_ids');
           const data = await response.json();
           links.length = 0;  // Czyścimy zawartość tablicy
           links.push(...data); // Wstawiamy dane do tablicy
       } catch (error) {
           console.error('Błąd pobierania danych:', error);
       }
   }
    const tableData = [];
   const deletedRows = [];
    let nextId = 1000; 
    // Wczytanie danych z zmiennej 
   // Zmiana w funkcji do generowania wierszy
   await fetchData();
editData.forEach((data, index) => {
   const newRow = document.createElement('tr');
   // Pobierz komentarz dla aplikacji z commentData
   const comment = editData.find(comment => comment.app_id === data.id)?.comment || '';
   // Stworzenie selecta dla app_id
   const selectAppId = links.map(link => {
       return `<option value="${link.app_id}" ${link.app_id === data.app_id ? 'selected' : ''}>${link.app_id}</option>`;
   }).join('');
   newRow.innerHTML = `
       <td><input class="inputField" type="text" value="${data.app_name}" /></td>
       <td>
           <select class="inputField">
               ${selectAppId}
               </select>
           <a href="http://127.0.0.1:5000/appids" class="link-plus">+</a>
            
       </td>
       <td><input class="inputField" type="text" value="${data.ip_address}" /></td>
       <td><input class="inputField" type="text" value="${data.domain}" /></td>
       <td><input class="inputField" type="text" value="${data.deployed_version}" /></td>
       <td><input class="inputField" type="text" value="${data.deployed_version_date}" /></td>
       <td><input class="inputField" type="text" value="${data.latest_version}"  /></td>
       <td><input class="inputField" type="text" value="${data.latest_version_date}" /></td>
       <td><input class="inputField" type="text" placeholder="Comment" value="${comment}" /></td>
       <td><button class="delete-row" data-id="${data.id}">Delete</button></td>
   `;
   tableBody.appendChild(newRow);
});
// Zmiana dla dodawania nowych wierszy
addRowButton.addEventListener('click', () => {
   const newRow = document.createElement('tr');
   const currentId = nextId++;
   // Stworzenie selecta dla app_id
   const selectAppId = links.map(link => {
       return `<option value="${link.app_id}">${link.app_id}</option>`;
   }).join('');
   newRow.innerHTML = `
       <td><input class="inputField" type="text" placeholder="App Name"></td>
       <td>
           <select class="inputField">
               ${selectAppId}
               </select>
           <a href="http://127.0.0.1:5000/appids" class="link-plus">+</a>
       </td>
       <td><input class="inputField" type="text" placeholder="IP Address"></td>
       <td><input class="inputField" type="text" placeholder="Domain"></td>
       <td><input class="inputField" type="text" placeholder="Deployed Version"></td>
       <td><input class="inputField" type="text" placeholder="Deployed Date"></td>
       <td><input class="inputField" type="text" placeholder="Latest Version"></td>
       <td><input class="inputField" type="text" placeholder="Latest Date"></td>
       <td><input class="inputField" type="text" placeholder="Comment"></td>
       <td><button class="delete-row" data-id="${currentId}">Delete</button></td>
   `;
   tableBody.appendChild(newRow);
});

     // Usuwanie wiersza
tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-row')) {
        const row = event.target.closest('tr');
        const appId = event.target.getAttribute('data-id');
        // Sprawdź, czy appId istnieje i jest liczbą
        if (appId !== null && appId !== undefined && appId !== "") {
            const appIdNumber = parseInt(appId, 10);
            if (!isNaN(appIdNumber)) {
                deletedRows.push(appIdNumber);
                console.log('Usunięte ID:', deletedRows);
            } else {
                console.warn(`Nieprawidłowy appId: ${appId}`);
            }
        } else {
            console.warn('appId jest nieprawidłowe lub nie ustawione.');
        }
        deleteData(appId);
        row.remove();
    }
});
//Usuwanie danych na serverze
async function deleteData(appId) {
   try {
       const response = await fetch(`/delete/${appId}`, {
           method: 'DELETE',
           headers: {
               'Content-Type': 'application/json'
           }
       });
      // await deleteData(appId);     
       if (response.ok) {
           console.log(`Dane z ID ${appId} zostały pomyślnie usunięte`);
           showAlert('Dane zostały pomyślnie usunięte!', false);
       } else {
           console.error(`Błąd podczas usuwania danych z ID ${appId}`);
           showAlert('Wystąpił błąd podczas usuwania danych.', true);
       }
   } catch (error) {
       console.error('Błąd połączenia z serwerem:', error);
       showAlert('Wystąpił błąd połączenia z serwerem.', true);
   }
}
// Funkcja do wyświetlania alertów
function showAlert(message, isError = false) {
   const alertBox = document.createElement('div');
   alertBox.textContent = message;
   alertBox.classList.add('alert');
   if (isError) {
       alertBox.classList.add('error');
   } else {
       alertBox.classList.add('success');
   }
   document.body.appendChild(alertBox);
   setTimeout(() => {
       alertBox.classList.add('hidden');
   }, isError ? 4000 : 3000);
}
// Zatwierdzanie danych i zapis
submitButton.addEventListener('click', () => {
       const updatedData = [];
       let isValid = true;
       tableBody.querySelectorAll('tr').forEach(row => {
           const inputs = row.querySelectorAll('.inputField');
           const rowData = {
               app_name: inputs[0].value,
               app_id: inputs[1].value,
               ip_address: inputs[2].value,
               domain: inputs[3].value,
               deployed_version: inputs[4].value,
               deployed_version_date: inputs[5].value,
               latest_version: inputs[6].value,
               latest_version_date: inputs[7].value,
               comment: inputs[8].value
           };
      // Walidacja dat
      if (!validateDate(rowData.deployed_version_date) || !validateDate(rowData.latest_version_date)) {
       isValid = false; // Jeśli jakakolwiek data jest niepoprawna, ustawiam flagę isValid na false
       if (!validateDate(rowData.deployed_version_date)) {
           inputs[5].classList.add('error');
       }
       if (!validateDate(rowData.latest_version_date)) {
           inputs[7].classList.add('error');
       }  
};
   if (!isValid) {
   showAlert('Nieprawidłowy format daty! Użyj formatu "YYYY-MM-DD".', true);
   return;
                 }
   });
NewChangedUnchanged();
});  
//Walidacja dat
function validateDate(dateStr) {
       // Sprawdzamy czy data jest w formacie "YYYY-MM-DD"
       const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
       if (!dateRegex.test(dateStr)) {
           return false;
       }
   
       const date = new Date(dateStr);
       const timestamp = date.getTime();
   
       // Sprawdzamy, czy data jest poprawna (czy nie jest NaN)
       return !isNaN(timestamp);
   }
// Funkcja stan() do sprawdzania zmian
async function NewChangedUnchanged() {
   const updatedData = [];
   const newRows = [];
   const changedRows = [];
   const unchangedRows = [];
   tableBody.querySelectorAll('tr').forEach((row, index) => {
       const inputs = row.querySelectorAll('.inputField');
       const rowData = {
           app_name: inputs[0].value,
           app_id: inputs[1].value,
           ip_address: inputs[2].value,
           domain: inputs[3].value,
           deployed_version: inputs[4].value,
           deployed_version_date: inputs[5].value,
           latest_version: inputs[6].value,
           latest_version_date: inputs[7].value,
           comment: inputs[8].value
       };
       const editRow = editData[index]; 
       if (editRow) {
           // Porównanie nowego wiersza z edytowanym
           let isChanged = false;
           // Porównanie każdego pola wiersza
           for (const key in rowData) {
               if (rowData[key] !== editRow[key]) {
                   isChanged = true;
                   break;
               }
           }
           // Jeśli dane się zmieniły, dodajemy je do changedRows
           if (isChanged) {
               changedRows.push(rowData);
           } else {
               unchangedRows.push(rowData);
           }
       } else {
           // Jeśli editRow nie istnieje, oznacza to nowy wiersz
           newRows.push(rowData);
       }
       updatedData.push(rowData);
   });
   console.log("------------------------------------------------------------------------------------------------------------------");
   // Nowe wiersze (dodane dane)
   console.log("New rows:", newRows);
   // Wiersze, które zostały zmienione
   console.log("Changed rows:", changedRows);
   // Wiersze, które pozostały niezmienione
   console.log("Unchanged rows:", unchangedRows);
   saveNewData(newRows);
   saveChangedData(changedRows);
   
}
// Funkcja do aktualizacji/zapisywania danych(server)
async function saveNewData(newRows) {
   try {
       // Iterowanie po każdym elemencie newRows
       for (const dataItem of newRows) {
           // Wysyłanie pojedynczego żądania POST dla każdego elementu
           let response = await fetch('/new', { 
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(dataItem) 
           });
       }

       // Po zapisaniu wszystkich danych, pokazanie alertu
       showAlert('Wszystkie dane zostały pomyślnie zapisane!');
   } catch (error) {
       console.error('Błąd podczas zapisywania danych:', error);
       showAlert('Wystąpił błąd podczas zapisywania danych.', true);
   }
}
async function saveChangedData(changedRows) {
   try {
       for (const dataItem of changedRows) {
           const matchingData = editData.find(item => item.app_id === dataItem.app_id);
           if (matchingData) {
               dataItem.id = matchingData.id;
               console.log(`Zmieniono dane dla ID: ${dataItem.id}`);
           } else {
               console.warn('Brak pasującego elementu w editData!');
           }
           // Wysyłanie żądania POST z przypisanym ID
           let response = await fetch(`/edit/${dataItem.id}`, { 
               method: 'PUT',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(dataItem) 
           });
       }
       showAlert('Wszystkie dane zostały pomyślnie zapisane!');
   } catch (error) {
       console.error('Błąd podczas zapisywania danych:', error);
       showAlert('Wystąpił błąd podczas zapisywania danych.', true);
   }
}

});