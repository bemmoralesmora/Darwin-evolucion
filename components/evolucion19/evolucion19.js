let DOM_evolucion19 = document.querySelector("#evolucion19");
DOM_evolucion19.innerHTML = `

    <section class="seccion-sarazua">
        <div class="titulo-sarazua">
            <div class="titulo1-sarazua">
                <h1>Nano<span>tecnologia</span></h1>
            </div>
        </div>
        <div class="contenido-sarazua">
            <div class="info-sarazua">
                <img src="https://ignaciogavilan.com/wp-content/uploads/2021/12/la_nanotecnologia-grande400.jpg" alt="">
            </div>
            <div class="info-p-sarazua">              
                <h1>Nano<span>tecnologia</span></h1>
                <br>
                <p>La nanotecnología es una rama de la ciencia y la ingeniería que se dedica al diseño y producción de estructuras y dispositivos a una escala extremadamente pequeña, entre 1 y 100 nanómetros, una milmillonésima parte de un metro. A esta escala, los materiales presentan propiedades físicas, químicas y biológicas únicas.</p>
                <p>Las aplicaciones de la nanotecnología son diversas y abarcan la medicina, donde se usa para la entrega dirigida de fármacos y diagnósticos avanzados; la electrónica, con el desarrollo de dispositivos más pequeños y eficientes; la energía, mejorando la eficiencia de paneles solares y baterías; y los materiales, produciendo composiciones más fuertes y ligeras.</p>
                <p>En el futuro, la nanotecnología tiene el potencial de revolucionar diversas industrias y mejorar significativamente la calidad de vida, con continuas investigaciones que buscan nuevas aplicaciones y soluciones a problemas globales.</p>
            </div>
        </div>
    </section>
    <div class="menu-zarsu">
        <div class="ev19_boton boton1-sarazua">
            <a class="evo">1959</a>
        </div>
        <div class="ev19_boton boton2-sarazua">
            <a class="evo">1981</a>
        </div>
        <div class="ev19_boton boton3-sarazua">
            <a class="evo">1985</a>
        </div>
        <div class="ev19_boton boton4-sarazua">
            <a class="evo">1991</a>
        </div>
        <div class="ev19_boton boton5-sarazua">
            <a class="evo">2004</a>
        </div>
        <div class="ev19_boton btn-reg-sarazua">
            <a class="regresar-sarazua">Regresa al Inicio</a>
        </div>
    </div>
`;

let informacion1_1 = document.querySelector(".boton1-sarazua");

informacion1_1.addEventListener("click",()=>{
    let bloque1_1 = document.querySelector(".info-sarazua");

    bloque1_1.classList.add("activar")
    bloque1_1.innerHTML= `
            <div class="info-sarazua">
                <img src="https://www.shutterstock.com/shutterstock/photos/2264308649/display_1500/stock-vector-ai-robot-look-at-logo-ai-hanging-over-phone-in-hand-artificial-intelligence-technology-conceptual-2264308649.jpg" alt="">
            </div>
    `;
    
});

let informacion19_2 = document.querySelector(".boton1-sarazua");

informacion19_2.addEventListener("click",()=>{
    let bloque_2 = document.querySelector(".info-p-sarazua");

    bloque_2.classList.add("activar")
    bloque_2.innerHTML= `
            <div class="info-p-sarazua">              
                <h1><span>Richard Feynman da la conferencia "There's Plenty of Room at the Bottom"</span></h1>
                <br>
                <p>En 1959, Richard Feynman, un renombrado físico teórico, pronunció una conferencia histórica titulada "There's Plenty of Room at the Bottom" en una reunión anual de la Sociedad Americana de Física en el Instituto de Tecnología de California (Caltech). Esta conferencia es ampliamente considerada como el punto de partida teórico de la nanotecnología.</p>
                <p>En su charla, Feynman propuso la posibilidad de manipular y controlar átomos y moléculas individuales, sugiriendo que los científicos podrían crear materiales y dispositivos con propiedades novedosas si lograban arreglar átomos de manera precisa.</p>
                <br>
                <h2>- Desarrollo de Herramientas Avanzadas</h2>
                <h2>- Máquinas en Escala Nanométrica</h2>
                <h2>- Manipulación de Átomos y Moléculas Individuales</h2>
                <h2>- Miniaturización de la Tecnología</h2>
            </div>
    `;
    
});

let informacion_19_3 = document.querySelector(".boton2-sarazua");

informacion_19_3.addEventListener("click",()=>{
    let bloque_3 = document.querySelector(".info-sarazua");

    bloque_3.classList.add("activar")
    bloque_3.innerHTML= `
            <div class="info-sarazua">
                <img src="https://i.pinimg.com/originals/bf/2b/0b/bf2b0b4c0c945cde732c3f23ae188e78.png" alt="">
            </div>
    `;
    
});

