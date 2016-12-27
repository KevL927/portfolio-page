let findNextSection = clickedTarget => {
  if(clickedTarget === 'To Main') {
    return '#intro';
  }
  if(clickedTarget === 'To About Me') {
    return '#about-me';
  } else if(clickedTarget === 'To Projects') {
      return '#projects';
  } else {
      return '#contact-me';
  }
}
