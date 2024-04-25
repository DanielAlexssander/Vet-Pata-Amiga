import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const About = () => {
  const { about } = config;
  const [firstItem, secondItem] = about.items;

  return (
    <section className={`bg-background py-8 relative`} id="about">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {about.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="hidden lg:block absolute right-2/4 left-1/4 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className="hidden lg:block absolute right-1/4 bottom-3/4 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className="hidden lg:block absolute top-1/3 left-1/3 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className="hidden lg:block absolute top-1/2 left-1/4 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className="hidden lg:block absolute top-3/4 left-3/4 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className="hidden lg:block absolute top-3/4 left-3/4 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className="hidden lg:block absolute bottom-2/4 left-3/4 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className="hidden lg:block absolute bottom-1/3 right-2/4 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className="hidden lg:block absolute bottom-20 right-1/3 z--100">
          <img className="h-12 w-12" src={about.paw} alt="Pata de cachorro" />
        </div>
        <div className={`flex flex-wrap `}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3 z-50`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600 font-normal text-lg z-50`}>
              {firstItem?.description}
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6 z-50`}>
            <img
              className="h-5/6 "
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6  z-50`}>
            <img
              className="h-5/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3 z-50`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8  font-normal text-lg z-50`}>
                {secondItem?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
