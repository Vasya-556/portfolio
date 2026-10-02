import React from 'react'
import skillsData from "../../data/skills.json";
import SkillsCard from './SkillsCard';

function Skills() {
  return (
    <div id='skills'>
        <h2>Skills: </h2>
        {Object.entries(skillsData).map((obj, index) => (
            <div key={index}>
                <SkillsCard category={obj[0]} skills={obj[1]}/>
            </div>
        ))}
    </div>
  )
}

export default Skills