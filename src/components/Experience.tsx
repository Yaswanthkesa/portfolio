import './Experience.css';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  points: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      date: 'Jan 2026 - Apr 2026',
      title: 'NPTEL Winter Internship – Full Stack (MERN Stack)',
      company: 'IIT Ropar (Virtual)',
      points: [
        'Currently in Phase 2 of a structured 10-week internship focused on JavaScript, TypeScript, React, Express, and MongoDB',
        'Applied full-stack concepts through case studies including REST APIs, frontend components, and database integration',
        'Cleared technical evaluation stages and progressing towards the final project development phase',
      ],
    },
    {
      date: 'Jun 2025 - Jul 2025',
      title: 'Summer Intern — Sign Language Recognition',
      company: 'Centre for Health Innovations (CHI), MRIIRS',
      points: [
        'Developed a real-time Indian Sign Language recognition system using MediaPipe and deep learning models',
        'Implemented keypoint extraction pipeline (102D landmarks) and trained LSTM, GRU, and BiLSTM models',
        'Integrated live webcam predictions with a web-based interface for real-time gesture classification',
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
