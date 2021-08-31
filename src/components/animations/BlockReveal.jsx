import React, { useState, useEffect, useRef } from 'react';
import { LEFT } from '../../contants/directions';
import { EASE_IN_OUT_EXPO } from '../../contants/easings';
import anime from 'animejs/lib/anime.es.js';

const DURATION = 1000;
const DELAY = 0;

const endOrigin = origin => {
  switch (origin) {
    case 'top':
      return 'bottom';
      break;
    case 'bottom':
      return 'top';
      break;
    case 'left':
      return 'right';
      break;
    case 'right':
      return 'left';
      break;
    default:
      return 'right';
      break;
  }
};

const BlockReveal = ({
  state,
  origin = LEFT,
  duration = DURATION,
  delay = DELAY,
  easing = EASE_IN_OUT_EXPO,
  before = () => {},
  after = () => {},
  children
}) => {
  const blockRef = useRef(null);
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    const tl = anime.timeline({
      targets: [blockRef.current],
      delay,
      duration,
      easing,
      autoplay: false
    });
    tl.add({
      scaleX: [0, 1],
      begin: anim => {
        before();
        blockRef.current.style.zIndex = 10;
        blockRef.current.style.transformOrigin = origin;
      }
    }).add({
      scaleX: [1, 0],
      begin: anim => {
        blockRef.current.style.transformOrigin = endOrigin();
      },
      complete: anim => {
        blockRef.current.style.zIndex = -1;
        after();
      }
    });
    tl.pause();

    setTimeline(tl);
  }, []);

  useEffect(() => {
    if (timeline) {
      timeline.restart();
    }
  }, [state]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={blockRef}
        className="w-full h-full bg-primary absolute top-0 lef-0 z-10 transform scale-0"
      ></div>
      {children}
    </div>
  );
};

export default BlockReveal;
