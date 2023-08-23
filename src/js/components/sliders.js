//подключаем например swiper, переменную подключаем отдельно
import _vars from '../_vars.js'
import Swiper, { Pagination, Navigation, Parallax, Autoplay, Keyboard, Mousewheel } from 'swiper'

Swiper.use([Pagination, Navigation, Parallax, Autoplay, Keyboard, Mousewheel ]);

new Swiper (_vars.objectSliderEl, {
  speed: 1000,
  slidesPerView: 1,
  parallax: true,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".showcaseSlider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.showcaseSlider-next',
    prevEl: '.showcaseSlider-prev',
  },
  a11y: {
    enabled: true,
  },

  watchOverflow: true,
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
});


// document.addEventListener('DOMContentLoaded', () => {
//   const height = window.innerHidth;
//   if (height > 700){

//   }
// })

let mainSlider = new Swiper (_vars.objectMainSliderEl, {
  wrapperClass: 'main',
  slideClass:'section',
  direction: 'vertical',
  slidesPerView: 'auto',
  parallax: true,
  keyboard: {
    enabled: true,
    onlyInviewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  speed: 800,
  watchOverflow: true,
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  a11y: {
    enabled: true,
  },

  //для корректного переходдна по ссылкам меню:
  init: false,
  on: {
    init: function (){
      menuSlider();
    },
  },
});

//для корректного переходдна по ссылкам меню:
let menuLinks = document.querySelectorAll('.nav__link');

function menuSlider() {
  if (menuLinks.length > 0) {
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', function (e) {
        mainSlider.slideTo(index, 800);
        e.preventDefault();
      });
    }
  }
}

mainSlider.init();