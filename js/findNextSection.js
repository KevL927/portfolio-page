let findNextSection = alt => {
  if(alt === 'intro down arrow') {
    return '#about-me';
  } else if(alt === 'about me down arrow') {
      return '#projects';
  } else {
      return '#contact-me';
  }
}
