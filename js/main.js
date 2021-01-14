
$(document).ready(function() {


//cliccando sul pulsante next(freccia destra del carousel) scorre le immagini
//Quando arriverà all'ultima immagine ricomincerà dalla prima
//Stessa evento accadrà nei point sotto il carousel
  $('.next > i').click(function() {


      if ($('img.active, i.active').hasClass('last')) {

         $('img.active, i.active').removeClass('active');
         $('img.first , i.first').addClass('active')

      }else {
        $('img.active, i.active').removeClass('active').next().addClass('active')
      }


  });

  //cliccando sul pulsante prev(freccia sinistra del carousel) scorre le immagini
  //Quando arriverà alla prima immagine ricomincerà dall'ultima
  //Stessa evento accadrà nei point sotto il carousel

  $('.prev > i').click(function() {


      if ($('img.active, i.active').hasClass('first')) {

         $('img.active, i.active').removeClass('active');
         $('img.last, i.last').addClass('active')

      }else {
        $('img.active, i.active').removeClass('active').prev().addClass('active')
      }


  });










//FINE DOCUMENT.READY
});
