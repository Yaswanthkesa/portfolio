import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Yaswanth Kesa</span>
          </h1>
          <p className="hero-subtitle">
            AI/ML Engineer | Full Stack Developer | Research Enthusiast
          </p>
          <p className="hero-description">
            Computer Science student at Manav Rachna University with a passion for building intelligent systems
            and solving real-world problems through machine learning and full-stack development.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Yaswanthkesa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/kesa-veera-venkata-yaswanth-6ba447281"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:yaswanthkesa@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
