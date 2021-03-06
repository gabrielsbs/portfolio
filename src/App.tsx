import React from 'react';
import SideBar from './components/SideBar';
import Hero from './sections/Hero';
import NavBar from './components/NavBar';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='px-16 lg:px-36'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <SideBar />
    </>
  );
};

export default App;
