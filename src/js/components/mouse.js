import _vars from '../_vars.js'

function moveMouse(e) {
  if (e.clientX < 5 || e.clientY < 5 || e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)) {
    _vars.mouse.style.opacity = 0;
  } else {
    _vars.mouse.style.opacity = 1;
    _vars.mouse.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
  }
};

if (window.innerWidth >= 768) {
  document.addEventListener('mousemove', moveMouse);

  _vars.links.forEach(link => link.addEventListener('mouseover', () => { _vars.mouse.classList.add('links-visible') }));
  _vars.links.forEach(link => link.addEventListener('mouseleave', () => { _vars.mouse.classList.remove('links-visible') }));

  _vars.btnHover.forEach(link => link.addEventListener('mouseover', () => { _vars.mouse.classList.add('links-visible') }));
  _vars.btnHover.forEach(link => link.addEventListener('mouseleave', () => { _vars.mouse.classList.remove('links-visible') }));

  _vars.imageHoverMouse.forEach(link => link.addEventListener('mouseover', () => { _vars.mouse.classList.add('view-visible') }));
  _vars.imageHoverMouse.forEach(link => link.addEventListener('mouseleave', () => { _vars.mouse.classList.remove('view-visible') }));

} else {
  _vars.mouse.style.opacity = 0;
}
