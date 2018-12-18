$(window).scroll(function() {
    if ($(this).scrollTop() > 15){  
        $('.header').css("background", "white"), 200;
    }
    else{
        $('.header').css("background", "none"), 200;
    }
});
jQuery(document).ready(function($) {
	$('.whywe-block').mouseenter(function() {
		$(this).children(".whywe-block__img").css('opacity', '1');
	});
	$('.whywe-block').mouseleave(function() {
		$(this).children(".whywe-block__img").css('opacity', '1');
	});
  var headerMenu = $('.menu-humburger');
  $('body').on('click', '.menu-humburger', function(){
    $(this).toggleClass('open');
    $('.header .header__menu').slideToggle();  
    if (headerMenu.hasClass('open')) {
        $('.header-logo svg path:last-child').css('fill', 'white');
    } else{
      $('.header-logo svg path:last-child').css('fill', '#E51010');
    }
  });



});

$('.slider').slick({
	dots: false,
	arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  	slide: ".slide",
  	prevArrow: ".slider .slider__prev",
  	nextArrow: ".slider .slider__next",
});

$(function() {
    $('.slider-sale').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
        mobileFirst: true,
        arrows: true,
        dots: true,
        slide: ".col-md",
        prevArrow: ".slider-sale .slider__prev",
        nextArrow: ".slider-sale .slider__next",
        responsive: [
            {
                breakpoint: 769,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.slider-sale').slick('resize');
    });
});

$(function() {
    $('.slider-why-we').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        slide: ".col-12",
        prevArrow: ".slider-sale-why-we .slider__prev",
        nextArrow: ".slider-sale-why-we .slider__next",
        responsive: [
            {
                breakpoint: 769,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.slider-sale').slick('resize');
    });
});
$('.rozrahunok-door-type').click( function(event){
  event.preventDefault();
  $('#overlay').fadeIn(400,
    function(){ 
      $('.rozrah-price-popup') 
        .css('display', 'block') 
        .animate({opacity: 1, top: '50%'}, 200);
      $('.doors-type-popup').css('display', 'none');
  });
});
$('.modal_close, #overlay').click( function(){
  $('.rozrah-price-popup').animate({opacity: 0, top: '45%'}, 200, 
      function(){ 
        $(this).css('display', 'none'); 
        $('#overlay').fadeOut(400);
      }
    );
});
$('.rozrahunok-door').click( function(event){
  event.preventDefault();
  $('#overlay').fadeIn(400,
    function(){ 
      $('.doors-type-popup') 
        .css('display', 'block') 
        .animate({opacity: 1, top: '50%'}, 200); 
  });
});
$('.modal_close, #overlay').click( function(){
  $('.doors-type-popup').animate({opacity: 0, top: '45%'}, 200, 
      function(){ 
        $(this).css('display', 'none'); 
        $('#overlay').fadeOut(400);
      }
    );
});


var heightHeader = $('.header').height();
$('.header-black').css('top', heightHeader);

$( ".write-us-btn" ).click(function() {
  $( ".write-list" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});


function checkParams() {
    var name = $('#name-proioma').val();
    var phone = $('#phone-proioma').val();
    var height = $('#height-proioma').val();
    var width = $('#width-proioma').val();

     
    if(name.length >=1 && width.length >=1 && phone.length >=10 && height.length >=1) {
        $('.rozrah-price-popup #submit').css('display', 'block');
    } else {
        $('.rozrah-price-popup #submit').css('display', 'none');
    }

}

$('select').styler();

$('#loadMoreGoods').click(function() {
    $('#goods').append('<div class="col-12 col-sm-6 col-lg-4"><div class="goods-card"> <div class="goods-card__img"><img src="img/goods/window-2.png" alt=""></div><div class="goods-card__body"><p class="goods-cards__title">Прямокутна дверка</p><span class="goods-cards__size">Розмір: 800х350 мм</span><div class="goods-card__reviews"><div class="stars"><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""></div><a href="#">4 відгука</a></div></div><div class="goods-cards__footer"><div class="goods-cards__price">5 999 грн. </div><a href="#" class="goods-cards__btn"><img src="img/shopping-cart-empty-side-view.svg" alt="shopping-cart"> вкорзину</a></div></div></div><div class="col-12 col-sm-6 col-lg-4"><div class="goods-card"> <div class="goods-card__img"><img src="img/goods/window-2.png" alt=""></div><div class="goods-card__body"><p class="goods-cards__title">Прямокутна дверка</p><span class="goods-cards__size">Розмір: 800х350 мм</span><div class="goods-card__reviews"><div class="stars"><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""></div><a href="#">4 відгука</a></div></div><div class="goods-cards__footer"><div class="goods-cards__price">5 999 грн. </div><a href="#" class="goods-cards__btn"><img src="img/shopping-cart-empty-side-view.svg" alt="shopping-cart"> вкорзину</a></div></div></div><div class="col-12 col-sm-6 col-lg-4"><div class="goods-card"> <div class="goods-card__img"><img src="img/goods/window-2.png" alt=""></div><div class="goods-card__body"><p class="goods-cards__title">Прямокутна дверка</p><span class="goods-cards__size">Розмір: 800х350 мм</span><div class="goods-card__reviews"><div class="stars"><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""><img src="img/icons/star-green.svg" alt=""></div><a href="#">4 відгука</a></div></div><div class="goods-cards__footer"><div class="goods-cards__price">5 999 грн. </div><a href="#" class="goods-cards__btn"><img src="img/shopping-cart-empty-side-view.svg" alt="shopping-cart"> вкорзину</a></div></div></div>');
});
