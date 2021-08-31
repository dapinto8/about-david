import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ArrowRight from '../images/arrow_right.svg';
import BlockReveal from './animations/BlockReveal';

const Works = ({ works }) => {
  const [workIndex, setWorkIndex] = useState(0);
  const [state, setState] = useState(false);
  const [work, setWork] = useState(works[0]);

  const nextWork = () => {
    setState(!state);

    let newIndex = workIndex + 1;
    if (newIndex === works.length) {
      newIndex = 0;
    }

    setTimeout(() => {
      setWork(works[newIndex]);
      setWorkIndex(newIndex);
    }, 700);
  }

  return (
    <div className="relative overflow-hidden w-full h-full">
      <button className="absolute bottom-0 right-0 z-10 w-16 h-16 bg-gray" onClick={nextWork}>
        <span className="flex items-center justify-center">
          <img src={ArrowRight} alt="Arrow right" />
        </span>
      </button>
      <div className="h-full">
        <BlockReveal state={state}>
          <>
            <GatsbyImage
              className="h-full"
              image={getImage(work.image)}
              objectFit="cover"
              alt={work.name}
            />
            <div className="absolute left-0 bottom-0 w-full h-16 px-6 backdrop-filter backdrop-blur-3xl leading-16">
              <span className="text-white text-xl font-bold uppercase">{work.name}</span>
            </div>
          </>
        </BlockReveal>
      </div>
    </div>
  );
};

export default Works;
