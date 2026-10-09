import skillsData from "../../data/skills.json";
import { SkillsCards } from '../../components/';

function Skills() {
  return (
    <section id='skills'>
        {Object.entries(skillsData).map((obj, index) => (
          <SkillsCards key={index} category={obj[0]} skills={obj[1]}/>
        ))}
    </section>
  )
}

export default Skills