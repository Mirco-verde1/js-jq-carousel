$(document).ready(function() {


  $('.next > i').click(function() {
    $('.images img.active').removeClass('active').next().addClass('active');
  })

  $('.prev > i').click(function() {
    $('.images img.active').removeClass('active').prev().addClass('active');
  })


  //
  //
  // $( ".next > i" ).click(function() {
  //   if ( $('.images:last-child') ) {
  //
  //     $('.images:first-child');
  //
  //   }
  // });



//FINE DOCUMENT.READY
})
