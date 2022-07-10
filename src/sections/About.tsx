import React from 'react';
import { Element } from 'react-scroll';

const profile = require('../assets/images/profile.jpeg');

const About = () => {
  return (
    <Element name='about' className='w-full mt-24 mb-32'>
      <h2 className='text-2xl text-purple-500 mx-auto'>About Me</h2>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-6'>
        <div>
          <p className='py-3 text-justify text-gray-300'>
            I'm a Full Stack web developer from Brazil, and I have a serious passion for coding and solving problems. My
            interest in programming started during my major in Control and Automation Engineering, when I learned how to
            code in C. Fast-forward a few years, I graduated and started working as a developer for Syngenta Digital,
            where I had the chance to participate in multiple projects - mobile, web and backend - and could work
            alongside some amazing devs.
          </p>
          <p className='py-2 text-justify text-gray-300'>
            Now, my interests are learning as much as I can about web development and work on some ambitious project.
          </p>
          <p className='py-6 text-justify text-gray-300'>
            Here are some techonlogies that I have been working recently:
          </p>
          <div className='grid grid-cols-2 grid-rows-3'>
            <p className='text-green-300'>{`> Typescript`}</p>
            <p className='text-green-300'>{`> React`}</p>
            <p className='text-green-300'>{`> React Native`}</p>
            <p className='text-green-300'>{`> Node`}</p>
            <p className='text-green-300'>{`> Python`}</p>
            <p className='text-green-300'>{`> Flask`}</p>
          </div>
        </div>

        <div className='mx-auto mt-6'>
          <img src={profile} width='300' height='300' alt='' />
        </div>
      </div>
    </Element>
  );
};

export default About;
