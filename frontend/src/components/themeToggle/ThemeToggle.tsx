import React, { 
  useState,
  useEffect,
} from 'react'
import styles from "./themeToggle.module.css";

function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(() => {
    if (localStorage.getItem('theme')){
      return localStorage.getItem('theme') === 'light';
    }
    return true
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
      <label className={styles.switch} aria-label='Theme toggle'>
          <input
            className='toggle' 
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