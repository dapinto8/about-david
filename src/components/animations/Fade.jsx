import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es';
import { LEFT } from '../../contants/directions';
import { EASE_IN_OUT_EXPO } from '../../contants/easings';

const DURATION = 1000;
const DELAY = 0;

const FadeOutInAnimation = ({
  state,
  origin = LEFT,
  duration = DURATION,
  delay = DELAY,
  easing = EASE_IN_OUT_EXPO,
  before = () => {},
  after = () => {},
  className = '',
  children
}) => {
  const ref = useRef(null);
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    const tl = anime.timeline({
      targets: [ref.current],
      delay,
      duration,
      easing,
      autoplay: false
    });
    tl.add({
      opacity: [1, 0],
      translateX: [0, 200]
    }).add({
      opacity: [0, 1],
      translateX: [-200, 1]
    });

    tl.pause();

    setTimeline(tl);
  }, []);

  useEffect(() => {
    if (timeline) {
      timeline.restart();
    }
  }, [state]);

  return <span ref={ref} className={className}>{children}</span>;
};

export default FadeOutInAnimation;
