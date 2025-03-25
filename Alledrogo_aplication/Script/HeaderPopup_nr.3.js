document.addEventListener("DOMContentLoaded", function () {
    function openSearchPopup() {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(34, 34, 34, 0.95)';
        overlay.style.zIndex = '999';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';

        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.style.backgroundColor = '#fff';
        popup.style.padding = '20px';
        popup.style.borderRadius = '8px';
        popup.style.width = '600px';
        popup.style.height = 'auto';

        popup.innerHTML = `
    <div id="popup">
        <h3>Wpisz, czego szukasz</h3>
        <p>Znajdziemy sprzedawców, którzy mają wszystko czego szukasz</p>
        <div id="inputsContainer">
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <input type="text" tabindex="0" placeholder="1. produkt" style="flex-grow: 1; margin-right: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 2px;">
                <button style="padding: 6px 6px; background-color: #ff6600; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Remove</button>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <input type="text" tabindex="0" placeholder="2. produkt" style="flex-grow: 1; margin-right: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 2px;">
                <button style="padding: 6px 6px; background-color: #ff6600; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Remove</button>
            </div>
        </div>
        <button id="addProduct" tabindex="0">+ DODAJ KOLEJNY PRODUKT</button>
        <button class="Search-button" tabindex="0">SZUKAJ</button>
    </div>
`;

        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
            let i =3;
            document.getElementById('addProduct').addEventListener('click', () => {
                const inputsContainer = document.getElementById('inputsContainer');
            
                const inputGroup = document.createElement('div');
                inputGroup.style.display = 'flex'; 
                inputGroup.style.alignItems = 'center'; 
                inputGroup.style.marginBottom = '8px'; 
                         
                const newInput = document.createElement('input');
                newInput.type = 'text';
                newInput.placeholder = `${i}. produkt`;
                newInput.style.flexGrow = '1';
                newInput.style.marginRight = '10px';
                newInput.style.padding = '8px';
                newInput.style.border = '1px solid #ccc';
                newInput.style.borderRadius = '2px';
            
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove'; 
                removeButton.style.padding = '6px 6px';
                removeButton.style.backgroundColor = '#ff6600';
                removeButton.style.color = '#fff';
                removeButton.style.border = 'none';
                removeButton.style.borderRadius = '4px';
                removeButton.style.cursor = 'pointer';
                removeButton.style.marginTop = '1px'
            
                removeButton.addEventListener('click', () => {
                    inputsContainer.removeChild(inputGroup);
                });
            
                inputGroup.appendChild(newInput);
                inputGroup.appendChild(removeButton);
            
                inputsContainer.appendChild(inputGroup);
                i++; 
            });
            
    }

    document.getElementById('searchLabel').addEventListener('click', openSearchPopup);
    document.getElementById('searchLabel').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            openSearchPopup();
        }
    });
});