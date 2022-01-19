$(document).ready(function(){
    $('.gallery__slider').slick({
        // стрілки
        arrows:false,  
        // крапки
        dots:false,
        // адаптивна висота
        adaptiveHeight:true,
        // кількість слайдів для показу
        slidesToShow:1,
        // кількість слайдів прокручування
        slidesToScroll:1,
        // швидкість зміни слайдів
        speed:1000,
        // крива руху слайда
        easing:'ease',
        // безкінечне прокручування
        infinite:true,
        // автоматична зміна слайдів
        autoplay:true,
        // швидкість автоматичної зміни слайдів
        autoplaySpeed:5000,
        // зупинити автоматичну зміну слайдів при ховері
        pauseOnHover:false,
        // зупинити автоматичну зміну слайдів при фокусі
        pauseOnFocus:false,
        // зупинити автоматичну зміну слайдів при фокусі на крапку
        pauseOnDotsHover:false,
        // прокручування мишкою
        draggable:true,
        // прокручування свайпом (тачскрін)
        swipe:true,
        // зоначутливості прокручування мишкою/свайпом
        touchThreshhold:5,

        touchMove:true,
        // прискорене прокрування
        waitForAnimate:false,
        // центрувати активний слайд
        centerMode:true,
        variableWidth:false,
        fade:true,
     });
  });