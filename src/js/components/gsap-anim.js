import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);// регестрация плагинов

const startAnimation = () => {
  if (document.querySelector('.site-container')) {
    gsap.to('.header__logo', {
      duration: 5,
      motionPath :{
        path: [{xPercent: 100, rotation: 200,}],
        alignOrigin: [.5, .5],
        start: 1,
        end: 0,
      },
      ease: 'bounce'
    })

    const tl = gsap.timeline();
    // const laptopScreen = window.matchMedia('(min-width: 767.98px)'); //работает от 767 и выше

    tl.fromTo(
      '.burger', {opacity: 0,}, {opacity: 1, duration: 1,}, 2//начало через 0.8 с8екунды
    ).fromTo(
      '.home__title', {y: -200, opacity: 0,}, {y: 0, opacity: 1, duration: 1,}, 0.8//начало через 0.8 с8екунды
    ).fromTo(
      '.home__text', {y: -300, opacity: 0,}, {y: 0, opacity: 1, duration: 1,}, 1//начало через 1 секунду
    ).fromTo(
      '.home__foto', {y: 300, opacity: 0,}, {y: 0, opacity: 1, duration: 1,}, 2//начало через 1 секунду
    ).fromTo(
      '.icon-down', {scale: 0, opacity: 0,}, {scale: 1, opacity: 1, duration: 1,}, 2//начало через 1 секунду
    ).fromTo(
      '.home__letter', {rotation: 0, xPercent: 0, xPercent: 0, opacity: 1}, {rotation: -150, yPercent: 70, xPercent: 10, ease: 'elastic', duration: 2}, 3//начало через 1 секунду
    ).to(
      '.home__letter', {y: 1000, duration: 1}, 5//начало через 1 секунду
    )
  }
}


if (document.querySelector('.work')) {
  const tl2 = gsap.timeline();
  tl2.fromTo(
    '.work__background-anim-1', {xPercent: -100}, {xPercent: 300, duration: 2}, 0.1
  ).fromTo(
    '.work__background-anim-2', {xPercent: -100}, {xPercent: 300, duration: 2}, 0.3
  ).fromTo(
    '.tabs__nav .tabs__nav-item', {y: -200, opacity: 0}, {y: 0, opacity: 1, stagger: 0.1,}, 0.7
  ).fromTo(
    '.job__title', {rotation: 0, opacity: 0}, {opacity: 1, rotation: 360, ease: 'elastic', duration: 2}, 1
  ).fromTo(
    '.gallery__image', {opacity: 0}, {opacity: 1, stagger: 0.1}, 2
  ).fromTo(
    '.job__tehnolog', {xPercent: -500}, {xPercent: 0, ease: 'elastic', duration: 1}, 2.3
  ).fromTo(
    '.job__descr', {opacity: 0}, {opacity: 1}, 2.8
  ).fromTo(
    '.job__git', {opacity: 0}, {opacity: 1}, 3.2
  ).fromTo(
    '.job__back', {opacity: 0}, {opacity: 1}, 3.5
  )
}

//прелоадер
window.onload = function () {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloader-animation');

  setTimeout(() => {
    preloader.classList.remove('preloader-animation');
    preloader.classList.add('preloader-hidden');
  }, 3000);

  setTimeout(() => {
    startAnimation();
    preloader.classList.add('preloader-none');
  }, 3200);
};
