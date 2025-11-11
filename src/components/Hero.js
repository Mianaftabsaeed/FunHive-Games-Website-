import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">FunHive Games</span>
          </h1>
          <p className="hero-subtitle">
            Creating innovative and engaging games that bring joy to players worldwide. 
            We specialize in mobile games, web development, and cutting-edge technology solutions.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">Learn More</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Games Developed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1M+</div>
            <div className="stat-label">Active Players</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




