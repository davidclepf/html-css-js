// instrução jquery que inicializa o script apenas quando o documento estiver pronto
$(document).ready(function(){

    // Progress bar
    let containerA = document.getElementById("circleA");
    // criando um objeto usando a biblioteca progressbar
    let circleA = new ProgressBar.Circle(containerA, {
        //definindo propriedades para o objeto
        color: '#64DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 1400, // duração da animação
        from: { color: '#AAA' }, // cor inicial
        to: { color: '#65DAF9' }, // cor final

        // função que fará o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            //valor do circulo
            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");
    // criando um objeto usando a biblioteca progressbar
    let circleB = new ProgressBar.Circle(containerB, {
        //definindo propriedades para o objeto
        color: '#64DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 1600, // duração da animação
        from: { color: '#AAA' }, // cor inicial
        to: { color: '#65DAF9' }, // cor final

        // função que fará o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            //valor do circulo
            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });  

    let containerC = document.getElementById("circleC");
    // criando um objeto usando a biblioteca progressbar
    let circleC = new ProgressBar.Circle(containerC, {
        //definindo propriedades para o objeto
        color: '#64DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 2000, // duração da animação
        from: { color: '#AAA' }, // cor inicial
        to: { color: '#65DAF9' }, // cor final

        // função que fará o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            //valor do circulo
            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });  

    let containerD = document.getElementById("circleD");
    // criando um objeto usando a biblioteca progressbar
    let circleD = new ProgressBar.Circle(containerD, {
        //definindo propriedades para o objeto
        color: '#64DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 2200, // duração da animação
        from: { color: '#AAA' }, // cor inicial
        to: { color: '#65DAF9' }, // cor final

        // função que fará o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            //valor do circulo
            let value = Math.round(circle.value() * 5243);

            circle.setText(value);
        }
    });  

    // iniciando o loader quando o usuário chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();

        // quando o usuário atingir o top da área -500px a animação começará
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
        
    });

    // Parallax
    setTimeout(function(){

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 250);
    
    // Filtro do portifólio

    $('.filter-btn').on('click', function(){

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'dsg-btn'){
            eachBoxes('dsg', boxes);
        }else if(type == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if(type == 'seo-btn') {
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all', boxes);
        }
    });

    function eachBoxes(type, boxes) {
        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    /* scroll para seções */
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portifolioSection = $('#portifolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {
        let btnId = $(this).attr('id');

        /* if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'portifolio-menu') {
            scrollTo = portifolioSection;
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        } */

        switch(btnId) {
            case 'about-menu':
                scrollTo = aboutSection;
                break;
            case 'services-menu':
                scrollTo = servicesSection;
                break;
            case 'team-menu':
                scrollTo = teamSection;
                break;
            case 'portifolio-menu':
                scrollTo = portifolioSection;
                break;
            case 'contact-menu':
                scrollTo = contactSection;
                break;
            default:
                scrollTo = bannerSection;
        }
               
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 60);

    });
});
