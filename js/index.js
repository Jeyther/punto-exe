$(() => {

    let productos;

    const URLJSON = "productos.json";

    $.getJSON(URLJSON, function (respuesta, estado) {

        if (estado === 'success') {

            articulos = respuesta;

        } else {

            console.log("hubo un error al cargar los datos del JSON.... Intente de nuevo");

        }

        //CREACION DE ELEMENTOS EN EL DOM
        cargarProductos();

    });

    const cargarProductos = () => {

        $('.seccion-2').append(

            `<!-- Titulo seccion 2 -->
        <div class="seccion-2__titulo">

            <hr class="seccion-2__titulo__guion">
            <h2 class="seccion-2__titulo__texto">Tiendas</h2>
            <hr class="seccion-2__titulo__guion">

        </div>

        <!-- Namaste -->
        <div class="seccion-2__namaste">

            <img src="img/NAMASTE/logo_blanco.png" alt="namaste" class="seccion-2__namaste__img">

            <p class="seccion-2__namaste__subtitulo">Fertilizantes 100% Naturales y Orgánicos.</p>

            <div class="seccion-2__namaste__carrusel">

                <div class="carrusel">

                    <div class="wrapper">

                        ${productos.map(producto => crearElemento(producto))}

                        <div class="seccion-2__namaste__carrusel__elemento">

                            <img src="img/NAMASTE/FERTILIZANTES/fertilizante_oro_negro.png" alt="fertilizante_oro_negro"
                                class="seccion-2__namaste__carrusel__elemento__img">

                            <div class="seccion-2__namaste__carrusel__elemento__texto">
                                <p class="seccion-2__namaste__carrusel__elemento__texto__titulo">Fertilizante Oro Negro
                                    7,5-2-10</p>

                                <p class="seccion-2__namaste__carrusel__elemento__texto__descripcion">Potenciador de
                                    crecimiento
                                    natural
                                    para completar el crecimiento en vegetativo y las primeras etapas de floración.</p>
                            </div>

                            <a class="seccion-2__namaste__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="seccion-2__namaste__carrusel__elemento">

                            <img src="img/NAMASTE/FERTILIZANTES/fertilizante_trico_mas.png" alt="fertilizante_trico_mas"
                                class="seccion-2__namaste__carrusel__elemento__img">

                            <div class="seccion-2__namaste__carrusel__elemento__texto">
                                <p class="seccion-2__namaste__carrusel__elemento__texto__titulo">Fertilizante Trico +
                                </p>

                                <p class="seccion-2__namaste__carrusel__elemento__texto__descripcion">Potenciador de
                                    crecimiento
                                    natural
                                    para aplicar en período de floración. Fertilizante que actúa como aditivo natural a
                                    base
                                    de
                                    melazas deshidratadas.</p>
                            </div>

                            <a class="seccion-2__namaste__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="seccion-2__namaste__carrusel__elemento">

                            <img src="img/NAMASTE/FERTILIZANTES/fertilizante_amazonia.png" alt="fertilizante_amazonia"
                                class="seccion-2__namaste__carrusel__elemento__img">

                            <div class="seccion-2__namaste__carrusel__elemento__texto">
                                <p class="seccion-2__namaste__carrusel__elemento__texto__titulo">Fertilizante Orgánico
                                    Amazonia</p>

                                <p class="seccion-2__namaste__carrusel__elemento__texto__descripcion">Fórmula
                                    Bio-estimulante
                                    con
                                    MICORRIZA.</p>
                            </div>
                            <a class="seccion-2__namaste__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="seccion-2__namaste__carrusel__elemento">

                            <img src="img/NAMASTE/FERTILIZANTES/fertilizante_flora_booster.png"
                                alt="fertilizante_flora_booster" class="seccion-2__namaste__carrusel__elemento__img">

                            <div class="seccion-2__namaste__carrusel__elemento__texto">
                                <p class="seccion-2__namaste__carrusel__elemento__texto__titulo">Fertilizante Flora
                                    Booster
                                </p>

                                <p class="seccion-2__namaste__carrusel__elemento__texto__descripcion">Potenciador de
                                    producción.
                                    Aplicar
                                    durante el período de floración completo hasta dos semanas antes de la cosecha. </p>
                            </div>

                            <a class="seccion-2__namaste__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>

                </div>

            </div>

            <a class="seccion-2__namaste__boton">
                <span>Visitar Web</span>
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="white" stroke-width="3"></circle>
                    <path
                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                        fill="white"></path>
                </svg>
            </a>

        </div>
        <!-- Fin Namaste -->

        <!-- Vamp -->
        <div class="seccion-2__vamp">

            <img src="img/VAMP/logo.png" alt="vamp" class="seccion-2__vamp__img">

            <p class="seccion-2__vamp__subtitulo">Empresa dedicada a la elaboración de bio insumos para tus cultivos.
            </p>

            <div class="seccion-2__vamp__carrusel">

                <div class="carrusel">

                    <div class="wrapper">
                        <div class="seccion-2__vamp__carrusel__elemento">

                            <img src="img/VAMP/GUANO/bokashi_vegetativo.png" alt="bokashi_vegetativo"
                                class="seccion-2__vamp__carrusel__elemento__img">

                            <div class="seccion-2__vamp__carrusel__elemento__texto">
                                <p class="seccion-2__vamp__carrusel__elemento__texto__titulo">Guano de murciélago
                                    Bokashi Vegetativo</p>

                                <p class="seccion-2__vamp__carrusel__elemento__texto__descripcion">Potenciador de
                                    crecimiento
                                    natural
                                    para completar el crecimiento en vegetativo y las primeras etapas de floración.</p>
                            </div>

                            <a class="seccion-2__vamp__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="seccion-2__vamp__carrusel__elemento">

                            <img src="img/VAMP/GUANO/bokashi_flora.png" alt="bokashi_flora"
                                class="seccion-2__vamp__carrusel__elemento__img">

                            <div class="seccion-2__vamp__carrusel__elemento__texto">
                                <p class="seccion-2__vamp__carrusel__elemento__texto__titulo">Guano de murciélago
                                    Bokashi Flora</p>

                                <p class="seccion-2__vamp__carrusel__elemento__texto__descripcion">La floración es un
                                    momento de cambios fisiológicos de la planta, donde enfocará toda su
                                    energía en la producción de flores y frutos.</p>
                            </div>
                            <a class="seccion-2__vamp__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="seccion-2__vamp__carrusel__elemento">

                            <img src="img/VAMP/GALLINA/bokashi_flora.png" alt="gallina_bokashi_flora"
                                class="seccion-2__vamp__carrusel__elemento__img">

                            <div class="seccion-2__vamp__carrusel__elemento__texto">
                                <p class="seccion-2__vamp__carrusel__elemento__texto__titulo">Bokashi Gallina
                                    + Murcielago Vegetativo
                                </p>

                                <p class="seccion-2__vamp__carrusel__elemento__texto__descripcion">Esta nueva fórmula
                                    mantiene los beneficios de nuestro bokashi cuidando la economía de
                                    quienes nos eligen día a día.</p>
                            </div>

                            <a class="seccion-2__vamp__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="seccion-2__vamp__carrusel__elemento">

                            <img src="img/VAMP/GALLINA/bokashi_vegetativo.png" alt="gallina_bokashi_vegetativo"
                                class="seccion-2__vamp__carrusel__elemento__img">

                            <div class="seccion-2__vamp__carrusel__elemento__texto">
                                <p class="seccion-2__vamp__carrusel__elemento__texto__titulo">Bokashi Gallina
                                    + Murcielago Flora
                                </p>

                                <p class="seccion-2__vamp__carrusel__elemento__texto__descripcion">abono con efecto a
                                    corto y largo plazo, el cual
                                    posee nutrientes disponibles y microorganismos que liberan más nutrientes hacia la
                                    planta
                                    según sus necesidades.</p>
                            </div>

                            <a class="seccion-2__vamp__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>

                </div>

            </div>

            <a class="seccion-2__vamp__boton">
                <span>Visitar Web</span>
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="white" stroke-width="3"></circle>
                    <path
                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                        fill="white"></path>
                </svg>
            </a>

        </div>
        <!-- Fin Vamp -->`
        );

    }

    const crearElemento = (producto) => {

        return (
            `<div class="wrapper">
                <div class="seccion-2__vamp__elemento">
                    <div class="seccion-2__vamp__elemento__img">
                        <img src="${producto.img}" alt="${producto.nombre}">
                    </div>
                    <div class="seccion-2__vamp__elemento__texto">
                        <p class="seccion-2__vamp__elemento__texto__titulo">${producto.nombre}</p>
                        <p class="seccion-2__vamp__elemento__texto__descripcion">${producto.descripcion}</p>
                    </div>
                    <a class="seccion-2__vamp__elemento__boton">Detalles</a>
                </div>
            </div>`
        );


    }

    $('.carrusel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

})
