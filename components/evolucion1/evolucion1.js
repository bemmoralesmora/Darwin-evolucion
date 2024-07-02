let DOM_evolucion1 = document.querySelector("#evolucion1");
DOM_evolucion1.innerHTML = `
<div class="pantalla_lglm">
    <div class="timeline_lglm">
        <div class="circlegllm" onmouseover="showInfo('info1')">1</div>
        <div class="circlegllm" onmouseover="showInfo('info2')">2</div>
        <div class="circlegllm" onmouseover="showInfo('info3')">3</div>
        <div class="circlegllm" onmouseover="showInfo('info4')">4</div>
        <div class="circlegllm" onmouseover="showInfo('info5')">5</div>
        <div class="circlegllm" onmouseover="showInfo('info6')">6</div>


        <!-- Añade más círculos según sea necesario -->
    </div>
    <div class="large-boxgl" id="largeBox">
            <header class="Introduc_lglm">
                <h1>Descubre la Fascinante evolución del Mundo del Pulpo</h1>
            </header>
            <header class="IntroOpc_lglm">
                <h1>Coloca el cursor sobre un círculo para ver información</h1>
            </header>
    </div>

</div>
`;

function showInfo(infoId) {
    const largeBox = document.getElementById('largeBox');
    const info = {
        'info1': `
        <div class="EvoInfo_gl">
            <h2 class="EvoTitlegl">HACE MÁS DE 500 MILLONES DE AÑOS</h2>
            <h3>Los Primeros Cefalópodos</h3>
            <p>Los antecesores de los pulpos, los cefalópodos, surgen durante el período Cámbrico. Estos primeros cefalópodos presentan caparazones externos y comienzan a dominar los mares primitivos, sentando las bases para la futura diversificación de estos fascinantes moluscos.</p>
            <li>Fósil de más de 400 millones de años: </li>
            <div class="btnYouTubegl" href="">
                <a href="https://youtu.be/Og-QHzRJQKg?si=DCjEL_KZbIbuWUZ4">
                    <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="">
                </a>
            </div>
        </div>
        <div class="bigImggl">
            <img src="https://cienciaes.com/images/3768.jpg" alt="">
        </div>
        `,
        'info2': `
        <div class="EvoInfo_gl">
            <h2 class="EvoTitlegl">HACE 300 MILLONES DE AÑOS</h2>
            <h3>Revolución Interna</h3>
            <p>En el período Carbonífero, algunos cefalópodos desarrollan caparazones internos, una evolución crucial que mejora su flotabilidad y movilidad. Este cambio prepara el escenario para la eventual aparición de los pulpos modernos.</p>
            <li>Mas acerca del periodo Carbonífero: </li>
            <div class="btnYouTubegl" href="">
                <a href="https://youtu.be/VmoO4ne_8SQ?si=uHg06iwk6pihRy1d">
                    <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="">
                </a>
            </div>
        </div>
        <div class="bigImg2gl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwQ011t3VeNS7_G6Qy4jD3DYKsj5N_c1XqfpCMUlyh3ZvlEiO" alt="">

        </div>
            `,
        'info3': `
        <div class="EvoInfo_gl">
            <h2 class="EvoTitlegl">HACE 140 MILLONES DE AÑOS</h2>
            <h3>Los Primeros Pulpos</h3>
            <p>Durante el Cretácico, emergen los primeros pulpos verdaderos (Octopoda). Estos primeros pulpos todavía tienen caparazones internos que poco a poco comienzan a reducirse, lo que les permite mayor flexibilidad y adaptación a diversos entornos marinos.</p>
            <li>Mas acerca de esta especie: </li>
            <div class="btnYouTubegl" href="">
                <a href="https://es.wikipedia.org/wiki/Octopoda">
                    <img src="https://lignux.com/wp-content/uploads/2017/01/wikipedia-logo.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="bigImg2gl">
            <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/03/220308103131-01-vampyropod-fossil-discovery-exlarge-169.jpg" alt="">
        </div>
            `,
        'info4': `
            <div class="EvoInfo_gl">
                <h2 class="EvoTitlegl">HACE 95 MILLONES DE AÑOS</h2>
                <h3>Evolución Sin Caparazón</h3>
                <p>En el Cretácico Superior, los pulpos evolucionan perdiendo completamente su caparazón interno. Esta adaptación les da una agilidad extraordinaria y la capacidad de esconderse en pequeños refugios, convirtiéndolos en maestros del sigilo en el océano.</p>
                <li>Misterios sobre los pulpos: </li>
                <div class="btnYouTubegl" href="">
                    <a href="https://youtu.be/HdDu_WjUEJQ?si=QdT8RV9I7kKxfn8L">
                        <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="">
                    </a>
                </div>
            </div>
            <div class="bigImg2gl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Keuppia_levante.jpg" alt="">
            </div>
            `,
        'info5': `
            <div class="EvoInfo_gl">
                <h2 class="EvoTitlegl">HACE 50-30 MILLONES DE AÑOS</h2>
                <h3>Maestros de las habilidades</h3>
                <p>En el Paleoceno, los pulpos comienzan a diversificarse en diferentes hábitats marinos y desarrollan avanzadas técnicas de camuflaje. La evolución de cromatóforos en su piel les permite cambiar de color y textura, confundiéndose perfectamente con su entorno para cazar y evadir depredadores.</p>
                <p>Y durante el Plioceno, los pulpos actuales empiezan a mostrar comportamientos complejos y habilidades cognitivas avanzadas.</p>
                <li>Demostración de la inteligencia de un pulpo: </li>
                <div class="btnYouTubegl" href="">
                    <a href="https://youtu.be/3Yh8Oct1Yp0?si=mCYreiSN-st7HKA8">
                        <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="">
                    </a>
                </div>
            </div>
            <div class="bigImg3gl">
                <img src="https://concepto.de/wp-content/uploads/2021/07/pulpo-camuflaje-e1626554675746.jpg" alt="">
            </div>
            `,
        'info6': `
            <div class="EvoInfo_gl">
                <h2 class="EvoTitlegl">HOY EN DÍA</h2>
                <h3>El Auge del Estudio del Pulpo</h3>
                <P>En las últimas décadas, la investigación moderna revela la asombrosa inteligencia de los pulpos. Su sistema nervioso complejo, su habilidad para resolver problemas y su capacidad para aprender de experiencias pasadas asombran a los científicos, convirtiendo a los pulpos en objeto de fascinación y estudio intensivo.</P>
                <li>Mas acerca de esta especie: </li>
                <div class="btnYouTubegl" href="">
                    <a href="https://youtu.be/oqCDWTCYj5s?si=cNasoUdjucPxbuiy">
                        <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="">
                    </a>
                </div>
                <div class="btnYouTubegl" href="">
                    <a href="https://youtu.be/aZb5ddjmpno?si=_UUdz1P32BCt92qR">
                        <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="">
                    </a>
                </div>
            </div>
            <div class="bigImg2gl">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohvQD7o0McWlQWmjnqX7t1RxkmM95uDrXjg&s" alt="">
            </div>
            `
    };
    largeBox.innerHTML = info[infoId];
}
