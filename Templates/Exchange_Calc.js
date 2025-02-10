const API_URL = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get(API_URL);
        const rates = response.data[0].rates;
        console.log('Exchange Rate Data:', rates);
        const currencySelect = document.getElementById('currencySelect');
        rates.forEach(rate => {
            const option = document.createElement('option');
            option.value = rate.code;
            option.textContent = `${rate.currency} (${rate.code})`;
            currencySelect.appendChild(option);
        });
        currencySelect.addEventListener('change', () => updateExchangeRate(rates));
        document.getElementById('plnInput').addEventListener('input', () => convertToSelectedCurrency(rates));
        document.getElementById('eurInput').addEventListener('input', () => convertToPLN(rates));
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
});
function updateExchangeRate(rates) {
    const selectedCurrency = document.getElementById('currencySelect').value;
    const rate = rates.find(rate => rate.code === selectedCurrency)?.mid || 1;
    document.getElementById('exchangeRate').value = rate;
    convertToSelectedCurrency(rates);
}
function convertToSelectedCurrency(rates) {
    const selectedCurrency = document.getElementById('currencySelect').value;
    const rate = rates.find(rate => rate.code === selectedCurrency)?.mid || 1;
    const plnValue = parseFloat(document.getElementById('plnInput').value);
    if (!isNaN(plnValue)) {
        document.getElementById('eurInput').value = (plnValue / rate).toFixed(2);
    }
}
function convertToPLN(rates) {
    const selectedCurrency = document.getElementById('currencySelect').value;
    const rate = rates.find(rate => rate.code === selectedCurrency)?.mid || 1;
    const eurValue = parseFloat(document.getElementById('eurInput').value);
    if (!isNaN(eurValue)) {
        document.getElementById('plnInput').value = (eurValue * rate).toFixed(2);
    }
}