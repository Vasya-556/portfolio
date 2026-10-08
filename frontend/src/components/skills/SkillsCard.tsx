import styles from "./Skills.module.css";

type Props = {
    category: string,
    skills: {
        name: string,
        icon: string,
        proficiency: number
    }[]
}

function SkillsCard({category, skills}: Props) {
  return (
    <div style={{ "display": "flex", "gap": "10px" }} className={styles.skillsCards}>
        <h4 className={styles.category}>{category}: </h4>
        {skills.map((skill, index) => (
            <article key={index} className={styles.card}>
                <div className={styles.cardTitle}>
                    <p>{skill.name}</p>
                    <img src={skill.icon} alt=''></img>
                </div>
                <div className={styles.proficiency}>
                    {
                        Array.from({ length: 5 }, (_, index) => (
                            <span
                                key={index}
                                className={index < skill.proficiency ? 
                                    styles.filled : 
                                ""}
                            />
                        ))
                    }
                </div>
            </article>
        ))}
    </div>
  )
}

export default SkillsCard