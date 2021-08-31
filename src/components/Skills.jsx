import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import FadeOutInAnimation from '../components/animations/Fade';
import { BACKEND, FRONTEND } from '../contants';

const getSkills = (skills, type) => {
  return skills.filter(skill => skill.type === type).sort((a, b) => a.order - b.order);
};

const Skills = ({ skills }) => {
  const [state, setState] = useState(false);
  const [type, setType] = useState(FRONTEND);
  const [currentSkills, setCurrentSkills] = useState(getSkills(skills, type));

  const changeType = () => {
    if (type === FRONTEND) {
      setType(BACKEND);
      setCurrentSkills(getSkills(skills, BACKEND));
    } else {
      setType(FRONTEND);
      setCurrentSkills(getSkills(skills, FRONTEND));
    }
  };


  return (
    <div className="pt-16 pb-24 overflow-hidden" onClick={changeType}>
      <h2 className="relative mb-20 text-14vw lg:text-6vw font-bold uppercase leading-through">
        <FadeOutInAnimation state={state} className="block px-6">
          <span className="text-primary">{type}</span>
        </FadeOutInAnimation>
        <span className="text-gray text-opacity-20">Developer</span>
      </h2>
      <div className="flex overflow-x-auto no-scroll-bar px-6">
        <div className="flex">
          {currentSkills.map((skill, i) => (
            <div
              key={skill.id}
              className={cn('mx-4 max-w-xxs flex-grow flex-shrink-0', { 'mt-16': i % 2 === 0 })}
            >
              <GatsbyImage image={getImage(skill.image)} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
