import './Projects.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  metrics?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Cattle Breed Classification & Milk-Trait Prediction',
      description:
        'Built a multimodal CNN–LSTM system for joint breed classification and milk-trait prediction. Evaluated multiple pretrained CNN backbones for optimal performance.',
      metrics: '96.52% accuracy • MAE 0.0614',
      tags: ['Python', 'CNN', 'LSTM', 'Deep Learning', 'Computer Vision'],
      github: 'https://github.com/Yaswanthkesa/cattle-breed-milk-forecasting',
    },
    {
      title: 'Food Freshness Detection Using ML',
      description:
        'Developed a CNN-based model to classify food freshness from images and integrated clustering methods for multi-level freshness detection. Validated performance on real-world samples.',
      tags: ['Computer Vision', 'CNN', 'Clustering', 'Image Processing', 'Python'],
      github: 'https://github.com/Yaswanthkesa/Food-Freshness-Detection-Using-Deep-Learning',
    },
    {
      title: 'Thyroid Cancer Recurrence Prediction',
      description:
        'Designed a hybrid supervised model for thyroid cancer recurrence prediction using clinical datasets. Includes feature engineering and model optimization. Research paper in progress.',
      tags: ['Machine Learning', 'Healthcare', 'Feature Engineering', 'Python', 'Data Science'],
      github: 'https://github.com/Yaswanthkesa',
    },
  ];

  return (
    <div className="projects-page page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            Explore my featured projects in AI/ML and software development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-number">0{index + 1}</div>
              <h3>{project.title}</h3>
              {project.metrics && <div className="project-metrics">{project.metrics}</div>}
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="fab fa-github"></i>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
