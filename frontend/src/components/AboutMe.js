import React from 'react'

function AboutMe() {
  return (
    <div className='AboutMe'>
        <div class="ImageContainer">
          <img src='Profile Picture.png' alt='' style={{width: "200px", height: "200px", borderRadius: "50%", border: "1px solid black", }}></img>
        </div>
        <div className='TextContent'>
            <h3>Kobryn Vasyl</h3>
            <p>I’m a full-stack developer with a passion for creating well-rounded web applications. Currently, my experience includes a range of non-commercial projects where I’ve honed my skills in both frontend and backend development, and have also dabbled in desktop applications.</p>
        </div>
    </div>
  )
}

export default AboutMe