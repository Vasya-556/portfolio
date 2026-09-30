import React from 'react'
import data from "../data/skills.json";
import SkillsCard from './SkillsCard';

function Skills() {
  return (
    <div id='skills'>
        <h2>Skills: </h2>
        {Object.entries(data).map((obj) => (
            <div>
                <SkillsCard category={obj[0]} skills={obj[1]}/>
            </div>
        ))}
    </div>
  )
}

export default Skills