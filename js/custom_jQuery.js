$(document).ready(function(){
  $("a[rel^='prettyPhoto']").prettyPhoto({
      theme: 'light_rounded' /* light_rounded / dark_rounded / light_square / dark_square / facebook */
  });
});

function checkWindowSize() {
  if ( $(window).height() < 620 ) {
    $('#sidebar').removeClass('fixed');
  } else {
    $('#sidebar').addClass('fixed');
  }
}
$(window).resize(checkWindowSize);
