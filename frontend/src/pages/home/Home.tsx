import styles from "./Home.module.css";
import heroData from "../../data/hero.json";
import { Link } from "../../components";

function Home() {
  return (
    <section id='home' className={styles.hero}>
        <div className={styles.info}>
            <h1>{heroData.Hero.name}</h1>
            <h2>{heroData.Hero.title}</h2>
            <h3>{heroData.Hero.description}</h3>
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

export default Home