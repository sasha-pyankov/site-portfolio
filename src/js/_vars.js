export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  objectSliderEl: document?.querySelector('.project__swiper'),
  objectMainSliderEl: document?.querySelector('.site-container'),//удалить
  mouse: document?.querySelector('.mouse'),
  imageHoverMouse: document?.querySelectorAll('.image'),
  btnHover: document?.querySelectorAll('.btn-reset'),
  links: document?.querySelectorAll('a'),
}
