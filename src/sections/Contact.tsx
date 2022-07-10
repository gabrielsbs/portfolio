import React from 'react';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name='contact' className='w-full pb-64 mt-32 lg:px-64 flex flex-col justify-center'>
      <div className='text-center'>
        <h1 className='text-5xl mb-4'>Get in touch</h1>
        <p className='text-gray-300'>
          I am open for new opportunities - especially ambitious and large projects. Also, feel free to get in touch if
          you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>
      <div className='text-center mt-12'>
        <a
          className='border border-green-300 p-3 rounded text-green-300'
          href='mailto:gsbdossantos@gmail.com'
          rel='noopener noreferrer'
          target='_blank'>
          Say Hello
        </a>
      </div>
    </Element>
  );
};

export default Contact;
