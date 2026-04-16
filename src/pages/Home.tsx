import { Link } from 'react-router-dom';
import './Home.css';
import formalImage from '../assets/formal.png';

const Home = () => {
  return (
    <div className="home-page page">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi, I'm <span className="highlight">Yaswanth Kesa</span>
            </h1>
            <p className="home-subtitle">
              AI/ML Engineer | Full Stack Developer | Research Enthusiast
            </p>
            <p className="home-description">
              Computer Science student at Manav Rachna University with a passion for building intelligent systems
              and solving real-world problems through machine learning and full-stack development.
            </p>
            <div className="home-stats">
              <div className="stat-box">
                <h3>9.08</h3>
                <p>CGPA</p>
              </div>
              <div className="stat-box">
                <h3>4+</h3>
                <p>Research Papers</p>
              </div>
              <div className="stat-box">
                <h3>1</h3>
                <p>Patent</p>
              </div>
            </div>
            <div className="home-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
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
          <div className="home-image">
            <div className="image-wrapper">
              <img src={formalImage} alt="Yaswanth Kesa" />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
