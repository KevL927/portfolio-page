$(document).ready(function() {

  $('.nav-link').click(function(event) {
    var clickedTarget = event.target.alt || event.target.title;
    $('html,body').animate(
      {
        scrollTop: $(findNextSection(clickedTarget)).offset().top
      },
        1000
     );
  });

});
