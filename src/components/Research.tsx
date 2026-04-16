import './Research.css';

interface ResearchPaper {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

const Research = () => {
  const papers: ResearchPaper[] = [
    {
      icon: 'fas fa-file-contract',
      title: 'Patent Publication (2026)',
      description: 'Produce Management System for Retail and Food Services',
      badge: 'Inventor',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Food Freshness Detection',
      description: 'Presented at IEEE ICEI 2026 Conference',
      badge: 'Published',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Real-Time Adjective Recognition in ISL',
      description: 'Submitted to Springer, Multimedia Tools and Applications',
      badge: 'Under Review',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Thyroid Cancer Recurrence Framework',
      description: "In Submission – IC3ECSBHI'2026 Conference",
      badge: 'In Submission',
    },
  ];

  const achievements: Achievement[] = [
    {
      icon: 'fas fa-trophy',
      title: "Dean's List for Academic Excellence",
      description: 'SGPA 9.43/10, Semester 4',
    },
    {
      icon: 'fas fa-code',
      title: 'Smart India Hackathon (SIH 2025)',
      description: 'National Level Participation',
    },
    {
      icon: 'fas fa-certificate',
      title: 'NPTEL – The Joy of Computing Using Python',
      description: 'Elite, Top 5% (94% score among 20,403 participants)',
    },
  ];

  return (
    <section id="research" className="research">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        <div className="research-grid">
          {papers.map((paper, index) => (
            <div key={index} className="research-card">
              <div className="research-icon">
                <i className={paper.icon}></i>
              </div>
              <h3>{paper.title}</h3>
              <p>{paper.description}</p>
              <span className="badge">{paper.badge}</span>
            </div>
          ))}
        </div>

        <div className="achievements">
          <h3>Achievements & Certifications</h3>
          <div className="achievement-list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <i className={achievement.icon}></i>
                <div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
