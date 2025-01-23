const data = [
    { name: 'Jan', age: 28 },
    { name: 'Anna', age: 22 },
    { name: 'Piotr', age: 35 },
    { name: 'Maria', age: 24 },
];
function loadFilters() {
    const nameFilter = localStorage.getItem('nameFilter') ? localStorage.getItem('nameFilter').split(',') : [];
    const ageFilter = localStorage.getItem('ageFilter') ? localStorage.getItem('ageFilter').split(',') : [];
    updateFilters();
    nameFilter.forEach(name => {
        const checkbox = document.querySelector(`#nameFilter input[value="${name}"]`);
        if (checkbox) checkbox.checked = true;
    });
    ageFilter.forEach(age => {
        const checkbox = document.querySelector(`#ageFilter input[value="${age}"]`);
        if (checkbox) checkbox.checked = true;
    });

    applyFilters();
}
function saveFilters() {
    const nameFilter = Array.from(document.querySelectorAll('#nameFilter input:checked')).map(checkbox => checkbox.value);
    const ageFilter = Array.from(document.querySelectorAll('#ageFilter input:checked')).map(checkbox => checkbox.value);

    localStorage.setItem('nameFilter', nameFilter.join(','));
    localStorage.setItem('ageFilter', ageFilter.join(','));
}
function applyFilters() {
    const nameFilter = Array.from(document.querySelectorAll('#nameFilter input:checked')).map(checkbox => checkbox.value);
    const ageFilter = Array.from(document.querySelectorAll('#ageFilter input:checked')).map(checkbox => checkbox.value);
    const filteredData = data.filter(item => {
        return (!nameFilter.length || nameFilter.includes(item.name)) &&
               (!ageFilter.length || ageFilter.includes(String(item.age)));
    });
    displayData(filteredData);
    saveFilters();
}
function displayData(data) {
    const container = document.getElementById('dataContainer');
    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `Imię: ${item.name}, Wiek: ${item.age}`;
        container.appendChild(div);
    });
}
function toggleFilters() {
    const filters = document.getElementById('filters');
    if (filters.style.display === 'none') {
        filters.style.display = 'flex';
    } else {
        filters.style.display = 'none';
    }
    updateFilters();
}
function updateFilters() {
    const nameFilter = document.getElementById('nameFilter');
    const ageFilter = document.getElementById('ageFilter');
    nameFilter.innerHTML = '';
    ageFilter.innerHTML = '';

    const uniqueNames = [...new Set(data.map(item => item.name))];
    const uniqueAges = [...new Set(data.map(item => item.age))];
    uniqueNames.forEach(name => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = name;
        label.appendChild(checkbox);
        label.append(` ${name}`);
        nameFilter.appendChild(label);
    });
    uniqueAges.forEach(age => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = age;
        label.appendChild(checkbox);
        label.append(` ${age}`);
        ageFilter.appendChild(label);
    });
}
function clearFilters() {
    document.querySelectorAll('.filter-list input').forEach(checkbox => {
        checkbox.checked = false;
    });
    saveFilters();
    applyFilters();
}
document.addEventListener('DOMContentLoaded', loadFilters);
