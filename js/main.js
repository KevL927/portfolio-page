$(document).ready(() => {

  $('.arrow').click(event => {
    $('html,body').animate(
      {
        scrollTop: $(findNextSection(event.target.alt)).offset().top
      },
        1000
     );
  });

});
