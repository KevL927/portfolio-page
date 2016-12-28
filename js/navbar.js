$(() => {
    $(window).scroll(() => {
        let scrollPosition = $(window).scrollTop(),
            aboutPosition = $('#about-me').offset().top,
            projectsPosition = $('#projects').offset().top,
            contactMePosition = 6122;

        if (scrollPosition >= aboutPosition && scrollPosition < projectsPosition) {
          addRemoveClass('#about-me-nav', '#intro-nav', '#projects-nav');
        } else if (scrollPosition >= projectsPosition && scrollPosition < contactMePosition) {
            addRemoveClass('#projects-nav', '#about-me-nav', '#contact-me-nav');
        } else if (scrollPosition >= contactMePosition) {
            addRemoveClass('#contact-me-nav', '#projects-nav');
        } else {
            addRemoveClass('#intro-nav', '#about-me-nav');
        }
    });
});

function addRemoveClass (addClassToId, removeClassFromId1, removeClassFromId2) {
  if (removeClassFromId2) {
    $(removeClassFromId1).removeClass('currentSectionColor');
    $(removeClassFromId2).removeClass('currentSectionColor');
    $(addClassToId).addClass('currentSectionColor');
  } else {
    $(removeClassFromId1).removeClass('currentSectionColor');
    $(addClassToId).addClass('currentSectionColor');
  }
}
