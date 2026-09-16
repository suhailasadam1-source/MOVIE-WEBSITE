import { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = ['Home', 'Movies', 'TV Shows', 'Sports'];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" aria-label="CINEMAX home">
          <span className="navbar__logo-mark">C</span>
          <span className="navbar__logo-text">CINEMAX</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#home"
              className={`navbar__link ${activeLink === link ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link);
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="navbar__icon-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button className="navbar__icon-btn" aria-label="Notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M13.7 21a2 2 0 01-3.4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button className="navbar__avatar" aria-label="Account menu" onClick={() => setMenuOpen((v) => !v)}>
            <img src="https://picsum.photos/seed/cinemax-user/64/64" alt="" />
            <svg
              className={`navbar__chevron ${menuOpen ? 'is-open' : ''}`}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={`navbar__menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`navbar__backdrop ${menuOpen ? 'is-visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav className={`navbar__mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#home"
            className={`navbar__mobile-link ${activeLink === link ? 'is-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(link);
              setMenuOpen(false);
            }}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
