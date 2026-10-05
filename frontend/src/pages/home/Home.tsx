import React from 'react'
import { 
    Hero, 
    Skills,
    Projects, 
} from '../../components'
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
        <Hero/>
        <Skills/>
        <Projects/>
    </main>
  )
}

export default Home