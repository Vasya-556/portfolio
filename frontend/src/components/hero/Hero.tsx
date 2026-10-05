import heroData from "../../data/hero.json";
import styles from "./Hero.module.css";
import { Link } from "../.";

function Hero() {
  return (
    <section id='Home' className={styles.hero}>
        <div className={styles.info}>
            <h1>{heroData.Hero.name}</h1>
            <h3>{heroData.Hero.title}</h3>
            <p>{heroData.Hero.degree}</p>
        </div>
        <div className={styles.contact}>
          <h3>Contact me:</h3>
          {
            Object.entries(heroData["Contact me"]).map(([name, item], index) => (
              <div key={index}>
                <Link 
                  href={item.href}
                  target='_blank'
                  download={item.download}
                  text={item.text}
                >
                  <img
                    alt={name}
                    src={item.src}
                  />
                </Link>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Hero