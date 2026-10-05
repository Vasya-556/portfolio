import React from 'react'
import { ProjectsCard } from '../.';
import projectsDataRaw from "../../data/projects.json";
import { projectsTypes } from '../../types';
import styles from "./Projects.module.css";

function Projects() {
  const projectsData = projectsDataRaw as unknown as projectsTypes.Project[];
  
  return (
    <div id='projects' className={styles.container}>
      <h2>Projects:</h2>
      <ProjectsCard projects={projectsData ?? []}/>
    </div>
  )
}

export default Projects