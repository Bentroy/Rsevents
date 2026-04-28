import { Filter } from 'lucide-react';
import React from 'react';

const portfolioItems = [
  {
    title: 'Elegant Garden Weddings',
    desc: 'Lush botanical ceremonies with bespoke floral installations and candlelit receptions across Lagos Island.',
    bg: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    tag: 'WEDDINGS',
  },
  {
    title: 'Executive Conferences',
    desc: 'World-class corporate events for multinationals, government agencies, and leading Nigerian enterprises.',
    bg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    tag: 'CORPORATE',
  },
  {
    title: 'Milestone Celebrations',
    desc: 'From intimate gatherings to grand party experiences — we bring your birthday vision to life.',
    bg: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    tag: 'BIRTHDAYS',
  },
  {
    title: 'Magical Kids Parties',
    desc: 'Whimsical, safe, and joy-filled celebrations designed for the youngest guests with the biggest imaginations.',
    bg: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    tag: "CHILDREN'S",
  },
  {
    title: 'Brand Activations & Trade Shows',
    desc: 'Powerful trade show presence and experiential marketing events that make your brand impossible to ignore.',
    bg: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    tag: 'TRADE SHOWS',
  },
  {
    title: 'Sacred Celebrations',
    desc: 'Reverential, beautifully organized religious gatherings and community events across Lagos and beyond.',
    bg: 'https://images.unsplash.com/photo-1634334867692-bc2ad0e164f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNodXJjaCUyMGNlbGVicmF0aW9ufGVufDB8fDB8fHww',
    tag: 'RELIGIOUS',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{
      background: 'var(--charcoal)', padding: 'clamp(4rem, 8vw, 7rem) 0', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.2rem' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
              Our Work
            </span>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400, color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.2rem',
          }}>
            Events We've <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Crafted</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.5)',
            maxWidth: '520px', margin: '0 auto', lineHeight: 1.8, fontWeight: 300,
          }}>
            Each event is a canvas. Here's a glimpse into the experiences we've designed and delivered across Lagos and Nigeria.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1rem',
        }}>
          {portfolioItems.map((item, i) => {
            const spans = [
              { col: '1 / 8' },
              { col: '8 / 13' },
              { col: '1 / 5' },
              { col: '5 / 9' },
              { col: '9 / 13' },
              { col: '1 / 13' },
            ];

            return (
              <div
                key={item.title}
                className="fade-up"
                style={{
                  gridColumn: spans[i].col,
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  minHeight: i === 0 || i === 5 ? '280px' : '220px',
                  cursor: 'pointer',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.015)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
              >
                {/* Background photo */}
                <img
                  src={item.bg}
                  alt={item.title}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'none'; }}
                />

                {/* Dark gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.1) 100%)',
                  zIndex: 1,
                }} />

                {/* Tag */}
                <div style={{
                  position: 'absolute', top: '1.2rem', left: '1.2rem', zIndex: 2,
                  background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
                  padding: '4px 12px', borderRadius: '2px',
                  fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                  letterSpacing: '0.2em', color: 'rgba(255,255,255,0.9)',
                  textTransform: 'uppercase', fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  {item.tag}
                </div>

                {/* Text content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', zIndex: 2 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.45rem)',
                    fontWeight: 400, color: 'var(--white)', marginBottom: '0.4rem', lineHeight: 1.2,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, fontWeight: 300,
                    maxWidth: '420px',
                  }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            #portfolio .fade-up[style*="gridColumn"] {
              grid-column: 1 / -1 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}