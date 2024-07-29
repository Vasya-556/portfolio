import React from 'react'
import LightDarkModeToggle from './LightDarkModeToggle';

function Header() {
    const handleScroll = (id, event) => {
        event.preventDefault();
        const element = document.getElementById(id);
        const headerOffset = document.querySelector('header').offsetHeight;
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
      };
  return (
    <header className='header'>
        <nav>
            <ul>
                <li><a href="/" onClick={(event) => handleScroll('skills', event)}>Skills</a></li>
                <li><a href="/" onClick={(event) => handleScroll('projects', event)}>Projects</a></li>
                <LightDarkModeToggle/>
            </ul>
        </nav>
    </header>
  )
}

export default Header
