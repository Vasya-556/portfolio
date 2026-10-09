import styles from "./Header.module.css";
import { 
  Link as ActionLink, 
  ThemeToggle 
} from "../../components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <ActionLink href="#home" text="Home"/>
        <ActionLink href="#skills" text="Skills"/>
        <ActionLink href="#projects" text="Projects"/>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        {/* <ActionLink text="Home"><Link to="/"/></ActionLink> */}
      </nav>
      <ThemeToggle/>
    </header>
  )
}

export default Header