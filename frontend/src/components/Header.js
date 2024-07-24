import React from 'react'

function Header() {
    const handleScroll = (id, event) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <header>
        <nav>
            <ul>
                <li><a href="/" onClick={(event) => handleScroll('about-me', event)}>About Me</a></li>
                <li><a href="/" onClick={(event) => handleScroll('skills', event)}>Skills</a></li>
                <li><a href="/" onClick={(event) => handleScroll('projects', event)}>Projects</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
