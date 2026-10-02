import React from 'react'
import { useFetch } from '../hooks'
import { projectsService } from '../service';
import ProjectsCard from './ProjectsCard';
import projectsDataRaw from "../data/projects.json";
import { projectsTypes } from '../types';

function Projects() {
  const projectsData = projectsDataRaw as unknown as projectsTypes.Project[];
  
  return (
    <div id='projects'>
      <h2>Projects:</h2>
      <ProjectsCard projects={projectsData ?? []}/>
    </div>
  )
}

export default Projects