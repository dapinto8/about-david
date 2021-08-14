import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ArrowRight from '../images/arrow_right.svg';

const Works = ({ works }) => {
  const [swiper, setSwiper] = useState(null);

  const nextWork = () => {
    swiper.slideNext();
  };

  return (
    <div className="absolute right-0 bottom-0 w-full xl:max-w-lg 2xl:max-w-2xl h-1/2 lg:h-2/3">
      <button
        className="absolute -top-14 right-0 xl:-left-14 w-14 h-14 bg-gray"
        onClick={nextWork}
      >
        <span className="flex items-center justify-center">
          <img src={ArrowRight} alt="Arrow right" />
        </span>
      </button>
      <Swiper
        onSwiper={swiper => setSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        className="h-full"
      >
        {works.map(work => (
          <SwiperSlide key={work.id}>
            <GatsbyImage
              className="h-full"
              image={getImage(work.image)}
              objectFit="cover"
              alt={work.name}
            />
            <div className="absolute left-0 bottom-0 w-full p-4 px-6 bg-gray backdrop-filter backdrop-blur-3xl">
              <span className="text-primary text-xl font-bold uppercase">{work.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Works;
