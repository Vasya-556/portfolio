import skillsData from "../../data/skills.json";
import { SkillsCard } from '../.';
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h2>Skills: </h2>
        {Object.entries(skillsData).map((obj, index) => (
          <SkillsCard key={index} category={obj[0]} skills={obj[1]}/>
        ))}
    </section>
  )
}

export default Skills