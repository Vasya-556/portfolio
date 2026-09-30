import React from 'react'

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
                            {Object.entries(project.languages).map(([language, percentage]) => (
                                <div key={language}>
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