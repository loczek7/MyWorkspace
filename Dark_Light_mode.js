const themeSelect = document.getElementById('theme-select');
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
themeSelect.value = savedTheme;
themeSelect.addEventListener('change', (event) => {
    setTheme(event.target.value);
});
