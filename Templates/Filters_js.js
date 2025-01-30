const data = [
    { name: 'Jan', age: 28 },
    { name: 'Anna', age: 22 },
    { name: 'Piotr', age: 35 },
    { name: 'Maria', age: 24 },
];

function getFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    const filters = {};
    params.forEach((value, key) => {
        filters[key] = value;
    });
    return filters;
}

function createParsedColumnFilters(filters) {
    const parsedFilters = {};
    Object.entries(filters).forEach(([key, value]) => {
        if (value === 'true' || value === 'false') {
            parsedFilters[key] = { eq: value === 'true' };
        } else if (/\d+_\d+/.test(value)) {
            const [gte, lte] = value.split('_').map(Number);
            parsedFilters[key] = { gte, lte };
        } else if (/\d{4}-\d{2}-\d{2}/.test(value)) {
            parsedFilters[key] = { gte: value };
        } else {
            parsedFilters[key] = { contains: value };
        }
    });
    return parsedFilters;
}

function updateURL(filters) {
    const params = new URLSearchParams(filters);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
}

function loadFilters() {
    const nameFilter = localStorage.getItem('nameFilter') ? localStorage.getItem('nameFilter').split(',') : [];
    const ageFilter = localStorage.getItem('ageFilter') ? localStorage.getItem('ageFilter').split(',') : [];
    
    const filters = getFiltersFromURL();
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
    const filters = {};
    const nameFilter = Array.from(document.querySelectorAll('#nameFilter input:checked')).map(checkbox => checkbox.value);
    const ageFilter = Array.from(document.querySelectorAll('#ageFilter input:checked')).map(checkbox => checkbox.value);
    
    if (nameFilter.length) filters.name = nameFilter.join(',');
    if (ageFilter.length) filters.age = ageFilter.join(',');
    
    updateURL(filters);
    saveFilters();
    
    const parsedColumnFilters = createParsedColumnFilters(filters);
    console.log('parsedFilters:',parsedColumnFilters);
    
    const filteredData = data.filter(item => {
        return (!nameFilter.length || nameFilter.includes(item.name)) &&
               (!ageFilter.length || ageFilter.includes(String(item.age)));
    });
    displayData(filteredData);
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
document.querySelectorAll('#filters input').forEach(input => {
    input.addEventListener('change', applyFilters);
});
