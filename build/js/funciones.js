$(".carrusel-home").slick({dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:2e3}),setTimeout(function(){var e=document.getElementById("hs-form-iframe-0").contentWindow.document.getElementsByClassName("hs-button")[0];e.style.background="red"},1500),$(".menu").click(function(){$(".navbar").toggleClass("open-navbar"),$("body").toggleClass("no-scroll")});

(function() {
  if($('main').hasClass('nosotros-main') && $(window).width()<768) {
    $('.box-directivo').addClass('carrusel-directivo');
    // $('.box-directivo').removeClass('box-directivo')
    $(".carrusel-directivo").slick({infinite:!0});
  }
})()