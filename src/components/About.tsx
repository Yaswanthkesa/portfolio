import './About.css';

const About = () => {
  const skills = {
    languages: ['Python', 'C++', 'JavaScript', 'TypeScript'],
    web: ['React.js', 'Express.js', 'MongoDB', 'HTML/CSS'],
    aiml: ['MediaPipe', 'TensorFlow', 'NumPy', 'Pandas'],
    tools: ['Git', 'GitHub', 'VS Code'],
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science and Engineering (AI/ML) student at Manav Rachna University with a CGPA of 9.08.
              My journey in tech is driven by curiosity and a desire to create impactful solutions.
            </p>
            <p>
              Currently, I'm working on cutting-edge projects in machine learning, computer vision, and full-stack development.
              I've published research papers, filed patents, and participated in national-level hackathons.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>9.08</h3>
                <p>CGPA</p>
              </div>
              <div className="stat-item">
                <h3>4+</h3>
                <p>Research Papers</p>
              </div>
              <div className="stat-item">
                <h3>1</h3>
                <p>Patent</p>
              </div>
            </div>
          </div>
          <div className="skills-container">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>
                  <i className="fas fa-code"></i> Languages
                </h4>
                <div className="skill-tags">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>
                  <i className="fas fa-laptop-code"></i> Web Development
                </h4>
                <div className="skill-tags">
                  {skills.web.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>
                  <i className="fas fa-brain"></i> AI/ML
                </h4>
                <div className="skill-tags">
                  {skills.aiml.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>
                  <i className="fas fa-tools"></i> Tools
                </h4>
                <div className="skill-tags">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