let informacion_19_4 = document.querySelector(".boton2-sarazua");

informacion_19_4.addEventListener("click",()=>{
    let bloque_4 = document.querySelector(".info-p-sarazua");

    bloque_4.classList.add("activar")
    bloque_4.innerHTML= `
            <div class="info-p-sarazua">              
                <h1><span>Inventa el microscopio de efecto túnel (STM)</span></h1>
                <br>
                <p>Gerd Binnig y Heinrich Rohrer, dos científicos del IBM Zurich Research Laboratory, inventaron el microscopio de efecto túnel (STM), una herramienta revolucionaria que permitió la visualización de átomos individuales en una superficie por primera vez. Este avance marcó un hito en la nanotecnología, ya que proporcionó a los investigadores la capacidad de observar y manipular la materia a una escala nanométrica con una precisión sin precedentes.</p>
                <p>El STM se basa en el fenómeno del efecto túnel cuántico, donde una corriente eléctrica fluye entre una punta conductora extremadamente fina y la superficie de una muestra cuando están a una 
                distancia muy corta, sin contacto físico directo</p>
                <br>
                <h2>- Inventores: Gerd Binnig y Heinrich Rohrer en 1981</h2>
                <h2>- Principio de Funcionamiento: Basado en el efecto túnel cuántico</h2>
                <h2>- Visualización de átomos individuales</h2>
                <h2>- Manipulación de átomos en superficies</h2>
            </div>
    `;
    
});

let informacion_19_5 = document.querySelector(".boton3-sarazua");

informacion_19_5.addEventListener("click",()=>{
    let bloque_5 = document.querySelector(".info-sarazua");

    bloque_5.classList.add("activar")
    bloque_5.innerHTML= `
            <div class="info-sarazua">
                <img src="https://images.cdn3.buscalibre.com/fit-in/360x360/77/20/77206eefbb16d1de675dd0b682e5bf16.jpg" alt="">
            </div>
    `;
    
});

let informacion_19_6 = document.querySelector(".boton3-sarazua");

informacion_19_6.addEventListener("click",()=>{
    let bloque_6 = document.querySelector(".info-p-sarazua");

    bloque_6.classList.add("activar")
    bloque_6.innerHTML= `
            <div class="info-p-sarazua">              
                <h1><span>Descubrimiento de los fullerenos</span></h1>
                <br>
                <p>En 1985, un equipo de científicos compuesto por Harold Kroto, Robert Curl y Richard Smalley descubrió una nueva forma molecular de carbono conocida como fullereno. Este descubrimiento se realizó en la Universidad de Rice, en Houston, Texas, y marcó un avance significativo en la química y la ciencia de los materiales. Los fullerenos, a menudo referidos como "buckyballs", son moléculas esféricas compuestas por 60 átomos de carbono (C60) dispuestos en una estructura similar a un balón de fútbol. La estructura del fullereno está formada por hexágonos y pentágonos, que le otorgan una estabilidad y simetría notable.</p>
                <p>El descubrimiento de los fullerenos amplió significativamente el conocimiento sobre las posibles formas de carbono, que hasta entonces se conocían principalmente en sus formas de grafito y diamante. </p>
                <br>
                <h2>- Descubridores: Harold Kroto, Robert Curl y Richard Smalley</h2>
                <h2>- Año del Descubrimiento: 1985</h2>
                <h2>- Moleculas esféricas de 60 átomos de carbono (C60).</h2>
                <h2>- Potenciales aplicaciones en medicina, electrónica y materiales.</h2>
            </div>
    `;
    
});

let informacion_19_7 = document.querySelector(".boton4-sarazua");

informacion_19_7.addEventListener("click",()=>{
    let bloque_7 = document.querySelector(".info-sarazua");

    bloque_7.classList.add("activar")
    bloque_7.innerHTML= `
            <div class="info2-sarazua">
                <img src="https://www.ikerbasque.net/sites/default/files/carbon_nanotube.jpg" alt="">
            </div>
    `;
    
});

let informacion_19_8 = document.querySelector(".boton4-sarazua");

