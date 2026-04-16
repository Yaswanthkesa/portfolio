import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Yaswanth Kesa</h3>
            <p>AI/ML Engineer | Full Stack Developer</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Yaswanthkesa" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/kesa-veera-venkata-yaswanth-6ba447281" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:yaswanthkesa@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Kesa Veera Venkata Yaswanth. All rights reserved.</p>
          <p>Built with passion and code ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
