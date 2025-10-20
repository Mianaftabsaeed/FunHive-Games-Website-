import React from 'react';
import './Career.css';

const Career = () => {
  const jobOpenings = [
    {
      title: "Senior Game Developer",
      department: "Development",
      type: "Full-time",
      location: "Remote/Lahore",
      description: "We're looking for an experienced game developer to join our team and help create the next generation of mobile games."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time", 
      location: "Remote/Lahore",
      description: "Join our design team to create beautiful, intuitive user interfaces that enhance the gaming experience."
    },
    {
      title: "React Developer",
      department: "Web Development",
      type: "Full-time",
      location: "Remote/Lahore", 
      description: "Help us build modern web applications and gaming platforms using React and cutting-edge technologies."
    },
    {
      title: "Python Automation Engineer",
      department: "Automation",
      type: "Full-time",
      location: "Remote/Lahore",
      description: "Develop automation solutions and tools to streamline our development processes and enhance productivity."
    },
    {
      title: "Flutter Mobile Developer",
      department: "Mobile Development", 
      type: "Full-time",
      location: "Remote/Lahore",
      description: "Create cross-platform mobile applications and games using Flutter framework."
    },
    {
      title: "Unity Game Developer",
      department: "Game Development",
      type: "Full-time",
      location: "Remote/Lahore",
      description: "Develop engaging 2D and 3D games using Unity engine with focus on mobile platforms."
    }
  ];

  const benefits = [
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family"
    },
    {
      icon: "🏖️",
      title: "Flexible Vacation",
      description: "Generous paid time off and flexible working hours"
    },
    {
      icon: "🚗",
      title: "Transport Allowance",
      description: "Transportation benefits and fuel allowances"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive compensation package with performance bonuses"
    },
    {
      icon: "🎓",
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development programs"
    },
    {
      icon: "🎮",
      title: "Gaming Perks",
      description: "Latest gaming equipment and access to premium game libraries"
    }
  ];

  return (
    <section id="career" className="section career">
      <div className="container">
        <h2 className="section-title">Join Our Team</h2>
        <p className="section-subtitle">
          Passionate about gaming and technology? We're always looking for talented individuals 
          to join our world-class team and help us create amazing gaming experiences.
        </p>

        <div className="career-content">
          <div className="job-openings">
            <h3 className="subsection-title">Current Openings</h3>
            <div className="jobs-grid">
              {jobOpenings.map((job, index) => (
                <div key={index} className="job-card">
                  <div className="job-header">
                    <h4 className="job-title">{job.title}</h4>
                    <div className="job-meta">
                      <span className="job-type">{job.type}</span>
                      <span className="job-location">{job.location}</span>
                    </div>
                  </div>
                  <p className="job-department">{job.department}</p>
                  <p className="job-description">{job.description}</p>
                  <button className="btn btn-apply">Apply Now</button>
                </div>
              ))}
            </div>
          </div>

          <div className="benefits-section">
            <h3 className="subsection-title">Why Work With Us?</h3>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="career-cta">
          <h3>Ready to Start Your Journey?</h3>
          <p>Send us your resume and let's discuss how you can contribute to our team!</p>
          <a href="mailto:mainaftabsaeed@gmail.com" className="btn btn-primary">Send Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Career;

