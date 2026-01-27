import { useEffect, useRef, useState } from 'react'

const Hero = ({ 
  title = "Glorifying God as a community of disciples", 
  backgroundImage = "/hero.jpg",
  primaryButtonText = "I'm New Here",
  primaryButtonLink = "/im-new-here",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about"
}) => {
  return (
    <section className="hero">
      <div 
        className="hero-background" 
        style={{ 
          backgroundImage: backgroundImage.startsWith('http') 
            ? `url(${backgroundImage})` 
            : `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>{title}</h1>
        <div className="hero-buttons">
          <a href={primaryButtonLink} className="btn primary">
            {primaryButtonText}
          </a>
          <a href={secondaryButtonLink} className="btn secondary">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
