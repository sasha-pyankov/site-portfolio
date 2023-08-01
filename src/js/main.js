import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// подружить 100vh на главном экране с мобильной версией crome. В CSS написать - height: calc(var(--vh, 1vh) * 100);
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
