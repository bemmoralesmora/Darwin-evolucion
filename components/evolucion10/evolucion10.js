let DOM_evolucion10 = document.querySelector("#evolucion10");
DOM_evolucion10.innerHTML = `
<header class="rsa1">
<div class="options-bar">
        <div class="option" onclick="showContent(1)">★</div>
        <div class="option" onclick="showContent(2)">★</div>
        <div class="option" onclick="showContent(3)">★</div>
        <div class="option" onclick="showContent(4)">★</div>
        <div class="option" onclick="showContent(5)">★</div>
        <div class="option" onclick="showContent(6)">★</div>
        <div class="option" onclick="showContent(7)">★</div>
        <div class="option" onclick="showContent(8)">★</div>
    </div>
    
    <div class="vhsasd"></div>
    <div id="content1" class="content" style="display: none;">
        <h2> Teléfono de Bell (1876):</h2>
        <div class="info">
            <p> Inventado por Alexander Graham Bell, este fue el primer  <br>dispositivo que permitía la comunicación vocal electrónica. <br>Consistía  en un receptor de carbono y un transmisor que  <br>convertía el sonido en corriente eléctrica y viceversa.</p>
            <img src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2022/06/10/62a31b541ecb6.jpeg" alt="Imagen 1">
        </div>
    </div>

    <div id="content2" class="content" style="display: none;">
        <h2>Teléfono móvil Motorola DynaTAC (1983):</h2>
        <div class="info">
            <p>Popularmente conocido como "ladrillo", fue el primer <br> teléfono móvil comercialmente disponible. Era  <br>grande y pesado, con funciones limitadas, pero  <br>marcó el inicio de la era de la telefonía móvil.</p>
            <img src="https://i.blogs.es/d4ccf9/motorola-portada/450_1000.png" alt="Imagen 2">
        </div>
    </div>

    <div id="content3" class="content" style="display: none;">
        <h2>Nokia 3310 (2000):</h2>
        <div class="info">
            <p>Uno de los teléfonos más icónicos de Nokia, conocido <br> por su durabilidad y larga duración de la batería. Presentaba <br> un diseño compacto, una pantalla monocromática y el popular juego Snake.</p>
            <img src="https://c8.alamy.com/comp/H33HA1/nokia-3310-gsm-mobile-phone-released-2000-H33HA1.jpg" alt="Imagen 2">
        </div>
    </div>

     <div id="content4" class="content" style="display: none;">
        <h2>iPhone (2007):</h2>
        <div class="info">
            <p>Revolucionó la industria de los teléfonos móviles con  su <br> pantalla táctil capacitiva, un diseño elegante y la introducción  <br>de la App Store, que permitió a los usuarios descargar aplicaciones  <br>para personalizar y mejorar la funcionalidad de sus dispositivos.</p>
            <img src="https://www.nydailynews.com/wp-content/uploads/migration/2015/06/29/2VR2U5D6WAQDY3TH4AGFQVPYRQ.jpg?w=1024" alt="Imagen 2">
        </div>
    </div> 

    <div id="content5" class="content" style="display: none;">
        <h2>Samsung Galaxy S (2010):</h2>
        <div class="info">
            <p>Marcó el inicio de la serie Galaxy S de Samsung, compitiendo  <br>directamente con el iPhone. Introdujo características como  <br>una pantalla Super AMOLED y un procesador de doble núcleo,  <br>estableciendo un estándar para los teléfonos Android de gama alta.</p>
            <img src="https://p.turbosquid.com/ts-thumb/Af/ZG3o8k/lTxVMOsF/render_01/jpg/1589901762/600x600/fit_q87/539a82d54a6cfc6e2c96e63b50a0d4da5bebb792/render_01.jpg" alt="Imagen 2">
        </div>
    </div> 

    <div id="content6" class="content" style="display: none;">
        <h2>iPhone X (2017): </h2>
        <div class="info">
            <p>Introdujo importantes cambios en el diseño del iPhone,  eliminando  <br>el botón de inicio y adoptando una pantalla OLED que abarcaba casibr <br> todo el frente del dispositivo. También presentó Face ID, un sistema <br> de reconocimiento facial para desbloquear el teléfono.</p>
            <img src="https://cellexportgt.com/cdn/shop/products/s-l1600-4.jpg?v=1655865296&width=800" alt="Imagen 2">
        </div>
    </div> 

    <div id="content7" class="content" style="display: none;">
        <h2>Samsung Galaxy S21 (2021):</h2>
        <div class="info">
            <p>Uno de los modelos más recientes en la serie Galaxy S de Samsung. <br> Ofrece características de vanguardia, como una pantalla AMOLED  <br>dinámica de alta frecuencia de actualización, potentes cámaras y compatibilidad con redes 5G.</p>
            <img src="https://image-us.samsung.com/SamsungUS/home/mobile/phones/pdp/galaxy-s21-fe-5g/gallery/SM-G990U-graphite-1.png" alt="Imagen 2">
        </div>
    </div>

        <div id="content8" class="content" style="display: none;">
            <h2>Iphone 15 (2023):</h2>
            <div class="info">
                <p>Como mencioné anteriormente, hasta mi última actualización en enero <br> de 2023, Apple no había lanzado un iPhone 15, por lo que no puedo proporcionar <br> características específicas de ese modelo en particular. Sin embargo, puedo  <br>ofrecerte algunas suposiciones sobre posibles características que podrían incluirse en un  <br>futuro iPhone 15, basadas en las tendencias actuales y las expectativas de la industria                </p>
                <img src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg" alt="Imagen 2">
            </div>
        </div>
      <div class="eufi">"EVOLUCION DE TELEFONO"</div>
    </div>
    </header>
`;

function showContent(option) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });
    var contentId = 'content' + option;
    var contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';
}