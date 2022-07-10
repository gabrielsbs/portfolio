import React from 'react';
import { Element } from 'react-scroll';

const blur = require('../assets/images/background-blur.png');

const Hero = () => {
  return (
    <Element
      name='home'
      className='w-full h-screen bg-blur lg:bg-none bg-no-repeat bg-cover bg-gray-600 flex flex-col justify-between'>
      <div className='grid lg:grid-cols-2 max-w-[1240px] m-auto'>
        <div className=' flex flex-col justify-center lg:items-start px-16 py-8'>
          <p className='text-justify pl-0.75'>Hello everyone. I am</p>
          <h1 className='text-justify text-5xl leading-relaxed'>Gabriel Santos</h1>
          <h2 className='text-justify text-2xl text-purple-500 pl-0.75'>{` > Front End Developer`}</h2>
          <p className='text-justify mt-8 pl-0.75'>
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital
            experiences. Currently, I'm focused on building accessible, human-centered products at Syngenta Digital
          </p>
        </div>
      </div>
      <img className='absolute bottom-0 right-0 left-0 top-0 hidden lg:flex' src={blur} alt='' />
    </Element>
  );
};

export default Hero;
