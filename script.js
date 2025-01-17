let currentId = 1000;
const deletedRows = [];
fetch('/app_ids')
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#tbl tbody');
        data.forEach(app => addRowToTable(tbody, app.id, app.app_id, app.url));
    })
    .catch(console.error);

function addRow() {
    const tbody = document.querySelector('#tbl tbody');
    addRowToTable(tbody, currentId++, '', '', 'new');
}

function addRowToTable(tbody, id, app_id, url, status = 'unchanged') {
    const row = document.createElement('tr');
    row.dataset.status = status;

    row.innerHTML = `
        <td><input type="text" value="${id}" readonly></td>
        <td><input type="text" value="${app_id}" onchange="checkRowStatus(this)" data-original=""></td>
        <td><input type="text" value="${url}" onchange="checkRowStatus(this)" data-original=""></td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    tbody.appendChild(row);
}

function deleteRow(button) {
    const row = button.closest('tr');
    const inputs = row.querySelectorAll('input');
    const id = inputs[0].value;

    if (row.dataset.status !== 'new') {
        deletedRows.push({ id, status: 'deleted' });
    }

    row.remove();
    console.log('Row deleted');
}

function checkRowStatus(inputElement) {
    const row = inputElement.closest('tr');
    const inputs = row.querySelectorAll('input');

    const id = inputs[0].value;
    const app_id = inputs[1].value;
    const url = inputs[2].value;
    const originalapp_id = inputs[1].dataset.original;
    const originalUrl = inputs[2].dataset.original;

    let status = row.dataset.status;

    if (status === 'new') {
        return;
    }
    if (app_id !== originalapp_id || url !== originalUrl) {
        status = 'changed';
    } else {
        status = 'unchanged';
    }

    row.dataset.status = status;
    console.log(`Row status updated: ${status}`);
}

function submitData() {
    const tableRows = document.querySelectorAll('#tbl tbody tr');
    const newRows = [];
    const changedRows = [];
    const unchangedRows = [];

    tableRows.forEach(row => {
        const inputs = row.querySelectorAll('input');
        const id = inputs[0].value;
        const app_id = inputs[1].value;
        const url = inputs[2].value;
        const status = row.dataset.status;

        const rowData = { id, app_id, url, status };

        if (status === 'new') {
            newRows.push(rowData);
        } else if (status === 'changed') {
            changedRows.push(rowData);
        } else if (status === 'unchanged') {
            unchangedRows.push(rowData);
        }
    });

    console.log('=== Aktualny Stan ===');
    console.log('Nowe wiersze (newRows):', newRows);
    console.log('Zmienione wiersze (changedRows):', changedRows);
    console.log('Nie zmienione wiersze (unchangedRows):', unchangedRows);
    console.log('Usunięte wiersze (deletedRows):', deletedRows);
    console.log('================================');

    saveNewDataToServer(newRows);
    uploadChangedDataToServer(changedRows);
    deletedRows.forEach(row => deleteDataFromServer(row.id));
}

function saveNewDataToServer(newRows) {
    newRows.forEach(item => {
        console.log('Wysyłane dane:', item);
        fetch('/app_ids', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        }).then(response => {
            if (!response.ok) {
                console.error('Błąd podczas wysyłania danych:', item);
            } else {
               // console.log('Dodano nowy wiersz:', item);
            }
        }).catch(console.error);
    });
}

function uploadChangedDataToServer(changedRows) {
    changedRows.forEach(row => {
        const { id, app_id, url } = row;

        fetch(`/app_ids/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ app_id: app_id, url })
        })
        .then(response => {
            if (!response.ok) {
                console.error(`Błąd podczas aktualizacji App ID: ${id}`, response.statusText);
            } else {
                console.log(`Zaktualizowano App ID ${id}:`, row);
            }
        })
        .catch(error => {
            console.error(`Błąd sieci podczas aktualizacji App ID: ${id}`, error);
        });
    });
}

function deleteDataFromServer(rowId) {
    fetch(`/app_ids/${rowId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            console.error(`Błąd podczas usuwania App ID: ${rowId}`, response.statusText);
        } else {
            console.log(`App ID ${rowId} został pomyślnie usunięty.`);
        }
    })
    .catch(error => {
        console.error(`Błąd sieci podczas usuwania App ID: ${rowId}`, error);
    });
}