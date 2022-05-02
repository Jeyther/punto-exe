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
                        <a href="${producto.link}" target="_blank" class="seccion-2__namaste__carrusel__elemento">

                            <img src="${producto.img}" alt="${producto.nombre}" class="seccion-2__namaste__carrusel__elemento__img">

                            <div class="seccion-2__namaste__carrusel__elemento__texto">
                                <p class="seccion-2__namaste__carrusel__elemento__texto__titulo">${producto.nombre}</p>
                                <p class="seccion-2__namaste__carrusel__elemento__texto__descripcion">${producto.descripcion}</p>
                            </div>

                            <div class="seccion-2__namaste__carrusel__elemento__boton">Detalles</div>

                        </a>
                    </div>`

                )

            }

        });

        cargarCarrusel(".carrusel--namaste");

    }

    const cargarProductosVamp = () => {


        productos.map(producto => {

            if (producto.marca === "vamp") {

                $(".carrusel--vamp").append(

                    `<div class="wrapper">
                        <a href="${producto.link}" target="_blank" class="seccion-2__namaste__carrusel__elemento" class="seccion-2__namaste__carrusel__elemento">

                            <img src="${producto.img}" alt="${producto.nombre}" class="seccion-2__namaste__carrusel__elemento__img">

                            <div class="seccion-2__namaste__carrusel__elemento__texto">
                                <p class="seccion-2__namaste__carrusel__elemento__texto__titulo">${producto.nombre}</p>
                                <p class="seccion-2__namaste__carrusel__elemento__texto__descripcion">${producto.descripcion}</p>
                            </div>

                            <div class="seccion-2__namaste__carrusel__elemento__boton">Detalles</div>

                        </a>
                    </div>`

                )

            }

        });

        cargarCarrusel(".carrusel--vamp");

    }

    const cargarCarrusel = (tienda) => {

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
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 700,
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

});
/*     $("#submit").click((e) => {

        e.preventDefault();

        const nombre = $("#nombre").val();
        const email = $("#correo").val();
        const telefono = $("#telefono").val();
        const mensaje = $("#mensaje").val();

        if (nombre === "" || email === "" || telefono === "" || mensaje === "") {

            alert("Todos los campos son obligatorios");

        } else {

            fetch("https://formsubmit.co/ajax/jeyther13@gmail.com", {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                },
                body: {
                    name: "FormSubmit",
                    message: "I'm from Devro LABS"
                }
            }).then(response => response.ok ? response.json() : Promise.reject(response))
                .then(json => console.log(json))
                .catch(error => console.log(error + "HOLA"));

            $.ajax({

                url: "https://formsubmit.co/ajax/jeyther13@gmail.com",
                method: "POST",
                mode: "cors",
                dataType: "json",
                accepts: 'application/json',
                data: {
                    name: "FormSubmit",
                    message: "I'm from Devro LABS"
                },
                success: (data) => console.log(data),
                error: (err) => console.log(err)
            });

            $.ajax({
                url: "https://formsubmit.co/ajax/8eff7da85ad7715a1fa6ad9b7ca737b4",
                method: "POST",
                data: {
                    name: "FormSubmit",
                    message: "I'm from Devro LABS"
                },
                dataType: "json"
            });

        }
    });
 */
