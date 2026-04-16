import './Contact.css';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

const Contact = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'yaswanthkesa@gmail.com',
      link: 'mailto:yaswanthkesa@gmail.com',
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 63037 29143',
      link: 'tel:+916303729143',
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/Yaswanthkesa',
      link: 'https://github.com/Yaswanthkesa',
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/kesa-veera-venkata-yaswanth-6ba447281',
    },
  ];

  return (
    <div className="contact-page page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-intro card">
            <h2>Let's Connect!</h2>
            <p>
              Whether you have a question, want to collaborate on a project, or just want to say hi,
              feel free to reach out. I'll try my best to get back to you as soon as possible!
            </p>
            <p>
              I'm particularly interested in opportunities related to AI/ML, full-stack development,
              and research collaborations in healthcare and agriculture domains.
            </p>
          </div>

          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-card card"
              >
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <h3>{info.title}</h3>
                <p>{info.value}</p>
              </a>
            ))}
          </div>

          <div className="cta-section">
            <h2>Download My Resume</h2>
            <p>Want to know more about my experience and skills?</p>
            <a href="/K.V.V.Yaswanth_Resume.pdf" download className="btn btn-primary">
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