informacion_19_8.addEventListener("click",()=>{
    let bloque_8= document.querySelector(".info-p-sarazua");

    bloque_8.classList.add("activar")
    bloque_8.innerHTML= `
            <div class="info-p2-sarazua">              
                <h1><span>Descubrimiento de los nanotubos de carbono.</span></h1>
                <br>
                <p>En 1991, el científico japonés Sumio Iijima descubrió los nanotubos de carbono mientras trabajaba en NEC Corporation en Tsukuba, Japón. Este descubrimiento representó un avance significativo en el campo de la nanotecnología y la ciencia de materiales. Los nanotubos de carbono son estructuras cilíndricas formadas por átomos de carbono dispuestos en una red hexagonal, similar a una hoja de grafeno enrollada en un cilindro. Pueden ser de una sola capa (nanotubos de pared simple) o de múltiples capas (nanotubos de pared múltiple). Presentan propiedades extraordinarias, destacando tanto en resistencia mecánica como en conductividad eléctrica y térmica.</p>
                <p>Los nanotubos de carbono son uno de los materiales más fuertes conocidos, con una resistencia a la tracción mucho mayor que la del acero.</p>
                <br>
                <h2>- Conductividad Térmica: Excelente, útil para la disipación de calor</h2>
                <h2>- Formados por átomos de carbono en una red hexagonal.</h2>
                <h2>- Pueden ser de pared simple (una capa) o de pared múltiple (varias capas).</h2>
                <h2>- Conductividad Eléctrica: Varía de metálica a semiconductora según la quiralidad.</h2>
            </div>
    `;
    
});

let informacion_19_9 = document.querySelector(".boton5-sarazua");

informacion_19_9.addEventListener("click",()=>{
    let bloque_9 = document.querySelector(".info-sarazua");

    bloque_9.classList.add("activar")
    bloque_9.innerHTML= `
            <div class="info2-sarazua">
                <img src="https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/en-exclusiva/embargos/un-nuevo-material-imita-las-propiedades-exoticas-del-grafeno/2073149-3-esl-MX/Un-nuevo-material-imita-las-propiedades-exoticas-del-grafeno.jpg" alt="">
            </div>
    `;
    
});

let informacion10 = document.querySelector(".boton5-sarazua");

informacion10.addEventListener("click",()=>{
    let bloque10= document.querySelector(".info-p-sarazua");

    bloque10.classList.add("activar")
    bloque10.innerHTML= `
            <div class="info-p2-sarazua">              
                <h1><span>Descubrimiento de los nanotubos de carbono.</span></h1>
                <br>
                <p>En 2004, Andre Geim y Konstantin Novoselov, dos físicos de la Universidad de Manchester, lograron aislar el grafeno, un material compuesto por una sola capa de átomos de carbono dispuestos en una red hexagonal. Este descubrimiento fue revolucionario debido a las extraordinarias propiedades físicas y químicas del grafeno, que lo convierten en un material prometedor para una amplia variedad de aplicaciones tecnológicas y científicas.</p>
                <p>El grafeno es el primer material bidimensional conocido y exhibe propiedades sobresalientes. Tiene una conductividad eléctrica extremadamente alta, lo que lo hace ideal para su uso en componentes electrónicos, como transistores, que pueden ser mucho más rápidos y eficientes que los basados en silicio.</p>
                <br>
                <h2>- Conductividad Eléctrica: Extremadamente alta</h2>
                <h2>- Resistencia Mecánica: 200 veces más fuerte que el acero</h2>
                <h2>- Ligereza: Extremadamente delgado y liviano.</h2>
                <h2>- Exfoliación mecánica con cinta adhesiva ("técnica de la cinta Scotch")</h2>
            </div>
    `;
    
});

let informacion12 = document.querySelector(".btn-reg-sarazua");

informacion12.addEventListener("click",()=>{
    let bloque12= document.querySelector(".seccion-sarazua");

    bloque12.classList.add("activar")
    bloque12.innerHTML= `
    <section class="seccion-sarazua">
        <div class="titulo-sarazua">
            <div class="titulo1-sarazua">
                <h1>Nano<span>tecnologia</span></h1>
            </div>
        </div>
        <div class="contenido-sarazua">
            <div class="info-sarazua">
                <img src="https://ignaciogavilan.com/wp-content/uploads/2021/12/la_nanotecnologia-grande400.jpg" alt="">
            </div>
            <div class="info-p-sarazua">              
                <h1>Nano<span>tecnologia</span></h1>
                <br>
                <p>La nanotecnología es una rama de la ciencia y la ingeniería que se dedica al diseño y producción de estructuras y dispositivos a una escala extremadamente pequeña, entre 1 y 100 nanómetros, una milmillonésima parte de un metro. A esta escala, los materiales presentan propiedades físicas, químicas y biológicas únicas.</p>
                <p>Las aplicaciones de la nanotecnología son diversas y abarcan la medicina, donde se usa para la entrega dirigida de fármacos y diagnósticos avanzados; la electrónica, con el desarrollo de dispositivos más pequeños y eficientes; la energía, mejorando la eficiencia de paneles solares y baterías; y los materiales, produciendo composiciones más fuertes y ligeras.</p>
                <p>En el futuro, la nanotecnología tiene el potencial de revolucionar diversas industrias y mejorar significativamente la calidad de vida, con continuas investigaciones que buscan nuevas aplicaciones y soluciones a problemas globales.</p>
            </div>
        </div>
    </section>

`;
    
});

