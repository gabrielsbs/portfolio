import React from 'react';
import { Link } from 'react-scroll';
import GithubSvg from '../assets/icons/github-fill';
import LinkedinSvg from '../assets/icons/linkedin-box-fill';

interface MenuProps {
  readonly nav: boolean;
  readonly handleClose: () => void;
}
const Menu = ({ nav, handleClose }: MenuProps) => {
  return (
    <div className={!nav ? 'hidden' : 'absolute w-full h-screen top-12 bottom-0 bg-gray-600 '}>
      <ul>
        <li className='border-b border-gray-500 bg-gray-600  w-full'>
          <Link className='text-gray-300' onClick={handleClose} to='home' smooth duration={500}>
            _hello
          </Link>
        </li>
        <li className='border-b border-gray-500 bg-gray-600 w-full'>
          <Link className='text-gray-300' onClick={handleClose} to='about' smooth offset={-200} duration={500}>
            _about-me
          </Link>
        </li>
        <li className='border-b border-gray-500 bg-gray-600 w-full'>
          <Link className='text-gray-300' onClick={handleClose} to='projects' smooth offset={-50} duration={500}>
            _projects
          </Link>
        </li>
        <li className='border-b border-gray-500 bg-gray-600 w-full'>
          <Link className='text-gray-300' onClick={handleClose} to='contact' smooth offset={-100} duration={500}>
            _contact-me
          </Link>
        </li>
      </ul>
      <div className='absolute bottom-12 w-full h-12 border-t border-gray-500'>
        <div className='flex h-12 items-center justify-end'>
          <p className='text-gray-300 flex items-center p-4'>find me in: </p>
          <a
            href='https://linkedin.com/in/gabrielsbs'
            target='_blank'
            className='text-gray-300 h-full flex items-center p-4 border-l border-gray-500'
            rel='noreferrer'>
            <LinkedinSvg />
          </a>

          <a
            href='https://github.com/gabrielsbs'
            target='_blank'
            className='text-gray-300 h-full px-4 flex items-center border-l border-gray-500'
            rel='noreferrer'>
            <GithubSvg />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
