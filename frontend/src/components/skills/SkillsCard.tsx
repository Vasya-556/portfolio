import React from 'react'

type Props = {
    category: string,
    skills: {
        name: string,
        icon: string
    }[]
}

function SkillsCard({category, skills}: Props) {
  return (
    <div style={{ "display": "flex", "gap": "10px" }}>
        <h4>{category}: </h4>
        {skills.map((skill, index) => (
            <div key={index}>
                <p>{skill.name}</p>
                <img src={skill.icon} alt='' width={40}></img>
            </div>
        ))}
    </div>
  )
}

export default SkillsCard