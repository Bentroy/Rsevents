import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Weddings & Engagements',
  'Corporate Events',
  'Birthday Parties',
  'Children\'s Events',
  'Conference Planning',
  'Team Building',
  'Religious Events',
  'Trade Shows',
];

const scrollTo = (e, href) => {
  e.preventDefault();
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const linkStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.85rem',
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  lineHeight: 2,
  fontWeight: 300,
  transition: 'color 0.2s ease',
  display: 'block',
};

export default function Footer() {
  return (
    <footer style={{ background: '#0d1a0d', padding: 'clamp(3rem, 6vw, 5rem) 0 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          paddingBottom: 'clamp(2rem, 4vw, 3rem)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
              <img src="/logo.webp" alt="Recherché Events" style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9, mixBlendMode: 'screen' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.2rem', fontWeight: 300 }}>
              Crafting Events That Leave Lasting Impressions
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#"
                  style={{
                    width: '36px', height: '36px',
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--green)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                >
                  <Icon size={15} color="rgba(255,255,255,0.7)" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 500 }}>
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={(e) => scrollTo(e, link.href)}
                style={linkStyle}
                onMouseEnter={(e) => { e.target.style.color = 'var(--white)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 500 }}>
              Services
            </h4>
            {serviceLinks.map((s) => (
              <a key={s} href="#services" onClick={(e) => scrollTo(e, '#services')}
                style={linkStyle}
                onMouseEnter={(e) => { e.target.style.color = 'var(--white)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 500 }}>
              Contact
            </h4>
            {[
              { icon: MapPin, text: 'Lagos, Nigeria' },
              { icon: Phone, text: '+234 (0) 800 RECHERCHE' },
              { icon: Mail, text: 'hello@rechercheevents.com' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '0.9rem' }}>
                <Icon size={14} color="var(--green-light)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: '1.5rem 0',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
            © {new Date().getFullYear()} Recherché Events & Gifts Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
            Lagos, Nigeria · <span style={{ color: 'rgba(255,255,255,0.35)' }}>rechercheevents.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
