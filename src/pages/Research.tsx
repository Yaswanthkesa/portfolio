import './Research.css';

interface ResearchPaper {
  icon: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
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
      badgeColor: 'gold',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Food Freshness Detection',
      description: 'Presented at IEEE ICEI 2026 Conference',
      badge: 'Published',
      badgeColor: 'green',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Real-Time Adjective Recognition in ISL',
      description: 'Submitted to Springer, Multimedia Tools and Applications',
      badge: 'Under Review',
      badgeColor: 'blue',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Thyroid Cancer Recurrence Framework',
      description: "In Submission – IC3ECSBHI'2026 Conference",
      badge: 'In Submission',
      badgeColor: 'orange',
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
    <div className="research-page page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Research & Publications</h1>
          <p className="section-subtitle">
            My contributions to academic research and achievements
          </p>
        </div>

        <div className="research-section">
          <h2 className="subsection-title">Publications & Patents</h2>
          <div className="research-grid">
            {papers.map((paper, index) => (
              <div key={index} className="research-card card">
                <div className="research-icon">
                  <i className={paper.icon}></i>
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.description}</p>
                <span className={`badge badge-${paper.badgeColor}`}>{paper.badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2 className="subsection-title">Achievements & Certifications</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card card">
                <div className="achievement-icon">
                  <i className={achievement.icon}></i>
                </div>
                <div className="achievement-content">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
