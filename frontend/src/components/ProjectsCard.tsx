import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

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

type Props = {
    projects: Project[]
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
    <div>
        {projects.map((project, index) => (
            <div key={index}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.html_url ?? "#"}>GitHub</a>
                {
                    project.homepage && <a href={project.homepage}>Visit Demo</a>
                }
                {
                    project.languages &&
                        <div>
                            <p>Languages: </p>
                            <div style={{"width": "100px"}}>
                                <PieChart
                                    data={Object.entries(project.languages).map(([language, percentage], index) => ({
                                        title: language,
                                        value: percentage,
                                        color: `hsl(${getCharacterCode(language) * 10}, 60%, 60%)`
                                    }))}
                                />
                            </div>
                            {Object.entries(project.languages).map(([language, percentage], index) => (
                                <div key={index}>
                                    <span style={{ "backgroundColor": `hsl(${getCharacterCode(language) * 10}, 60%, 60%)`, "width": "10px", "height": "10px", "display": "inline-block"}}></span>
                                    <span>{language}: </span>
                                    <span>{percentage}%</span>
                                </div>
                            ))}
                        </div>
                }
            </div>
        ))}
    </div>
  )
}

export default ProjectsCard