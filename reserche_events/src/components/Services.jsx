import React, { useState } from 'react';
import { Heart, Briefcase, Users, Music, GraduationCap, Church, Calendar, Printer, Utensils, ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    id: 'weddings',
    icon: Heart,
    title: 'Weddings & Celebrations',
    subtitle: 'Love stories told beautifully',
    color: '#c9a84c',
    bgColor: '#fffdf4',
    description: 'Your wedding day deserves nothing less than perfection. We handle every detail — from venue selection to floral arrangements — so you can focus on the moments that matter.',
    services: ['Wedding & Engagement Planning', 'Bridal Show Management', 'Anniversary Party Planning', 'Quinceanera'],
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Corporate & Conference',
    subtitle: 'Where professionalism meets impact',
    color: '#2a7a2a',
    bgColor: '#f2f9f2',
    description: 'From high-profile conferences to product launches, we bring strategic thinking and flawless execution to every corporate event, ensuring your brand shines.',
    services: ['Conference Planning & Coordination', 'Corporate Events', 'Event Marketing', 'Trade Show Planning', 'Marketing Event Coordination'],
  },
  {
    id: 'social',
    icon: Users,
    title: 'Social & Private Events',
    subtitle: 'Memories crafted for a lifetime',
    color: '#7a2a7a',
    bgColor: '#fdf4fd',
    description: 'Every personal milestone deserves a celebration worth remembering. We customize each detail to reflect your personality and create moments that resonate.',
    services: ['Birthday Party Planning', 'Baby Shower Planning', 'Retirement Party Planning', 'Theme Party Planning'],
  },
  {
    id: 'children',
    icon: Music,
    title: 'Children\'s Events',
    subtitle: 'Where imagination comes alive',
    color: '#c94c4c',
    bgColor: '#fdf4f4',
    description: 'We specialize in crafting magical, age-appropriate celebrations that spark joy and create cherished childhood memories for your little ones and their guests.',
    services: ['Children\'s Party Planning', 'Bar & Bat Mitzvah Planning', 'School Event Planning', 'School Event Coordination'],
  },
  {
    id: 'community',
    icon: Church,
    title: 'Religious & Community',
    subtitle: 'Events that unite and inspire',
    color: '#4c6ac9',
    bgColor: '#f4f6fd',
    description: 'We understand the reverence and care required for religious and community events. Our team handles all logistics with sensitivity and respect.',
    services: ['Religious Event Planning', 'Religious Event Coordination', 'Community Event Planning', 'Community Event Coordination'],
  },
  {
    id: 'teambuilding',
    icon: Calendar,
    title: 'Team Building',
    subtitle: 'Stronger teams, better results',
    color: '#4caa7a',
    bgColor: '#f4fdf8',
    description: 'Engage your workforce with purposeful team-building activities that foster collaboration, boost morale, and create a cohesive company culture.',
    services: ['Team Building Event Planning', 'Team Building Event Coordination', 'Event Integration Activity Planning', 'Event Integration Coordination'],
  },
  {
    id: 'catering',
    icon: Utensils,
    title: 'Catering',
    subtitle: 'Flavors that complete the experience',
    color: '#aa6e4c',
    bgColor: '#fdf8f4',
    description: 'Food is at the heart of every great gathering. Our catering coordination ensures your guests enjoy exceptional cuisine that complements the occasion.',
    services: ['Full-Service Catering', 'Catering Coordination', 'Menu Planning', 'Dietary Accommodations'],
  },
  {
    id: 'printing',
    icon: Printer,
    title: 'Printing & Stationery',
    subtitle: 'First impressions that last',
    color: '#6a6a6a',
    bgColor: '#f6f6f6',
    description: 'From bespoke invitations to full event stationery suites, our print services ensure your event communications are as elegant as the event itself.',
    services: ['Invitation Printing', 'Event Stationery', 'Program Printing', 'Custom Branded Materials'],
  },
];

function ServiceCard({ cat }) {
  const [hovered, setHovered] = useState(false);
  const Icon = cat.icon;

  return (
    <div
      id={`service-${cat.id}`}
      className="fade-up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? cat.color : 'var(--white)',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.18)' : '0 2px 16px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        cursor: 'pointer',
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
        {/* Icon */}
        <div style={{
          width: '52px', height: '52px',
          background: hovered ? 'rgba(255,255,255,0.2)' : cat.bgColor,
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.2rem',
          transition: 'background 0.4s ease',
        }}>
          <Icon size={22} color={hovered ? '#fff' : cat.color} />
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 500,
          color: hovered ? 'var(--white)' : 'var(--charcoal)',
          marginBottom: '0.35rem',
          lineHeight: 1.2,
          transition: 'color 0.4s ease',
        }}>{cat.title}</h3>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: hovered ? 'rgba(255,255,255,0.7)' : cat.color,
          marginBottom: '1rem',
          fontWeight: 400,
          transition: 'color 0.4s ease',
        }}>{cat.subtitle}</p>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.88rem',
          color: hovered ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)',
          lineHeight: 1.75,
          marginBottom: '1.2rem',
          fontWeight: 300,
          transition: 'color 0.4s ease',
        }}>{cat.description}</p>

        {/* Service list */}
        <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
          {cat.services.map((s) => (
            <li key={s} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: hovered ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)',
              padding: '4px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.4s ease',
            }}>
              <div style={{
                width: '4px', height: '4px', borderRadius: '50%',
                background: hovered ? 'rgba(255,255,255,0.6)' : cat.color,
                flexShrink: 0,
                transition: 'background 0.4s ease',
              }} />
              {s}
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 500,
            color: hovered ? 'var(--white)' : cat.color,
            textDecoration: 'none',
            borderBottom: `1px solid ${hovered ? 'rgba(255,255,255,0.5)' : cat.color}`,
            paddingBottom: '2px',
            transition: 'all 0.3s ease',
          }}
        >
          Enquire Now
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--cream)', padding: 'clamp(4rem, 8vw, 7rem) 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.2rem' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--green)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: 500 }}>
              What We Do
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
            Our Services
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
            We offer 28 distinct services across every event category — bringing the same dedication and artistry to every occasion, regardless of size or scope.
          </p>
        </div>

        {/* Service Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
        }}>
          {serviceCategories.map((cat) => (
            <ServiceCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
