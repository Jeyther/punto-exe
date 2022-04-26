$(() => {

    let productos;

    const URLJSON = "productos.json";

    $.getJSON(URLJSON, function (respuesta, estado) {

        if (estado === 'success') {

            productos = respuesta;

        } else {

            console.log("hubo un error al cargar los datos del JSON.... Intente de nuevo");

        }

        //CREACION DE ELEMENTOS EN EL DOM
        cargarProductosNamaste();
        cargarProductosVamp();


    });

    const cargarProductosNamaste = () => {

        productos.map(producto => {

            if (producto.marca === "namaste") {

                $(".carrusel--namaste").append(

                    `<div class="wrapper">
                        <div class="seccion-2__namaste__carrusel__elemento">

                            <img src="${producto.img}" alt="${producto.nombre}" class="seccion-2__namaste__carrusel__elemento__img">

                            <div class="seccion-2__namaste__carrusel__elemento__texto">
                                <p class="seccion-2__namaste__carrusel__elemento__texto__titulo">${producto.nombre}</p>
                                <p class="seccion-2__namaste__carrusel__elemento__texto__descripcion">${producto.descripcion}</p>
                            </div>

                            <a class="seccion-2__namaste__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>`

                )

            }

        });

        animarCarrusel(".carrusel--namaste");

    }

    const cargarProductosVamp = () => {


        productos.map(producto => {

            if (producto.marca === "vamp") {

                $(".carrusel--vamp").append(

                    `<div class="wrapper">
                        <div class="seccion-2__namaste__carrusel__elemento">

                            <img src="${producto.img}" alt="${producto.nombre}" class="seccion-2__namaste__carrusel__elemento__img">

                            <div class="seccion-2__namaste__carrusel__elemento__texto">
                                <p class="seccion-2__namaste__carrusel__elemento__texto__titulo">${producto.nombre}</p>
                                <p class="seccion-2__namaste__carrusel__elemento__texto__descripcion">${producto.descripcion}</p>
                            </div>

                            <a class="seccion-2__namaste__carrusel__elemento__boton">Detalles</a>

                        </div>
                    </div>`

                )

            }

        });

        animarCarrusel(".carrusel--vamp");

    }

    const animarCarrusel = (tienda) => {

        $(tienda).slick({
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

    }

})
