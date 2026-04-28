import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  background: 'var(--cream)',
  border: '1.5px solid rgba(0,0,0,0.1)',
  borderRadius: '3px',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  color: 'var(--text)',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  boxSizing: 'border-box',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', event: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ background: 'var(--cream)', padding: 'clamp(4rem, 8vw, 7rem) 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.2rem' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--green)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: 500 }}>
              Get In Touch
            </span>
            <div style={{ width: '32px', height: '1px', background: 'var(--green)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: 'var(--charcoal)',
            lineHeight: 1.15,
            marginBottom: '1.2rem',
          }}>
            Let's Plan Your <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>Next Event</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
            Ready to create something unforgettable? Reach out and let's start crafting your perfect event experience.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'start',
        }}>
          {/* Left: Info */}
          <div className="fade-left">
            <div style={{
              background: 'var(--green-dark)',
              borderRadius: '4px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, right: 0, width: '200px', height: '200px',
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }} />

              <img src="/logo.webp" alt="Recherché Events" style={{ width: '80px', opacity: 0.9, marginBottom: '1.5rem', filter: 'brightness(0) invert(1)', mixBlendMode: 'screen' }} />

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>
                Recherché Events & Gifts Ltd
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: '2rem', textTransform: 'uppercase' }}>
                Lagos, Nigeria
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria' },
                  { icon: Phone, label: 'Phone', value: '+234 (0) 800 RECHERCHE' },
                  { icon: Mail, label: 'Email', value: 'hello@rechercheevents.com' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color="var(--gold)" />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '2px', fontWeight: 400 }}>{label}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '12px' }}>
                {[Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      width: '40px', height: '40px',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                  >
                    <Icon size={16} color="var(--white)" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-right">
            {submitted ? (
              <div style={{
                background: 'var(--white)',
                borderRadius: '4px',
                padding: 'clamp(2rem, 4vw, 3rem)',
                border: '1px solid rgba(42,122,42,0.2)',
                textAlign: 'center',
              }}>
                <CheckCircle size={48} color="var(--green)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '0.8rem' }}>
                  Thank You!
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                  We've received your enquiry and will be in touch within 24 hours. We look forward to crafting something extraordinary with you.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--white)',
                  borderRadius: '4px',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--green)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Email Address *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--green)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                      placeholder="your@email.com" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--green)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                      placeholder="+234..." />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Event Type *</label>
                    <select name="event" required value={form.event} onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--green)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                    >
                      <option value="">Select event type</option>
                      <option>Wedding & Engagement</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Baby Shower</option>
                      <option>Children's Party</option>
                      <option>Anniversary</option>
                      <option>Conference</option>
                      <option>Trade Show</option>
                      <option>Team Building</option>
                      <option>Religious Event</option>
                      <option>Community Event</option>
                      <option>Retirement Party</option>
                      <option>School Event</option>
                      <option>Bar / Bat Mitzvah</option>
                      <option>Quinceanera</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Tell Us About Your Event</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--green)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                    placeholder="Date, number of guests, budget, special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'var(--green)',
                    color: 'var(--white)',
                    border: 'none',
                    borderRadius: '3px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--green-dark)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--green)'; }}
                >
                  <Send size={15} />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
