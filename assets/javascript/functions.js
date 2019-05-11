const revealElement = (selector, delay = 0) => {
  const elements = [...document.querySelectorAll(selector)];
  const children = [...document.querySelectorAll(selector + ' *')];

  if (!elements || elements.length === 0) return null;

  const reveal = (elem, delay) => {
    setTimeout(() => {
      elem.style.visibility = 'visible';
      elem.style.opacity = '1';
    }, delay);
  };

  /** First, hide the elements */

  elements.forEach(elem => {
    elem.style.transition = '1s ease all';
    elem.style.visibility = 'hidden';
    elem.style.opacity = '0';
  });

  children.forEach(elem => {
    elem.style.transition = '1s ease all';
    elem.style.visibility = 'hidden';
    elem.style.opacity = '0';
  });

  /** Now Reveal Them */

  elements.forEach(elem => {
    reveal(elem, delay);
  });

  children.forEach(elem => {
    elem.style.visibility = 'visible';
    elem.style.opacity = '1';
  });
};
