import styles from "./Header.module.css";
import { Link, ThemeToggle } from "../../components";

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="#home" text="Home"/>
        <Link href="#skills" text="Skills"/>
        <Link href="#projects" text="Projects"/>
      </nav>
      <ThemeToggle/>
    </header>
  )
}

export default Header