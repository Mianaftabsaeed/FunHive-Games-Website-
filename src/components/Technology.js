import React from 'react';
import './Technology.css';

const Technology = () => {
  const technologies = [
    {
      category: "Game Development",
      items: [
        { name: "Unity", icon: "🎮", description: "Cross-platform game engine" },
        { name: "Unreal Engine", icon: "🚀", description: "Advanced 3D game development" },
        { name: "C#", icon: "⚡", description: "Primary programming language" },
        { name: "C++", icon: "🔧", description: "High-performance game programming" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "React", icon: "⚛️", description: "Modern frontend framework" },
        { name: "JavaScript", icon: "🟨", description: "Dynamic web programming" },
        { name: "HTML5", icon: "🌐", description: "Modern web standards" },
        { name: "CSS3", icon: "🎨", description: "Advanced styling and animations" },
        { name: "Node.js", icon: "🟢", description: "Server-side JavaScript" }
      ]
    },
    {
      category: "Mobile Development",
      items: [
        { name: "Flutter", icon: "📱", description: "Cross-platform mobile framework" },
        { name: "Dart", icon: "🎯", description: "Flutter programming language" },
        { name: "Android", icon: "🤖", description: "Android platform development" },
        { name: "iOS", icon: "🍎", description: "iOS platform development" }
      ]
    },
    {
      category: "Backend & Automation",
      items: [
        { name: "Python", icon: "🐍", description: "Automation and backend development" },
        { name: "Django", icon: "🌿", description: "Python web framework" },
        { name: "Flask", icon: "🏺", description: "Lightweight Python framework" },
        { name: "MySQL", icon: "🗄️", description: "Relational database management" },
        { name: "PostgreSQL", icon: "🐘", description: "Advanced database system" }
      ]
    },
    {
      category: "Cloud & Services",
      items: [
        { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
        { name: "Docker", icon: "🐳", description: "Containerization platform" },
        { name: "Git", icon: "📝", description: "Version control system" },
        { name: "GitHub", icon: "🐙", description: "Code repository and collaboration" }
      ]
    },
    {
      category: "Design & Tools",
      items: [
        { name: "Adobe Creative Suite", icon: "🎨", description: "Professional design tools" },
        { name: "Figma", icon: "🎭", description: "UI/UX design and prototyping" },
        { name: "Blender", icon: "🎬", description: "3D modeling and animation" },
        { name: "Visual Studio", icon: "💻", description: "Integrated development environment" }
      ]
    }
  ];

  return (
    <section id="technology" className="section technology">
      <div className="container">
        <h2 className="section-title">Our Technology Stack</h2>
        <p className="section-subtitle">
          We leverage cutting-edge technologies and tools to create exceptional gaming experiences 
          and robust software solutions across multiple platforms.
        </p>

        <div className="tech-categories">
          {technologies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tech-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="tech-grid">
                {category.items.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-card">
                    <div className="tech-icon">{tech.icon}</div>
                    <div className="tech-info">
                      <h4 className="tech-name">{tech.name}</h4>
                      <p className="tech-description">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Full-Stack Development</h3>
            <p>From frontend React applications to backend Python systems, we provide end-to-end development solutions.</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Cross-Platform Solutions</h3>
            <p>Unity and Flutter enable us to create games and apps that work seamlessly across all major platforms.</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Cloud-Native Architecture</h3>
            <p>Modern cloud infrastructure ensures scalability, reliability, and optimal performance for all our solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;




