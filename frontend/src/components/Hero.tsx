import React from 'react'
import heroData from "../data/hero.json";

function Hero() {
  return (
    <div id='Home'>
        <div>
            <h2>{heroData.Hero.name}</h2>
            <h3>{heroData.Hero.title}</h3>
            <p>{heroData.Hero.degree}</p>
        </div>
        <div>
          <h3>Contact me:</h3>
          {
            Object.entries(heroData["Contact me"]).map(([name, item], index) => (
              <div key={index}>
                <a
                  href={item.href}
                  target='_blank'
                  {...("download" in item && item.download && { download: true })}
                  {...("style" in item && item.style && { style: item.style })}
                >
                  {"text" in item && item.text && <span>{item.text}</span>}
                  <img
                    alt={name}
                    src={item.src}
                    {...("style" in item && item.imgStyle && { style: item.imgStyle })}
                  />
                </a>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Hero