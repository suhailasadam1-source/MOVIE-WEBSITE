import './Footer.css';

const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: ['Home', 'Movies', 'TV Shows', 'New & Popular'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Terms of Service', 'Privacy Policy'],
  },
];

const SOCIALS = ['twitter', 'instagram', 'youtube'];

function SocialIcon({ name }) {
  if (name === 'twitter') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 00-6.9 3.6A11.4 11.4 0 013 4.9a4 4 0 001.2 5.3c-.6 0-1.3-.2-1.8-.5v.1a4 4 0 003.2 3.9c-.6.2-1.2.2-1.8.1a4 4 0 003.7 2.8A8 8 0 012 18.6a11.3 11.3 0 006.1 1.8c7.3 0 11.3-6 11.3-11.3v-.5c.8-.6 1.4-1.2 2-2z" />
      </svg>
    );
  }
  if (name === 'instagram') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9l6 3-6 3V9z" fill="currentColor" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-mark">C</span>
            <span>CINEMAX</span>
          </a>
          <p>Stream the stories that move you — anytime, anywhere, on any screen.</p>
          <div className="footer__socials">
            {SOCIALS.map((name) => (
              <a key={name} href="#home" className="footer__social" aria-label={name}>
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__columns">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="footer__column">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#home">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} CINEMAX. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#home">Terms</a>
          <a href="#home">Privacy</a>
          <a href="#home">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
