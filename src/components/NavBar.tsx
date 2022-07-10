import React, { useState } from 'react';
import { Link } from 'react-scroll';
import CloseSvg from '../assets/icons/close-svg';
import MenuSvg from '../assets/icons/menu-svg';
import Menu from './Menu';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className='fixed w-screen z-10 border-b border-gray-500 bg-gray-600'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <p className='flex py-4 text-gray-300 pl-2 pr-16'> gabriel-santos</p>
          <ul className='hidden md:flex'>
            <li className='border-l border-r border-gray-500 p-4'>
              <Link className='text-gray-300 ' to='home' smooth duration={500}>
                _hello
              </Link>
            </li>
            <li className='border-r border-gray-500 p-4'>
              <Link className='text-gray-300' to='about' smooth offset={-200} duration={500}>
                _about-me
              </Link>
            </li>
            <li className='border-r border-gray-500 p-4'>
              <Link className='text-gray-300' to='projects' smooth offset={-100} duration={500}>
                _projects
              </Link>
            </li>
            <li className='p-4'>
              <Link className='text-gray-300' to='contact' smooth offset={-50} duration={500}>
                _contact-me
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuSvg /> : <CloseSvg />}
        </div>
      </div>

      <Menu nav={nav} handleClose={handleClose} />
    </div>
  );
};

export default NavBar;
