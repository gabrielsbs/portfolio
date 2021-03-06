/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Element } from 'react-scroll';
import { projectImage } from '../assets/images';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    name: '_tetris-game',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis',
    image: projectImage,
    technologies: ['React', 'Typescript']
  }
];
const Projects = () => {
  return (
    <Element name='projects' className='w-full mt-24 pb-40'>
      <div className='text-center text-3xl'>Some Things that I've Built</div>
      <div className='grid grid-cols-auto mt-24'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} projectIndex={index} />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
// ProjectCard
