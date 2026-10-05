import styles from "./Header.module.css";
import { Link } from "../.";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.navbar}>
        <Link href="#home" text="Home"/>
        <Link href="#projects" text="Projects"/>
        <Link href="#skills" text="Skills"/>
      </div>
      <div className={styles.themeToggle}>
        <label className={styles.switch}>
            <input type="checkbox"/>
            <span className={styles.slider}></span>
        </label>
      </div>
    </header>
  )
}

export default Header