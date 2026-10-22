import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-collage" aria-hidden="true">
          <img className="hero-tile hero-tile-1" src="https://play-lh.googleusercontent.com/aVVM3xuReitrf4zxjbz4T3cKmCGwrDyxfPOrtZ_qadUH7awYL7KddzeMfaRB_h8BZxwBhXfUpb4PHHlywWPqxv8=w720-h1280" alt="" />
          <img className="hero-tile hero-tile-2" src="https://play-lh.googleusercontent.com/lzzkCCxqif1uhhsmslumeP8p1jet-8zKoXFK9AQuZv-79nCgt8P-N2V1_nOOhYmMv_-lghDOvFcsjKBWqG4E=w720-h1280" alt="" />
          <img className="hero-tile hero-tile-3" src="https://play-lh.googleusercontent.com/kdwGXYl8FJcsyk7fp7EcKMv4UtHgRTt--2HOJq9UemBS9iQb9Ch7iE_rEVUCRLNwWtU53flh39vNIAg7fII1JA=w720-h1280" alt="" />
          <img className="hero-tile hero-tile-4" src="https://play-lh.googleusercontent.com/8StiNydJoc_yWDv4PxclgvIeYzFZZvbqbVHbY0yA1r-wE0JrCBF7yF9GGKwbhPUxYcei95zGCDgYOUn7prhlYvE=w720-h1280" alt="" />
          <img className="hero-tile hero-tile-5" src="https://play-lh.googleusercontent.com/-8c1Q0AIfXGjYKVlE4dPNVZsGSalkyjC0I-R_2Eh5AUj6pNlo6ArgOq4ND8CtUU3JCYPGYYxxRaoR5sg3PZS=w720-h1280" alt="" />
        </div>
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">FUNHIVE GAMES</span>
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




