import React from "react";
import { Award, Heart, Star } from "lucide-react";

const stats = [
  { number: "10+", label: "Years of Excellence" },
  { number: "500+", label: "Events Delivered" },
  { number: "28", label: "Unique Services" },
  { number: "100%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Award,
    title: "Unmatched Excellence",
    desc: "Every detail is thoughtfully curated, from the first consultation to the final bow. We hold ourselves to the highest standard of delivery.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    desc: "We believe every event tells a story. We listen deeply, understand your vision, and translate it into an experience uniquely yours.",
  },
  {
    icon: Star,
    title: "Full-Service Expertise",
    desc: "From décor and logistics to gift sourcing and catering coordination, we offer a complete end-to-end event experience under one roof.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--cream)",
        padding: "clamp(4rem, 8vw, 7rem) 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section Header */}
        <div
          className="fade-up"
          style={{
            textAlign: "center",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "1.2rem",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "var(--green)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--green)",
                fontWeight: 500,
              }}
            >
              About Recherché
            </span>
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "var(--green)",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.15,
              marginBottom: "1.2rem",
            }}
          >
            Lagos' Premier
            <br />
            <em style={{ color: "var(--green)", fontStyle: "italic" }}>
              Event Management Studio
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Recherché Events & Gifts Ltd is a full-service events and gifts
            company headquartered in Lagos, Nigeria. We offer top-notch event
            management, décor, gift sourcing, and professional logistics —
            crafting events that leave lasting impressions.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "center",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {/* Left: Text */}
          <div className="fade-left">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              "We don't just plan events — we architect memories."
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "var(--text-muted)",
                marginBottom: "1.2rem",
                fontWeight: 300,
              }}
            >
              From intimate birthday celebrations to large-scale corporate
              conferences, our team brings passion, precision, and creativity to
              every engagement. Based in Lagos, we serve clients across Nigeria
              and internationally, making each event a reflection of your vision
              brought to life.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "var(--text-muted)",
                fontWeight: 300,
              }}
            >
              Our comprehensive service offering spans weddings and engagements,
              corporate events, children's parties, religious ceremonies, trade
              shows, and everything in between — all delivered with signature
              Recherché elegance.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "inline-block",
                  padding: "12px 30px",
                  background: "var(--green)",
                  color: "var(--white)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "2px",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "var(--green-dark)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "var(--green)";
                }}
              >
                Work With Us
              </a>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="fade-right">
            <div
              style={{
                background: "var(--green-dark)",
                borderRadius: "4px",
                padding: "clamp(2rem, 4vw, 3rem)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative pattern */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "200px",
                  height: "200px",
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <img
                src="/logo.webp"
                alt="Recherché Events"
                style={{
                  width: "100px",
                  opacity: 0.9,
                  marginBottom: "1.5rem",
                  filter: "saturate(0) contrast(1.2)",
                  mixBlendMode: "screen",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                }}
              >
                "A full-service Events and Gifts Services Company offering
                top-notch event management, décor, gift sourcing, and
                professional logistics."
              </p>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "var(--gold)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="fade-up stagger-children"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1px",
            background: "rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "4px",
            overflow: "hidden",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="fade-up"
              style={{
                background: "var(--cream)",
                padding: "clamp(1.5rem, 3vw, 2.5rem) 1rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--green)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="fade-up"
              style={{
                padding: "clamp(1.5rem, 3vw, 2.5rem)",
                border: "1px solid rgba(42,122,42,0.15)",
                borderRadius: "4px",
                background: "var(--white)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-medium)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--green-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <Icon size={22} color="var(--green)" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  color: "var(--charcoal)",
                  marginBottom: "0.7rem",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
