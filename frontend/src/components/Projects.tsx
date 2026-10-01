import React from 'react'
import { useFetch } from '../hooks'
import { projectsService } from '../service';
import ProjectsCard from './ProjectsCard';
import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'

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
      <div>
        <Tailspin
          size="40"
          stroke="5"
          speed="0.9"
          color="black"
        />
      </div>
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