// подружить 100vh на главном экране с мобильной версией crome. В CSS написать - height: calc(var(--vh, 1vh) * 100);
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// актуальная дата в футере
if (document.querySelector('.contacts__bottom')) {
  let copyDate = document.querySelector('.contacts__bottom');
  let date = new Date().getFullYear();

  copyDate.innerHTML = `&copy; ${date} Sasha Pyankov`;
}

//увеличение картинок

if (document.querySelector('.work')) {
  let images = document.querySelectorAll('.gallery__image');

  for (let index = 0; index < images.length; index++) {

    images[index].addEventListener('click', function() {
      images[index].classList.toggle('show');
    });
  }
}
