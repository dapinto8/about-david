import { fadeIn, fadeOut, slideIn, blockReveal, scaleIn, squareReveal } from './anime';

export const TOP = 'TOP';
export const MIDDLE = 'MIDDLE';
export const BOTTOM = 'BOTTOM';

const SQUARE_REVEAL = 'squareReveal';
const FADE_IN = 'fadeIn';
const FADE_OUT = 'fadeOut';
const SLIDE_IN = 'slideIn';
const BLOCK_REVEAL = 'blockReveal';
const SCALE_IN = 'scaleIn';

const animate = ({ target, anim, direction, duration, delay, easeing }) => {
  switch (anim) {
    case SQUARE_REVEAL:
      squareReveal([target], { direction, duration, delay, easeing });
      break;
    case FADE_IN:
      fadeIn(target, { direction, duration, delay, easeing });
      break;
    case FADE_OUT:
      fadeOut(target, { direction, duration, delay, easeing });
      break;
    case SLIDE_IN:
      slideIn(target, { direction, duration, delay, easeing });
      break;
    case BLOCK_REVEAL:
      blockReveal(target, { direction, duration, delay, easeing });
      break;
    case SCALE_IN:
      scaleIn(target, { direction, duration, delay, easeing });
      break;
    default:
      break;
  }
};


export const scrollMonitor = (target, anim, scrollTrigger = MIDDLE, offset = 0) => {

  let animated = false;

  const trackScrolling = () => {
    if (target) {
      const { clientHeight, offsetTop } = target;
      const half = clientHeight / 2;
      const top = offsetTop;
      const botttom = top - window.innerHeight + clientHeight;

      let scrollPosition;
      switch (scrollTrigger) {
        case TOP:
          scrollPosition = top;
          break;
        case MIDDLE:
          scrollPosition = botttom - half;
          break;
        case BOTTOM:
          scrollPosition = botttom;
          break;
        default:
          break;
      }

      console.log(window.scrollY, scrollPosition + offset);

      if (window.scrollY >= scrollPosition + offset) {
        if (!animated) {
          animated = true;
          animate({ ...anim, target });
          window.removeEventListener('scroll', trackScrolling);
        }
      }
    }
  };

  trackScrolling();
  window.addEventListener('scroll', trackScrolling);

};