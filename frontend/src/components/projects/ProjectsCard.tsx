import { PieChart } from 'react-minimal-pie-chart';
import { projectsTypes } from '../../types';
import styles from "./Projects.module.css";
import { Link } from "../../components";

type Props = {
    projects: projectsTypes.Project[]
}

function ProjectsCard({ projects }: Props) {

    const getCharacterCode = (word: string): number => {
        let sum = 0;
        for (let c of word){
            sum += c.charCodeAt(0)
        }
        return sum;
    }

  return (
    <div className={styles.projectsCards}>
        {projects.map((project, index) => (
            <article key={index} className={styles.card}>
                <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
                {
                    project.languages &&
                        <div className={styles.languageGraph}>
                            <div className={styles.languagePie}>
                                <PieChart
                                    data={Object.entries(project.languages).map(([language, percentage], index) => ({
                                        title: language,
                                        value: percentage,
                                        color: `hsl(${getCharacterCode(language) * 10}, 60%, 60%)`
                                    }))}
                                />
                            </div>
                            <div className={styles.languageLegend}>
                                {Object.entries(project.languages).map(([language, percentage], index) => (
                                        <div key={index} className={styles.languageRow}>
                                            <span 
                                                style={{ "backgroundColor": `hsl(${getCharacterCode(language) * 10}, 60%, 60%)`}}
                                                className={styles.languageItem}
                                            />
                                            <span>{language}: </span>
                                            <span>{percentage}%</span>
                                        </div>
                                ))}
                            </div>
                        </div>
                }
                <div className={styles.links}>
                    {
                        project.html_url && 
                        <Link 
                            href={project.html_url} 
                            target='_blank' 
                            text='GitHub'
                        />
                    }
                    {
                        project.homepage && 
                        <Link 
                            href={project.homepage} 
                            target='_blank' 
                            text='Visit'
                        />
                    }
                </div>
            </article>
        ))}
    </div>
  )
}

export default ProjectsCard