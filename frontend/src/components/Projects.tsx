import React from 'react'
import { useFetch } from '../hooks'
import { projectsService } from '../service';
import ProjectsCard from './ProjectsCard';

type Project = {
  html_url: string | null,
  description: string | null,
  homepage: string | null,
  name: string,
  languages: Languages | null
}

type Languages = {
  [key: string]: number
}

function Projects() {
  const { 
    data: projectsData, 
    loading: projectsLoading, 
    error: projectsError 
  } = useFetch<Project[]>({
    func: projectsService.getProjects,
  })

  if (projectsLoading) {
    return (
      <div>Loading ...</div>
    );
  }

  if (projectsError) {
    return (
      <div>Error</div>
    );
  }
  
  return (
    <div id='projects'>
      <h2>Projects:</h2>
      <ProjectsCard projects={projectsData ?? []}/>
    </div>
  )
}

export default Projects