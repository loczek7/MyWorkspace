const typeDefinitions = [
    { Code: "A123", Id: "ID001", ServiceId: "SVC001", Name: "Service A", employeeId: "E123", aggregator: "Agg1", contentProvider: "Provider1", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: false, hasNotes: true, isAddedManually: false, purchCurrency: "USD", salesProfit: 150.5 },
  { Code: "B234", Id: "ID002", ServiceId: "SVC002", Name: "Service B", employeeId: "E124", aggregator: "Agg2", contentProvider: "Provider2", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: false, isOnline: true, hasNotes: false, isAddedManually: true, purchCurrency: "EUR", salesProfit: 200.75 },
  { Code: "C345", Id: "ID003", ServiceId: "SVC003", Name: "Service C", employeeId: "E125", aggregator: "Agg3", contentProvider: "Provider3", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: true, hasNotes: true, isAddedManually: false, purchCurrency: "GBP", salesProfit: 100.25 },
  { Code: "D456", Id: "ID004", ServiceId: "SVC004", Name: "Service D", employeeId: "E126", aggregator: "Agg4", contentProvider: "Provider4", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: false, hasNotes: true, isAddedManually: true, purchCurrency: "USD", salesProfit: 120.5 },
  { Code: "E567", Id: "ID005", ServiceId: "SVC005", Name: "Service E", employeeId: "E127", aggregator: "Agg5", contentProvider: "Provider5", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: true, isOnline: true, hasNotes: false, isAddedManually: false, purchCurrency: "AUD", salesProfit: 130.75 },
  { Code: "F678", Id: "ID006", ServiceId: "SVC006", Name: "Service F", employeeId: "E128", aggregator: "Agg6", contentProvider: "Provider6", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: true, hasNotes: true, isAddedManually: true, purchCurrency: "CAD", salesProfit: 170.25 },
  { Code: "G789", Id: "ID007", ServiceId: "SVC007", Name: "Service G", employeeId: "E129", aggregator: "Agg7", contentProvider: "Provider7", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: false, hasNotes: true, isAddedManually: false, purchCurrency: "CHF", salesProfit: 180.5 },
  { Code: "H890", Id: "ID008", ServiceId: "SVC008", Name: "Service H", employeeId: "E130", aggregator: "Agg8", contentProvider: "Provider8", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: false, isOnline: true, hasNotes: false, isAddedManually: true, purchCurrency: "JPY", salesProfit: 190.75 },
  { Code: "I901", Id: "ID009", ServiceId: "SVC009", Name: "Service I", employeeId: "E131", aggregator: "Agg9", contentProvider: "Provider9", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: true, hasNotes: true, isAddedManually: false, purchCurrency: "SEK", salesProfit: 200.25 },
  { Code: "J012", Id: "ID010", ServiceId: "SVC010", Name: "Service J", employeeId: "E132", aggregator: "Agg10", contentProvider: "Provider10", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: false, hasNotes: true, isAddedManually: true, purchCurrency: "NOK", salesProfit: 210.5 },
  { Code: "K123", Id: "ID011", ServiceId: "SVC011", Name: "Service K", employeeId: "E133", aggregator: "Agg11", contentProvider: "Provider11", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: true, isOnline: true, hasNotes: false, isAddedManually: false, purchCurrency: "DKK", salesProfit: 220.75 },
  { Code: "L234", Id: "ID012", ServiceId: "SVC012", Name: "Service L", employeeId: "E134", aggregator: "Agg12", contentProvider: "Provider12", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: true, hasNotes: true, isAddedManually: true, purchCurrency: "PLN", salesProfit: 230.25 },
  { Code: "M345", Id: "ID013", ServiceId: "SVC013", Name: "Service M", employeeId: "E135", aggregator: "Agg13", contentProvider: "Provider13", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: false, hasNotes: true, isAddedManually: false, purchCurrency: "HUF", salesProfit: 240.5 },
  { Code: "N456", Id: "ID014", ServiceId: "SVC014", Name: "Service N", employeeId: "E136", aggregator: "Agg14", contentProvider: "Provider14", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: false, isOnline: true, hasNotes: false, isAddedManually: true, purchCurrency: "CZK", salesProfit: 250.75 },
  { Code: "O567", Id: "ID015", ServiceId: "SVC015", Name: "Service O", employeeId: "E137", aggregator: "Agg15", contentProvider: "Provider15", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: true, hasNotes: true, isAddedManually: false, purchCurrency: "RUB", salesProfit: 260.25 },
  { Code: "P678", Id: "ID016", ServiceId: "SVC016", Name: "Service P", employeeId: "E138", aggregator: "Agg16", contentProvider: "Provider16", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: false, hasNotes: true, isAddedManually: true, purchCurrency: "MXN", salesProfit: 270.5 },
  { Code: "Q789", Id: "ID017", ServiceId: "SVC017", Name: "Service Q", employeeId: "E139", aggregator: "Agg17", contentProvider: "Provider17", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: true, isOnline: true, hasNotes: false, isAddedManually: false, purchCurrency: "BRL", salesProfit: 280.75 },
  { Code: "R890", Id: "ID018", ServiceId: "SVC018", Name: "Service R", employeeId: "E140", aggregator: "Agg18", contentProvider: "Provider18", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: true, hasNotes: true, isAddedManually: true, purchCurrency: "PEN", salesProfit: 290.25 },
  { Code: "S901", Id: "ID019", ServiceId: "SVC019", Name: "Service S", employeeId: "E141", aggregator: "Agg19", contentProvider: "Provider19", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: false, hasNotes: true, isAddedManually: false, purchCurrency: "ARS", salesProfit: 300.5 },
  { Code: "T012", Id: "ID020", ServiceId: "SVC020", Name: "Service T", employeeId: "E142", aggregator: "Agg20", contentProvider: "Provider20", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: false, isOnline: true, hasNotes: false, isAddedManually: true, purchCurrency: "CLP", salesProfit: 310.75 },
  { Code: "U123", Id: "ID021", ServiceId: "SVC021", Name: "Service U", employeeId: "E143", aggregator: "Agg21", contentProvider: "Provider21", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: true, hasNotes: true, isAddedManually: false, purchCurrency: "COP", salesProfit: 320.25 },
  { Code: "V234", Id: "ID022", ServiceId: "SVC022", Name: "Service V", employeeId: "E144", aggregator: "Agg22", contentProvider: "Provider22", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: false, hasNotes: true, isAddedManually: true, purchCurrency: "COP", salesProfit: 330.5 },
  { Code: "W345", Id: "ID023", ServiceId: "SVC023", Name: "Service W", employeeId: "E145", aggregator: "Agg23", contentProvider: "Provider23", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: true, isOnline: true, hasNotes: false, isAddedManually: false, purchCurrency: "PEN", salesProfit: 340.75 },
  { Code: "X456", Id: "ID024", ServiceId: "SVC024", Name: "Service X", employeeId: "E146", aggregator: "Agg24", contentProvider: "Provider24", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: true, hasNotes: true, isAddedManually: true, purchCurrency: "BRL", salesProfit: 350.25 },
  { Code: "Y567", Id: "ID025", ServiceId: "SVC025", Name: "Service Y", employeeId: "E147", aggregator: "Agg25", contentProvider: "Provider25", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: false, hasNotes: true, isAddedManually: false, purchCurrency: "MXN", salesProfit: 360.5 },
  { Code: "Z678", Id: "ID026", ServiceId: "SVC026", Name: "Service Z", employeeId: "E148", aggregator: "Agg26", contentProvider: "Provider26", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: false, isOnline: true, hasNotes: false, isAddedManually: true, purchCurrency: "PEN", salesProfit: 370.75 },
  { Code: "AA789", Id: "ID027", ServiceId: "SVC027", Name: "Service AA", employeeId: "E149", aggregator: "Agg27", contentProvider: "Provider27", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: true, hasNotes: true, isAddedManually: false, purchCurrency: "COP", salesProfit: 380.25 },
  { Code: "BB890", Id: "ID028", ServiceId: "SVC028", Name: "Service BB", employeeId: "E150", aggregator: "Agg28", contentProvider: "Provider28", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: false, hasNotes: true, isAddedManually: true, purchCurrency: "USD", salesProfit: 390.5 },
  { Code: "CC901", Id: "ID029", ServiceId: "SVC029", Name: "Service CC", employeeId: "E151", aggregator: "Agg29", contentProvider: "Provider29", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: true, isOnline: true, hasNotes: false, isAddedManually: false, purchCurrency: "EUR", salesProfit: 400.75 },
  { Code: "DD012", Id: "ID030", ServiceId: "SVC030", Name: "Service DD", employeeId: "E152", aggregator: "Agg30", contentProvider: "Provider30", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: true, hasNotes: true, isAddedManually: true, purchCurrency: "GBP", salesProfit: 410.25 },
  { Code: "EE123", Id: "ID031", ServiceId: "SVC031", Name: "Service EE", employeeId: "E153", aggregator: "Agg31", contentProvider: "Provider31", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: false, hasNotes: true, isAddedManually: false, purchCurrency: "CHF", salesProfit: 420.5 },
  { Code: "FF234", Id: "ID032", ServiceId: "SVC032", Name: "Service FF", employeeId: "E154", aggregator: "Agg32", contentProvider: "Provider32", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: false, isOnline: true, hasNotes: false, isAddedManually: true, purchCurrency: "JPY", salesProfit: 430.75 },
  { Code: "GG345", Id: "ID033", ServiceId: "SVC033", Name: "Service GG", employeeId: "E155", aggregator: "Agg33", contentProvider: "Provider33", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: true, hasNotes: true, isAddedManually: false, purchCurrency: "SEK", salesProfit: 440.25 },
  { Code: "HH456", Id: "ID034", ServiceId: "SVC034", Name: "Service HH", employeeId: "E156", aggregator: "Agg34", contentProvider: "Provider34", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: false, hasNotes: true, isAddedManually: true, purchCurrency: "NOK", salesProfit: 450.5 },
  { Code: "II567", Id: "ID035", ServiceId: "SVC035", Name: "Service II", employeeId: "E157", aggregator: "Agg35", contentProvider: "Provider35", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: true, isOnline: true, hasNotes: false, isAddedManually: false, purchCurrency: "DKK", salesProfit: 460.75 },
  { Code: "JJ678", Id: "ID036", ServiceId: "SVC036", Name: "Service JJ", employeeId: "E158", aggregator: "Agg36", contentProvider: "Provider36", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: true, hasNotes: true, isAddedManually: true, purchCurrency: "PLN", salesProfit: 470.25 },
  { Code: "KK789", Id: "ID037", ServiceId: "SVC037", Name: "Service KK", employeeId: "E159", aggregator: "Agg37", contentProvider: "Provider37", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: false, hasNotes: true, isAddedManually: false, purchCurrency: "HUF", salesProfit: 480.5 },
  { Code: "LL890", Id: "ID038", ServiceId: "SVC038", Name: "Service LL", employeeId: "E160", aggregator: "Agg38", contentProvider: "Provider38", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: false, isOnline: true, hasNotes: false, isAddedManually: true, purchCurrency: "CZK", salesProfit: 490.75 },
  { Code: "MM901", Id: "ID039", ServiceId: "SVC039", Name: "Service MM", employeeId: "E161", aggregator: "Agg39", contentProvider: "Provider39", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: true, hasNotes: true, isAddedManually: false, purchCurrency: "RUB", salesProfit: 500.25 },
  { Code: "NN012", Id: "ID040", ServiceId: "SVC040", Name: "Service NN", employeeId: "E162", aggregator: "Agg40", contentProvider: "Provider40", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: false, hasNotes: true, isAddedManually: true, purchCurrency: "MXN", salesProfit: 510.5 },
  { Code: "OO123", Id: "ID041", ServiceId: "SVC041", Name: "Service OO", employeeId: "E163", aggregator: "Agg41", contentProvider: "Provider41", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: true, isOnline: true, hasNotes: false, isAddedManually: false, purchCurrency: "BRL", salesProfit: 520.75 },
  { Code: "PP234", Id: "ID042", ServiceId: "SVC042", Name: "Service PP", employeeId: "E164", aggregator: "Agg42", contentProvider: "Provider42", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: false, isOnline: true, hasNotes: true, isAddedManually: true, purchCurrency: "PEN", salesProfit: 530.25 },
  { Code: "QQ345", Id: "ID043", ServiceId: "SVC043", Name: "Service QQ", employeeId: "E165", aggregator: "Agg43", contentProvider: "Provider43", issueStatus: "OPEN", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: false, hasNotes: true, isAddedManually: false, purchCurrency: "ARS", salesProfit: 540.5 },
  { Code: "RR456", Id: "ID044", ServiceId: "SVC044", Name: "Service RR", employeeId: "E166", aggregator: "Agg44", contentProvider: "Provider44", issueStatus: "CLOSED", voidStatus: "VOID", isMiscDoc: false, isOnline: true, hasNotes: false, isAddedManually: true, purchCurrency: "CLP", salesProfit: 550.75 },
  { Code: "SS567", Id: "ID045", ServiceId: "SVC045", Name: "Service SS", employeeId: "E167", aggregator: "Agg45", contentProvider: "Provider45", issueStatus: "PENDING", voidStatus: "ACTIVE", isMiscDoc: true, isOnline: true, hasNotes: true, isAddedManually: false, purchCurrency: "COP", salesProfit: 560.25 },
];
function getFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    const filters = {};
    params.forEach((value, key) => {
        filters[key] = value;
    });
    return filters;
}
function updateURL(filters) {
    const params = new URLSearchParams(filters);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
}
function loadFilters() {
    const filters = getFiltersFromURL();
    updateURL(filters);
    Object.entries(filters).forEach(([key, value]) => {
        const selectElement = document.querySelector(`#${key}Filter select`);
        if (selectElement && value) {
            const values = value.split(',');
            Array.from(selectElement.options).forEach(option => {
                if (values.includes(option.value)) {
                    option.selected = true;
                }
            });
        }
        if (key === 'salesProfit') {
            const [min, max] = value.split('_').map(Number);
            document.querySelector('#profitMin').value = min || '';
            document.querySelector('#profitMax').value = max || '';
        }
    });
    applyFilters();
}
function updateFilters() {
    const nameSelect = document.getElementById('nameSelect');
    nameSelect.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '--NONE--';
    nameSelect.appendChild(defaultOption);
    const uniqueCodes = [...new Set(typeDefinitions.map(item => item.Code))];
    uniqueCodes.forEach(code => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = code;
        nameSelect.appendChild(option);
    });
}
function applyFilters() {
    const filters = getFiltersFromURL();
    const filteredData = typeDefinitions.filter(item => {
        let matches = true;
        if (filters.name && filters.name !== "") {
            const selectedCodes = filters.name.split(','); 
            if (!selectedCodes.includes(item.Code)) {
                matches = false;
            }
        }
        if (filters.salesProfit) {
            const [minProfit, maxProfit] = filters.salesProfit.split('_').map(Number);
            if (item.salesProfit < minProfit || item.salesProfit > maxProfit) {
                matches = false;
            }
        }
        return matches;
    });
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";
    filteredData.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.Code}</td>
            <td>${item.Name}</td>
            <td>${item.employeeId}</td>
            <td>${item.purchCurrency}</td>
            <td>${item.salesProfit}</td>
        `;
        tableBody.appendChild(row);
    });
}
function saveFilters() {
    const nameSelect = Array.from(document.querySelector('#nameSelect').selectedOptions).map(option => option.value).join(',');
    const profitMin = document.querySelector('#profitMin').value || 0;
    const profitMax = document.querySelector('#profitMax').value || 100000;
    const filters = {
        name: nameSelect,
        salesProfit: `${profitMin}_${profitMax}`,
    };
    updateURL(filters);
}
function clearFilters() {
    document.querySelector('#nameSelect').value = '';
    document.querySelector('#profitMin').value = '';
    document.querySelector('#profitMax').value = '';
    saveFilters();
    applyFilters();
}
function toggleFilters() {
    const filters = document.getElementById('filters');
    if (filters.style.display === 'none') {
        filters.style.display = 'flex';
    } else {
        filters.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    loadFilters();
    updateFilters(); 
});
document.querySelector('#nameSelect').addEventListener('change', saveFilters);
document.querySelector('#profitMin').addEventListener('input', saveFilters);
document.querySelector('#profitMax').addEventListener('input', saveFilters);