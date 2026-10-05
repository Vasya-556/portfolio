import React, { 
  useState,
  useEffect,
} from 'react'
import styles from "./themeToggle.module.css";

function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = isLightMode ? 'light' : 'dark';
  }, [isLightMode])

  const toggleTheme = (e: React.BaseSyntheticEvent) => {
    setIsLightMode(e.target.checked);
    localStorage.setItem('theme', e.target.checked ? 'light' : 'dark');
  };

  return (   
    <div className={styles.themeToggle}>
      <label className={styles.switch}>
          <input 
            type="checkbox" 
            defaultChecked={isLightMode}
            onChange={toggleTheme}
          />
          <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default ThemeToggle