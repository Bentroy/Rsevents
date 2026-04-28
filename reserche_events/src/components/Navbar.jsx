import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // hero section is approx 100vh
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.5s ease, box-shadow 0.5s ease, padding 0.4s ease',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          padding: scrolled ? '0' : '0',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '70px' : '90px',
          transition: 'height 0.4s ease',
        }}>
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img
              src="/logo.webp"
              alt="Recherché Events Logo"
              style={{
                height: scrolled ? '44px' : '60px',
                width: 'auto',
                transition: 'height 0.4s ease',
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: scrolled ? '1.1rem' : '1.3rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: scrolled ? 'var(--green-dark)' : 'var(--white)',
                transition: 'all 0.4s ease',
              }}>RECHERCHÉ</span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: scrolled ? 'var(--gold)' : 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase',
                fontWeight: 400,
                transition: 'all 0.4s ease',
              }}>EVENTS & GIFTS</span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            alignItems: 'center',
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: scrolled ? 'var(--text)' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = scrolled ? 'var(--green)' : 'var(--white)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = scrolled ? 'var(--text)' : 'rgba(255,255,255,0.9)';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  padding: '10px 24px',
                  background: scrolled ? 'var(--green)' : 'rgba(255,255,255,0.15)',
                  color: 'var(--white)',
                  border: scrolled ? '1.5px solid var(--green)' : '1.5px solid rgba(255,255,255,0.6)',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--green-dark)';
                  e.target.style.borderColor = 'var(--green-dark)';
                  e.target.style.color = 'var(--white)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = scrolled ? 'var(--green)' : 'rgba(255,255,255,0.15)';
                  e.target.style.borderColor = scrolled ? 'var(--green)' : 'rgba(255,255,255,0.6)';
                  e.target.style.color = 'var(--white)';
                }}
              >
                Get a Quote
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: scrolled ? 'var(--text)' : 'var(--white)',
              display: 'none',
              padding: '8px',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          background: 'var(--white)',
          zIndex: 999,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
          padding: '100px 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => scrollTo(e, link.href)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 500,
              color: 'var(--text)',
              textDecoration: 'none',
              padding: '0.5rem 0',
              borderBottom: '1px solid var(--green-muted)',
              letterSpacing: '0.05em',
              transition: 'color 0.3s',
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, '#contact')}
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            padding: '14px',
            background: 'var(--green)',
            color: 'var(--white)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 500,
            textDecoration: 'none',
            borderRadius: '2px',
          }}
        >
          Get a Quote
        </a>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            zIndex: 998, backdropFilter: 'blur(2px)',
          }}
        />
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
