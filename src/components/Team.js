import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Aftab Saeed",
      position: "CEO of FunHive Games",
      description: "Visionary leader with extensive experience in game development and business strategy.",
      image: "👨‍💼"
    },
    {
      name: "Mr. Umair Akram", 
      position: "CEO of GameEra Studio",
      description: "Strategic thinker and technology enthusiast driving innovation in our gaming solutions.",
      image: "👨‍💻"
    },
    {
      name: "Sarah Aymen",
      position: "Lead ASO (App Store Optimization)",
      description: "Expert in app store optimization and digital marketing strategies for maximum reach.",
      image: "📱"
    },
    {
      name: "Umamah noor",
      position: "Lead Unity Developer", 
      description: "Master of Unity game engine with years of experience in creating immersive gaming experiences.",
      image: "🎮"
    },
    {
      name: "Minahil Umair",
      position: "Lead Designer",
      description: "Creative genius behind our stunning visual designs and user interface experiences.",
      image: "🎨"
    }
  ];

  return (
    <section id="team" className="section team">
      <div className="container">
        <h2 className="section-title">Our Amazing Team</h2>
        <p className="section-subtitle">
          Meet the talented individuals who make FunHive Games a success. 
          Our team combines creativity, technical expertise, and passion for gaming.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <div className="team-avatar">
                  {member.image}
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-description">{member.description}</p>
              </div>
              <div className="team-social">
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="team-quote">
          <blockquote>
            "Talent wins games, but teamwork and intelligence win championships."
          </blockquote>
          <cite>- FunHive Games Team</cite>
        </div>
      </div>
    </section>
  );
};

export default Team;




