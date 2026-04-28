import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const words = titleRef.current?.querySelectorAll('.word');
    if (words) {
      words.forEach((word, i) => {
        setTimeout(() => {
          word.style.opacity = '1';
          word.style.transform = 'translateY(0)';
        }, 400 + i * 120);
      });
    }
  }, []);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      position: 'relative', height: '100vh', minHeight: '600px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: 'var(--charcoal)',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(42,122,42,0.35) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0d1f0d 0%, #1a2d1a 40%, #0f1a0f 100%)
        `,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        backgroundImage: `
          linear-gradient(rgba(42,122,42,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(42,122,42,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      <div style={{
        position: 'absolute', top: '80px', left: '60px', right: '60px', bottom: '60px',
        border: '1px dashed rgba(255,255,255,0.06)', zIndex: 3, pointerEvents: 'none',
      }} />

      {/* Watermark logo */}
      <div style={{
        position: 'absolute', right: '-5%', bottom: '-5%', width: '50vw',
        maxWidth: '650px', zIndex: 4, pointerEvents: 'none', userSelect: 'none',
        opacity: 0.06,
      }}>
        <img src="/logo.webp" alt="" aria-hidden="true"
          style={{ width: '100%', filter: 'brightness(10) saturate(0)', mixBlendMode: 'screen' }} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 5, textAlign: 'center',
        padding: '90px 2rem 0', maxWidth: '860px',
      }}>
        {/* Eyebrow */}
        <div style={{
          opacity: 0, animation: 'fadeInUp 0.8s ease 0.2s forwards',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '16px', marginBottom: '1.8rem',
        }}>
          <div style={{ width: '36px', height: '1px', background: 'var(--gold)', opacity: 0.7 }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.28em',
            textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 400,
          }}>Lagos, Nigeria · Full-Service Event Management</span>
          <div style={{ width: '36px', height: '1px', background: 'var(--gold)', opacity: 0.7 }} />
        </div>

        {/* Title */}
        <div ref={titleRef} style={{ marginBottom: '1.5rem' }}>
          {['Crafting Events That', 'Leave Lasting', 'Impressions'].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <div className="word" style={{
                opacity: 0, transform: 'translateY(50px)',
                transition: 'opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)',
                fontWeight: i === 1 ? 300 : 400,
                lineHeight: 1.12,
                color: i === 1 ? 'var(--gold-light)' : 'var(--white)',
                fontStyle: i === 1 ? 'italic' : 'normal',
              }}>
                {line}
              </div>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p style={{
          opacity: 0, animation: 'fadeInUp 0.8s ease 1.2s forwards',
          fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
          color: 'rgba(255,255,255,0.6)', lineHeight: 1.85,
          maxWidth: '520px', margin: '0 auto 2.5rem', fontWeight: 300,
        }}>
          Recherché Events is a full-service event management company delivering exceptional
          experiences — from intimate celebrations to grand corporate gatherings across Lagos and beyond.
        </p>

        {/* CTAs */}
        <div style={{
          opacity: 0, animation: 'fadeInUp 0.8s ease 1.5s forwards',
          display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              padding: '13px 34px', background: 'var(--green)', color: 'var(--white)',
              fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none',
              borderRadius: '2px', border: '1.5px solid var(--green)', transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.target.style.background = 'var(--green-light)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'var(--green)'; }}>
            Our Services
          </a>
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              padding: '13px 34px', background: 'transparent', color: 'var(--white)',
              fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none',
              borderRadius: '2px', border: '1.5px solid rgba(255,255,255,0.35)', transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.8)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.35)'; e.target.style.background = 'transparent'; }}>
            Plan Your Event
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollDown} style={{
        position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 5, background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        opacity: 0, animation: 'fadeInUp 0.8s ease 2s forwards',
      }}>
        <span style={{
          fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)',
        }}>Scroll</span>
        <ChevronDown size={18} color="rgba(255,255,255,0.4)"
          style={{ animation: 'float 2s ease-in-out infinite' }} />
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}