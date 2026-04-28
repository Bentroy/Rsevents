import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Bride, Lagos Island',
    event: 'Wedding & Reception',
    text: 'Recherché Events made my wedding day absolutely magical. Every detail was meticulously handled — from the breathtaking floral arrangements to the seamless coordination of our 300-guest reception. I didn\'t have to worry about a single thing. They brought my vision to life beyond my wildest dreams.',
    stars: 5,
  },
  {
    name: 'Emmanuel Adeyemi',
    role: 'CEO, TechBridge Nigeria',
    event: 'Annual Corporate Conference',
    text: 'Our annual conference needed to impress both local and international delegates. Recherché delivered an event that was world-class in every sense — the AV setup, the catering, the flow of proceedings, all flawlessly executed. We\'ve been clients for three years and they never disappoint.',
    stars: 5,
  },
  {
    name: 'Funke Adeola',
    role: 'Mother of the Birthday Girl',
    event: 'Children\'s Birthday Party',
    text: 'I cannot put into words how incredible my daughter\'s 7th birthday was. Recherché transformed our backyard into a fairytale. Every child was delighted, every parent was impressed, and I was completely stress-free throughout. They thought of every last detail.',
    stars: 5,
  },
  {
    name: 'Pastor Biodun Osei',
    role: 'Senior Pastor, Grace Community Church',
    event: 'Annual Church Convention',
    text: 'Organizing our church convention used to be months of headache. With Recherché Events, the entire process was smooth, professional, and respectful of our values. They understood the reverence required and delivered an event that truly honored God and our congregation.',
    stars: 5,
  },
  {
    name: 'Chidinma Nwosu',
    role: 'HR Director, Lagos',
    event: 'Company Team Building Event',
    text: 'Recherché organized our team-building weekend retreat and it transformed our company culture. The activities were perfectly designed to build real connections among our staff. We saw measurable improvements in collaboration for months afterward. Truly remarkable.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => advance(1), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const advance = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" style={{ background: 'var(--green-dark)', padding: 'clamp(4rem, 8vw, 7rem) 0', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.2rem' }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
              Client Stories
            </span>
            <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: 'var(--white)',
            lineHeight: 1.15,
          }}>
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="fade-in" style={{
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
          borderRadius: '4px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          border: '1px solid rgba(255,255,255,0.1)',
          transition: 'opacity 0.3s ease',
          opacity: animating ? 0 : 1,
          textAlign: 'center',
        }}>
          <Quote size={36} color="var(--gold)" style={{ marginBottom: '1.5rem', opacity: 0.7 }} />

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.75,
            fontStyle: 'italic',
            marginBottom: '2rem',
          }}>
            "{t.text}"
          </p>

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.2rem' }}>
            {[...Array(t.stars)].map((_, i) => (
              <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
            ))}
          </div>

          <div style={{ width: '40px', height: '1px', background: 'var(--gold)', margin: '0 auto 1.2rem' }} />

          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.2rem' }}>
              {t.name}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
              {t.role}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8 }}>
              {t.event}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '2rem' }}>
          <button
            onClick={() => advance(-1)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'var(--white)',
              width: '44px', height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => advance(1)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'var(--white)',
              width: '44px', height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
