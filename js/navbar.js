$(document).ready(function() {
    $(window).on("load scroll", function() {
        var scrollPosition = $(window).scrollTop(),
            scrollToBottom = scrollPosition + $(window).height(),
            overallContentHeight = $(document).height(),
            aboutPosition = $('#about-me').offset().top,
            projectsPosition = $('#projects').offset().top,
            contactMePosition = $(window).scrollTop() + $(window).height();

        if (scrollPosition >= aboutPosition && scrollPosition < projectsPosition) {
          addRemoveClass('#about-me-nav', '#intro-nav', '#projects-nav');
        } else if (scrollPosition >= projectsPosition && scrollToBottom < overallContentHeight) {
            addRemoveClass('#projects-nav', '#about-me-nav', '#contact-me-nav');
        } else if (scrollToBottom === overallContentHeight) {
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
