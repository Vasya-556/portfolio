import { ProjectsCards } from '../../components/';
import projectsDataRaw from "../../data/projects.json";
import { projectsTypes } from '../../types';
import styles from "./Projects.module.css";

function Projects() {
  const projectsData = projectsDataRaw as unknown as projectsTypes.Project[];
  
  return (
    <section id='projects' className={styles.container}>
      <h2>Projects:</h2>
      <ProjectsCards projects={projectsData ?? []}/>
    </section>
  )
}

export default Projects