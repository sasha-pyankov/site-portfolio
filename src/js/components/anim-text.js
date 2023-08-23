if (document.querySelector('.about__stack--text-animated')) {

  const texts = ['HTML5', 'CSS', 'SCSS', 'JS', 'BOOTSTRAP5', 'Figma', 'GreenSock', 'SVG-animated','Swiper', 'Gulp', 'GIT',];
  const textContainer = document.querySelector('.about__stack--text-animated');

  let textIndex = 0;
  let charIndex = 0;

  const typeTextSpeed = 100;
  const pause = 1500;
  const deletingTextSpeed = 50;

  function typeText() {
    const text = texts[textIndex];

    textContainer.textContent = text.slice(0, charIndex++);

    if (charIndex <= text.length) {
      setTimeout(typeText, typeTextSpeed)
    } else {
      setTimeout(eraseText, pause)
    }
  }

  function eraseText() {
    const text = texts[textIndex];
    textContainer.textContent = text.slice(0, charIndex--);

    if (charIndex >= 0) {
      setTimeout(eraseText, deletingTextSpeed)
    } else {
      textIndex = (textIndex + 1) % texts.length
      charIndex = 0;
      setTimeout(typeText, pause)
    }
  }

  typeText();
}
