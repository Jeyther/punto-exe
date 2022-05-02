$(() => {
    
    /*
    ================================
    Carrusel de productos
    ================================ 
    */
    let tiendas = [".carrusel--namaste", ".carrusel--vamp"];

    tiendas.map((tienda) => {

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

    });

    /*
    ================================
    Anmiaciones de scroll
    ================================ 
    */
    AOS.init({duration: 1000,once: true});

});

