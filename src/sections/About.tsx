import React from 'react';
import { Element } from 'react-scroll';

const profile = require('../assets/images/profile.jpeg');

const About = () => {
  return (
    <Element name='about' className='w-full mt-24 mb-32'>
      <h2 className='text-2xl text-purple-500 mx-auto'>About Me</h2>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-6'>
        <div className='text-justfy'>
          <p className='py-6 text-gray-300'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis
            dignissimos itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum
            placeat veritatis dignissimos itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Cumque asperiores earum placeat
          </p>
          <p className='py-6 text-gray-300'>Some techonlogies that I have been working recently:</p>
          <div className='grid grid-cols-2 grid-rows-3'>
            <p className='text-green-300'>{`> Typescript`}</p>
            <p className='text-green-300'>{`> React`}</p>
            <p className='text-green-300'>{`> React Native`}</p>
            <p className='text-green-300'>{`> Node`}</p>
            <p className='text-green-300'>{`> Python`}</p>
            <p className='text-green-300'>{`> Flask`}</p>
          </div>
        </div>

        <div className='mx-auto'>
          <img src={profile} width='300' height='300' alt='' />
        </div>
      </div>
    </Element>
  );
};

export default About;
