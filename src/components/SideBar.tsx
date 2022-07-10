import React from 'react';
import GithubSvg from '../assets/icons/github-fill';
import LinkedinSvg from '../assets/icons/linkedin-box-fill';

const SideBar = () => {
  return (
    <div className='fixed bottom-0 left-0 right-auto hidden md:flex '>
      <ul className='flex flex-col items-center after:block after:w-px after:h-24 after:mt-4 after:mx-auto after:bg-gray-300'>
        <li>
          <a
            href='https://linkedin.com/in/gabrielsbs'
            target='_blank'
            className='text-gray-300 flex items-center p-4'
            rel='noreferrer'>
            <LinkedinSvg />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/gabrielsbs'
            target='_blank'
            className='text-gray-300 h-full px-4 flex items-center'
            rel='noreferrer'>
            <GithubSvg />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
