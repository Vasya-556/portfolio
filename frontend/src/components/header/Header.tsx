import styles from "./Header.module.css";
import { ThemeToggle } from "../../components";
import { Link } from "react-router-dom";
import linkStyles from "../link/Link.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.navbar}>
          <Link to="/" className={linkStyles.link}>Home</Link>
          <Link to="/skills" className={linkStyles.link}>Skills</Link>
          <Link to="/projects" className={linkStyles.link}>Projects</Link>
        </nav>
        <ThemeToggle/>
      </div>
    </header>
  )
}

export default Header