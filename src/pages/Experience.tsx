import './Experience.css';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  location: string;
  points: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      date: 'Jan 2026 - Apr 2026',
      title: 'NPTEL Winter Internship – Full Stack (MERN Stack)',
      company: 'IIT Ropar',
      location: 'Virtual',
      points: [
        'Currently in Phase 2 of a structured 10-week internship focused on JavaScript, TypeScript, React, Express, and MongoDB',
        'Applied full-stack concepts through case studies including REST APIs, frontend components, and database integration',
        'Cleared technical evaluation stages and progressing towards the final project development phase',
      ],
    },
    {
      date: 'Jun 2025 - Jul 2025',
      title: 'Summer Intern — Sign Language Recognition',
      company: 'Centre for Health Innovations (CHI)',
      location: 'MRIIRS',
      points: [
        'Developed a real-time Indian Sign Language recognition system using MediaPipe and deep learning models',
        'Implemented keypoint extraction pipeline (102D landmarks) and trained LSTM, GRU, and BiLSTM models',
        'Integrated live webcam predictions with a web-based interface for real-time gesture classification',
      ],
    },
  ];

  return (
    <div className="experience-page page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Experience</h1>
          <p className="section-subtitle">
            My professional journey and internship experiences
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content card">
                <div className="exp-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>
                      {exp.company} • {exp.location}
                    </h4>
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
