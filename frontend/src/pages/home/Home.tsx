import React from 'react'
import { 
    Hero, 
    Skills,
    Projects, 
} from '../../components'
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.main}>
        <Hero/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default Home