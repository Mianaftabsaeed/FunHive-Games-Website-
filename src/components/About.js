import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About FunHive Games</h2>
        <p className="section-subtitle">
          We are a passionate team of game developers, designers, and innovators dedicated to creating 
          exceptional gaming experiences that captivate and entertain players worldwide.
        </p>

        <div className="about-content">
          <div className="about-text">
            <div className="about-item">
              <div className="about-icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="about-info">
                <h3>Game Development Excellence</h3>
                <p>
                  We specialize in creating engaging mobile games, web-based games, and interactive 
                  experiences that push the boundaries of technology and creativity. Our games are 
                  designed to provide hours of entertainment while maintaining high performance standards.
                </p>
              </div>
            </div>

            <div className="about-item">
              <div className="about-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="about-info">
                <h3>Full-Stack Development</h3>
                <p>
                  From frontend React applications to backend Python automation systems, we provide 
                  comprehensive development services. Our expertise spans mobile app development with 
                  Flutter, web development, and cutting-edge automation solutions.
                </p>
              </div>
            </div>

            <div className="about-item">
              <div className="about-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="about-info">
                <h3>Innovation & Teamwork</h3>
                <p>
                  Our diverse team brings together expertise in game design, programming, UI/UX design, 
                  and strategic planning. We believe in collaborative development and continuous innovation 
                  to deliver products that exceed expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-grid">
              <div className="feature-card">
                <i className="fas fa-mobile-alt"></i>
                <h4>Mobile Games</h4>
                <p>Cross-platform mobile game development with Unity and Flutter</p>
              </div>
              
              <div className="feature-card">
                <i className="fas fa-globe"></i>
                <h4>Web Development</h4>
                <p>Modern web applications using React, Python, and latest technologies</p>
              </div>
              
              <div className="feature-card">
                <i className="fas fa-robot"></i>
                <h4>Automation</h4>
                <p>Python-based automation solutions for enhanced productivity</p>
              </div>
              
              <div className="feature-card">
                <i className="fas fa-paint-brush"></i>
                <h4>UI/UX Design</h4>
                <p>Beautiful, intuitive user interfaces that enhance user experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

