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
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, opportunities, or collaborations.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <i className={info.icon}></i>
                <div>
                  <h4>{info.title}</h4>
                  <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
