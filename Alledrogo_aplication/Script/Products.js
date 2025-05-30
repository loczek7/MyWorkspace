document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            productID: 'P001',
            category: ['Elektronika', 'Home'],
            img: './img/tvphoto.jpg',
            title: 'Laptop Dell Inspiron 15',
            oldPrice: '3399,00 zł',
            newPrice: '2999,99 zł',
            stock: 10,
            description: 'Laptop Dell Inspiron 15, alalallalalalalallalalalalaalllallalalaaaaaaaaaaaaaaaaaaaaaaaaaa',
            payImg: './img/pay.png'
        },
        {
            productID: 'P002',
            category: 'Elektronika',
            img: './img/ps5.jpg',
            title: 'PlayStation 5',
            oldPrice: '2457,00 zł',
            newPrice: '2199,99 zł',
            stock: 5,
            description: 'PlayStation 5 alalallalalalalallalalalalaalllallalalaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssss',
            payImg: './img/pay.png'
        },
        {
            productID: 'P003',
            category: 'Elektronika',
            img: './img/iphone.jpg',
            title: 'Telefon iPhone 15',
            oldPrice: '2699,00 zł',
            newPrice: '2299,99 zł',
            stock: 3,
            description: 'Telefon iPhone 15 alalallalalalalallalalalalaalllallalalaaaaaaaaaaaaaaaaaaaaaaaaaa',
            payImg: './img/pay.png'
        }
    ];
    
    const container = document.getElementById('product-container');
    for (let i = 0; i < 3; i++) {
        products.forEach(product => {
        
            const productDiv = document.createElement('div');
            productDiv.classList.add('product', 'speak');
            productDiv.setAttribute('tabindex', '0');
            
            productDiv.innerHTML = `
                <a href="Products_view.html?productID=${product.productID}">
                <img src="${product.img}" alt="${product.title}">
                <div class="smart-deal">
                    <div class="top">
                        <p class="occassion">Smart! okazja</p>
                        <p class="old-price">${product.oldPrice}</p>
                    </div>
                    <p class="info">
                        cena z 30 dni <span class="info-icon">ⓘ</span>
                    </p>
                </div>
                <p class="price">${product.newPrice}</p>
                <div class="top">
                    <img src="./img/zielonaodznaka.png" alt="Ikona gwarancji">
                    <p class="warranty">Gwarancja<br> najniższej<br> ceny</p>
                </div>
                <div class="sm">
                    <img src="./img/smart.png" alt="Ikona Smart">
                </div>
                <p>${product.description}</p>
                <div class="top">
                    <p class="paylater">Zapłać później z</p>
                    <div class="pay">
                        <img src="${product.payImg}" alt="Logo płatności późniejszej">
                    </div>
                </div>
                <div class="delivery">
                    <p>Dostawa we wtorek<span class="info-icon">ⓘ</span></p>
                </div>
                </a>
            `;
            
            container.appendChild(productDiv);
        });
    }
});
