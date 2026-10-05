import styles from "./Header.module.css";
import { Link, ThemeToggle } from "../.";

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="#home" text="Home"/>
        <Link href="#projects" text="Projects"/>
        <Link href="#skills" text="Skills"/>
      </nav>
      <ThemeToggle/>
    </header>
  )
}

export default Header