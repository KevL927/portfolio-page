$(() => {

  $('.nav-link').click(event => {
    let clickedTarget = event.target.alt || event.target.title;
    $('html,body').animate(
      {
        scrollTop: $(findNextSection(clickedTarget)).offset().top
      },
        1000
     );
  });

});
