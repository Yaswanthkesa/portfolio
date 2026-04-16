import './Projects.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Cattle Breed Classification & Milk-Trait Prediction',
      description:
        'Built a multimodal CNN–LSTM system for joint breed classification and milk-trait prediction, achieving 96.52% accuracy and low MAE 0.0614. Evaluated multiple pretrained CNN backbones.',
      tags: ['Python', 'CNN', 'LSTM', 'Deep Learning'],
      github: 'https://github.com/Yaswanthkesa',
    },
    {
      title: 'Food Freshness Detection Using ML',
      description:
        'Developed a CNN-based model to classify food freshness from images and integrated clustering methods for multi-level freshness detection. Validated performance on real-world samples.',
      tags: ['Computer Vision', 'CNN', 'Clustering', 'Image Processing'],
      github: 'https://github.com/Yaswanthkesa',
    },
    {
      title: 'Thyroid Cancer Recurrence Prediction',
      description:
        'Designed a hybrid supervised model for thyroid cancer recurrence prediction using clinical datasets. Includes feature engineering and model optimization. Research paper in progress.',
      tags: ['Machine Learning', 'Healthcare', 'Feature Engineering', 'Python'],
      github: 'https://github.com/Yaswanthkesa',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
