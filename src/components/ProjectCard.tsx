import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  readonly project: Project;
  readonly projectIndex: number;
}
const ProjectCard = ({ project, projectIndex }: ProjectCardProps) => {
  return (
    <div>
      <p className='text-purple-500 flex'>
        {`Project ${projectIndex + 1}`} <p className='text-gray-300'>{`// ${project.name}`}</p>
      </p>
      <div className='bg-gray-600 rounded-xl shadow-2xl'>
        <img className='object-cover w-full h-40 overflow-hidden rounded-t-xl' src={project.image} alt='' />
        <div className='p-8'>
          <p>{project.description}</p>
          <ul className='flex mt-4 flex-wrap'>
            {project.technologies.map((tech, index) => (
              <li className='mr-2 mb-2 text-gray-300 text-sm' key={`${tech}_${projectIndex}_${index}`}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
