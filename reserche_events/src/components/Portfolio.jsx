import React from 'react';

const portfolioItems = [
  { category: 'Weddings', title: 'Elegant Garden Weddings', desc: 'Lush botanical ceremonies with bespoke floral installations and candlelit receptions across Lagos Island venues.', gradient: 'linear-gradient(135deg, #1a3a1a 0%, #2a7a2a 100%)', tag: 'WEDDINGS' },
  { category: 'Corporate', title: 'Executive Conferences', desc: 'World-class corporate events for multinationals, government agencies, and leading Nigerian enterprises.', gradient: 'linear-gradient(135deg, #0d1f0d 0%, #1a4a1a 100%)', tag: 'CORPORATE' },
  { category: 'Birthdays', title: 'Milestone Celebrations', desc: 'From intimate gatherings to grand party experiences — we bring your birthday vision to unforgettable life.', gradient: 'linear-gradient(135deg, #3a1a1a 0%, #7a2a2a 100%)', tag: 'BIRTHDAYS' },
  { category: 'Children', title: 'Magical Kids Parties', desc: 'Whimsical, safe, and joy-filled celebrations designed for the youngest guests with the biggest imaginations.', gradient: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a7a 100%)', tag: "CHILDREN'S" },
  { category: 'Trade Shows', title: 'Brand Activations & Trade Shows', desc: 'Powerful trade show presence and experiential marketing events that make your brand impossible to ignore.', gradient: 'linear-gradient(135deg, #3a2a0d 0%, #7a5a1a 100%)', tag: 'TRADE SHOWS' },
  { category: 'Religious', title: 'Sacred Celebrations', desc: 'Reverential, beautifully organized religious gatherings and community events across Lagos and beyond.', gradient: 'linear-gradient(135deg, #0d1a2a 0%, #1a3a5a 100%)', tag: 'RELIGIOUS' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: 'var(--charcoal)', padding: 'clamp(4rem, 8vw, 7rem) 0', overflow: 'hidden' }}>
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
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: 'var(--white)',
            lineHeight: 1.15,
            marginBottom: '1.2rem',
          }}>
            Events We've <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Crafted</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
            Each event is a canvas. Here's a glimpse into the experiences we've designed and delivered across Lagos and Nigeria.
          </p>
        </div>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1rem',
        }}>
          {portfolioItems.map((item, i) => {
            // Bento layout: alternating sizes
            const spans = [
              { col: '1 / 8', row: '1 / 2' },
              { col: '8 / 13', row: '1 / 2' },
              { col: '1 / 5', row: '2 / 3' },
              { col: '5 / 9', row: '2 / 3' },
              { col: '9 / 13', row: '2 / 3' },
              { col: '1 / 13', row: '3 / 4' },
            ];
            const span = spans[i];

            return (
              <div
                key={item.title}
                className="fade-up"
                style={{
                  gridColumn: span.col,
                  gridRow: span.row,
                  background: item.gradient,
                  borderRadius: '4px',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  minHeight: i === 0 || i === 5 ? '220px' : '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.01)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
              >
                {/* Decorative */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: '150px', height: '150px',
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                }} />

                {/* Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1.2rem', left: '1.5rem',
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.8)',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}>
                  {item.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.2,
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  maxWidth: '400px',
                }}>{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Responsive grid override */}
        <style>{`
          @media (max-width: 768px) {
            .portfolio-grid > div {
              grid-column: 1 / -1 !important;
              grid-row: auto !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
