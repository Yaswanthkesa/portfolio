import './About.css';

const About = () => {
  const skills = {
    languages: ['Python', 'C++', 'JavaScript', 'TypeScript'],
    web: ['React.js', 'Express.js', 'MongoDB', 'HTML/CSS'],
    aiml: ['MediaPipe', 'TensorFlow', 'NumPy', 'Pandas'],
    tools: ['Git', 'GitHub', 'VS Code', 'LSTM', 'GRU', 'BiLSTM'],
  };

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering (AIML)',
      institution: 'Manav Rachna University, Faridabad',
      period: '2023-2027',
      cgpa: 'CGPA: 9.08',
    },
    {
      degree: 'Board of Intermediate Education, Andhra Pradesh',
      institution: 'Amaravathi Junior College',
      period: '2021-2023',
      cgpa: '94.8%',
    },
    {
      degree: 'Board of Secondary Education, Andhra Pradesh',
      institution: "Dr. KKR's Gowtham E.M High School",
      period: '2020-21',
      cgpa: '97%',
    },
  ];

  return (
    <div className="about-page page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Get to know more about my background, skills, and education
          </p>
        </div>

        <div className="about-content">
          <div className="about-intro card">
            <h2>Who I Am</h2>
            <p>
              I'm a Computer Science and Engineering (AI/ML) student at Manav Rachna University with a CGPA of 9.08.
              My journey in tech is driven by curiosity and a desire to create impactful solutions that make a difference.
            </p>
            <p>
              Currently, I'm working on cutting-edge projects in machine learning, computer vision, and full-stack development.
              I've published research papers, filed patents, and participated in national-level hackathons like Smart India Hackathon 2025.
            </p>
            <p>
              My passion lies in leveraging AI/ML to solve real-world problems, particularly in healthcare and agriculture.
              I believe in continuous learning and staying updated with the latest technologies and research trends.
            </p>
          </div>

          <div className="education-section">
            <h2 className="subsection-title">Education</h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card card">
                  <div className="edu-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <div className="edu-footer">
                    <span className="period">{edu.period}</span>
                    <span className="cgpa">{edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2 className="subsection-title">Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category card">
                <div className="skill-header">
                  <i className="fas fa-code"></i>
                  <h3>Programming Languages</h3>
                </div>
                <div className="skill-tags">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-category card">
                <div className="skill-header">
                  <i className="fas fa-laptop-code"></i>
                  <h3>Web Development</h3>
                </div>
                <div className="skill-tags">
                  {skills.web.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-category card">
                <div className="skill-header">
                  <i className="fas fa-brain"></i>
                  <h3>AI/ML & Deep Learning</h3>
                </div>
                <div className="skill-tags">
                  {skills.aiml.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-category card">
                <div className="skill-header">
                  <i className="fas fa-tools"></i>
                  <h3>Tools & Technologies</h3>
                </div>
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
    </div>
  );
};

export default About;
