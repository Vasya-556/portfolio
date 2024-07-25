import React from 'react'
import jsSvg from '../svgs/js.svg';
import htmlSvg from '../svgs/html.svg';
import cssSvg from '../svgs/css.svg';
import pythonSvg from '../svgs/python.svg';
import reactjsSvg from '../svgs/reactjs.svg';
import djangoSvg from '../svgs/django.svg';
import csharpSvg from '../svgs/csharp.svg';
import sqlSvg from '../svgs/sql.svg';
import gitSvg from '../svgs/git.svg';
import linuxSvg from '../svgs/linux.svg';
import problemSolvingPng from '../pngs/problem-solving.png';
import AdaptabilityPng from '../pngs/Adaptability.png';
import CriticalThinkingPng from '../pngs/Critical_Thinking.png';
import TeamworkPng from '../pngs/Teamwork.png';

function Skills() {
  return (
    <div className='Skills'>
      <section className='SoftSkills'>
        <img src={problemSolvingPng} alt='' title='Problem solving'/>
        <img src={AdaptabilityPng} alt='' title='Adaptability'/>
        <img src={CriticalThinkingPng} alt='' title='Criticall thinking'/>
        <img src={TeamworkPng} alt='' title='Teamwork'/>
      </section>
      <section className='TechSkills'>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
          <img src={jsSvg} alt=''/>
        </a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>
          <img src={htmlSvg} alt=''/>
        </a>
        
        <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>
          <img src={cssSvg} alt=''/>
        </a>
        
        <a href='https://www.python.org/' target='_blank'>
          <img src={pythonSvg} alt=''/>
        </a>
        
        <a href='https://reactjs.org/' target='_blank'>
          <img src={reactjsSvg} alt=''/>
        </a>
        
        <a href='https://www.djangoproject.com/' target='_blank'>
          <img src={djangoSvg} alt=''/>
        </a>
        
        <a href='https://learn.microsoft.com/en-us/dotnet/csharp/' target='_blank'>
          <img src={csharpSvg} alt=''/>
        </a>
        
        <a href='https://www.w3schools.com/sql/' target='_blank'>
          <img src={sqlSvg} alt=''/>
        </a>
        
        <a href='https://git-scm.com/' target='_blank'>
          <img src={gitSvg} alt=''/>
        </a>
        
        <a href='https://www.linux.org/' target='_blank'>
          <img src={linuxSvg} alt=''/>
        </a>
      </section>
    </div>
  )
}

export default Skills