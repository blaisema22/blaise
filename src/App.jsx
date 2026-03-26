import { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  Settings, Globe, Palette, PenTool, BarChart3, Users,
  Mail, Phone, ExternalLink, MapPin, CheckCircle2,
  Rocket, Trophy, FileText, Cpu, Layout,
  Database, LineChart, Shield, Cloud, ShoppingCart,
  Presentation, PieChart, Moon, Sun, ArrowUp, Menu, X
} from "lucide-react";

// Import photo
import profileImg from "./assets/profile.png";

const NAV_LINKS = ["Home", "About", "Skills", "Experience", "Certifications", "Contact"];

const SKILLS = [
  { name: "Backend Development", level: 90, icon: <Settings size={16} /> },
  { name: "Web Development", level: 85, icon: <Globe size={16} /> },
  { name: "UX/UI Design", level: 75, icon: <Palette size={16} /> },
  { name: "Graphic Design", level: 80, icon: <PenTool size={16} /> },
  { name: "Financial Planning", level: 70, icon: <BarChart3 size={16} /> },
  { name: "Team Work", level: 95, icon: <Users size={16} /> },
];

const ICDL_MODULES = [
  { name: "Computer & Online Essentials", date: "27/01/2026", icon: <Cpu size={14} /> },
  { name: "Documents", date: "28/01/2026", icon: <FileText size={14} /> },
  { name: "Teamwork", date: "29/01/2026", icon: <Users size={14} /> },
  { name: "Spreadsheets", date: "30/01/2026", icon: <BarChart3 size={14} /> },
  { name: "Cyber Security", date: "03/02/2026", icon: <Shield size={14} /> },
  { name: "Artificial Intelligence", date: "04/02/2026", icon: <Cpu size={14} /> },
  { name: "Cloud Computing", date: "04/02/2026", icon: <Cloud size={14} /> },
  { name: "E-Commerce", date: "04/02/2026", icon: <ShoppingCart size={14} /> },
  { name: "Data Analytics", date: "06/02/2026", icon: <PieChart size={14} /> },
  { name: "Presentation (Advanced)", date: "06/02/2026", icon: <Presentation size={14} /> },
];

const EDUCATION = [
  { school: "Kigarama TSS, Ngoma", level: "High School A Level", period: "Jan 2022 – Aug 2024" },
  { school: "G.S. GATENGA, Kigali", level: "High School O Level", period: "Aug 2022" },
  { school: "Zana Christian High School, Kampala", level: "High School O Level", period: "Feb 2018 – Aug 2022" },
  { school: "Mutundwe Parent, Kampala", level: "Primary School", period: "Feb 2012 – Oct 2017" },
];

const PROJECTS = [
  { name: "School Management System", tech: ["PHP", "Node.js", "MySQL"], desc: "Secure, scalable backend for academic administration and record keeping.", icon: <Layout size={20} /> },
  { name: "Car Parking Management", tech: ["PHP", "Node.js", "MySQL"], desc: "Real-time slot tracking and booking system for parking facilities.", icon: <Rocket size={20} /> },
  { name: "SureFix Repair System", tech: ["PHP", "Node.js", "MySQL"], desc: "Appointment scheduling and availability tracking for electronic repair services.", icon: <Settings size={20} /> },
  { name: "Financial Models – Fadmoor", tech: ["Anaplan", "Pigment", "Excel"], desc: "Workforce planning and scenario analysis dashboards for informed decisions.", icon: <LineChart size={20} /> },
];

function useInView(ref, threshold = 0.12) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return vis;
}

function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const vis = useInView(ref);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(36px)", transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

function SkillBar({ name, level, icon, delay }) {
  const ref = useRef();
  const vis = useInView(ref);
  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div className="skill-row">
        <span style={{ fontSize: 14, color: "#cbd5e1", display: "flex", alignItems: "center", gap: 8 }}>{icon} {name}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#3b82f6" }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: vis ? `${level}%` : "0%", transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}s` }} />
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 48);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const go = (id) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email address";
    if (!formData.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      window.location.href = `mailto:manishimweblaise603@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.email}`;
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const W = ({ children, className = "", style = {} }) => (
    <div className={`wrapper ${className}`} style={style}>{children}</div>
  );

  return (
    <div className="app-container">

      {/* ── NAV ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <W className="nav-content">
          <span className="pf nav-logo">M.<span className="text-highlight">Blaise</span></span>
          <div className="nav-links">
            {NAV_LINKS.map(l => (
              <span key={l} onClick={() => go(l)} className={`nav-item ${active === l ? 'active' : ''}`}>{l}</span>
            ))}
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <button className="mobile-btn" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </W>
        {mobileOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(l => (
              <span key={l} onClick={() => go(l)} style={{ cursor: "pointer", fontSize: 13, fontWeight: 600, color: active === l ? "#3b82f6" : "#94a3b8" }}>{l}</span>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <div id="home" className="hero">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <W style={{ paddingTop: 80 }}>
          <div className="hero-grid">
            <div className="anim-fade">
              <div className="status-badge">
                <span className="status-dot anim-pulse" />
                <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>Open to opportunities</span>
              </div>
              <h1 className="pf hero-title">
                Manishimwe<br /><span className="text-highlight">Blaise</span>
              </h1>
              <p className="hero-desc">
                Software Developer · UX/UI Designer · Financial Analyst<br />
                <span style={{ color: "#475569" }}>Building efficient systems that solve real-world problems through technology.</span>
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => go("Contact")}>Hire Me</button>
                <button className="btn btn-outline" onClick={() => go("Experience")}>View Work</button>
              </div>
              <div style={{ marginTop: 48, display: "flex", gap: 32, flexWrap: "wrap" }}>
                {[
                  { r: "Backend", t: "PHP · Node.js", i: <Database size={16} /> },
                  { r: "Design", t: "Figma · CSS", i: <Palette size={16} /> },
                  { r: "Finance", t: "Anaplan · Excel", i: <LineChart size={16} /> }
                ].map(({ r, t, i }) => (
                  <div key={r} style={{ borderLeft: "2px solid #1e293b", paddingLeft: 12 }}>
                    <div className="text-highlight" style={{ fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>{i} {r}</div>
                    <div style={{ color: "#334155", fontSize: 12, marginTop: 2 }}>{t}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-avatar" style={{ animation: "fadeUp .9s ease .2s both" }}>
              <div className="avatar-circle" style={{ overflow: "hidden", border: "4px solid rgba(59,130,246,0.2)" }}>
                <img src={profileImg} alt="Manishimwe Blaise" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { icon: <Mail size={18} />, href: "mailto:manishimweblaise603@gmail.com" },
                  { icon: <ExternalLink size={18} />, href: "https://blaisee.vercel.app" },
                  { icon: <Phone size={18} />, href: "tel:+250785470311" }
                ].map(({ icon, href }) => (
                  <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="social-link">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </W>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="section-padding">
        <W>
          <div className="grid-2">
            <Reveal>
              <p className="section-label">About Me</p>
              <h2 className="pf section-title">Who I Am</h2>
              <div className="divider" />
              <p className="text-slate" style={{ lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>
                I'm a motivated, detail-oriented Software Developer based in{" "}
                <strong style={{ color: "#94a3b8" }}>Kicukiro, Kigali, Rwanda</strong>. I specialize in backend systems, web applications, and graphic design.
              </p>
              <p className="text-slate" style={{ lineHeight: 1.85, fontSize: 15, marginBottom: 32 }}>
                Passionate about building scalable solutions and sharing knowledge with others. I actively give back to my community through <em className="text-highlight">Umuganda</em>.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="mailto:manishimweblaise603@gmail.com" className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}><Mail size={16} /> Email Me</a>
                <a href="https://blaisee.vercel.app" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: "flex", alignItems: "center", gap: 8 }}><ExternalLink size={16} /> Portfolio</a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid-4" style={{ marginBottom: 28 }}>
                {[
                  { l: "Location", v: "Kigali, Rwanda", i: <MapPin size={20} color="#3b82f6" /> },
                  { l: "Phone", v: "+250 785 470 311", i: <Phone size={20} color="#3b82f6" /> },
                  { l: "Languages", v: "English · Swahili · Kinyarwanda", i: <Globe size={20} color="#3b82f6" /> },
                  { l: "Status", v: "Open to work", i: <CheckCircle2 size={20} color="#3b82f6" /> },
                ].map(({ l, v, i }) => (
                  <div key={l} className="card">
                    <div style={{ marginBottom: 8 }}>{i}</div>
                    <div style={{ fontSize: 10, color: "#334155", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".09em" }}>{l}</div>
                    <div style={{ color: "#cbd5e1", fontWeight: 500, marginTop: 4, fontSize: 13 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h3 className="pf" style={{ fontSize: 20, color: "#f8fafc", marginBottom: 16 }}>Education</h3>
              <div style={{ position: "relative", paddingLeft: 22 }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg,#3b82f6,transparent)" }} />
                {EDUCATION.map(({ school, level, period }, i) => (
                  <div key={school} style={{ position: "relative", marginBottom: 16 }}>
                    <div style={{ position: "absolute", left: -27, top: 4, width: 9, height: 9, borderRadius: "50%", background: i === 0 ? "#3b82f6" : "#1e293b", border: "2px solid #3b82f6" }} />
                    <div className="text-highlight" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".05em" }}>{period}</div>
                    <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 14 }}>{level}</div>
                    <div className="text-slate" style={{ fontSize: 12 }}>{school}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </W>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section-padding bg-dark">
        <W>
          <Reveal>
            <p className="section-label">My Expertise</p>
            <h2 className="pf section-title">Skills & Capabilities</h2>
            <div className="divider" />
          </Reveal>
          <div className="grid-2">
            <Reveal delay={0.1}>
              {SKILLS.map((s, i) => <SkillBar key={s.name} {...s} delay={i * .08} />)}
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { t: "Backend Engineering", d: "Architecting secure, scalable APIs and databases with PHP and Node.js.", i: <Database size={22} />, c: "#3b82f6" },
                  { t: "Frontend & UI Design", d: "Building beautiful, responsive interfaces using modern CSS, React, and Figma.", i: <Palette size={22} />, c: "#6366f1" },
                  { t: "Financial Technology", d: "Budgeting, forecasting, and scenario analysis with Anaplan, Pigment & Excel.", i: <LineChart size={22} />, c: "#22c55e" },
                ].map(({ t, d, i, c }) => (
                  <div key={t} className="card" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c}18`, border: `1px solid ${c}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: c }}>{i}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: 4, fontSize: 14 }}>{t}</div>
                      <div className="text-slate" style={{ fontSize: 13, lineHeight: 1.65 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </W>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section-padding">
        <W>
          <Reveal>
            <p className="section-label">Portfolio</p>
            <h2 className="pf section-title">Projects & Experience</h2>
            <div className="divider" />
          </Reveal>
          <div className="grid-projects">
            {PROJECTS.map(({ name, tech, desc, icon }, i) => (
              <Reveal key={name} delay={i * 0.1}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(59,130,246,.1)", border: "1px solid rgba(59,130,246,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6", marginBottom: 14 }}>{icon}</div>
                  <h3 className="pf" style={{ fontSize: 18, color: "#f8fafc", marginBottom: 8 }}>{name}</h3>
                  <p className="text-slate" style={{ fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>{tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </W>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="section-padding bg-dark">
        <W>
          <Reveal>
            <p className="section-label">Credentials</p>
            <h2 className="pf section-title">Certifications</h2>
            <div className="divider" />
          </Reveal>
          <div className="grid-certs">
            <Reveal delay={0.05}>
              <div className="card" style={{ borderTop: "3px solid #3b82f6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(59,130,246,.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6" }}><Trophy size={28} /></div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#f8fafc", fontSize: 15 }}>Digital Competency Passport</div>
                    <div className="text-slate" style={{ fontSize: 12, marginTop: 2 }}>Digital Skills Foundation</div>
                  </div>
                </div>
                <div style={{ background: "rgba(59,130,246,.06)", borderRadius: 8, padding: "8px 12px", marginBottom: 14 }}>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>Issued: </span>
                  <span className="text-highlight" style={{ fontSize: 12, fontWeight: 700 }}>1 June 2024</span>
                  <span className="text-slate" style={{ fontSize: 12 }}> · Serial: 0049106951MB</span>
                </div>
                <p className="text-slate" style={{ fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>
                  Republic of Rwanda Ministry of Education & ICT. Microsoft Global Training Partner · CPD Accredited (50 Credit Hours).
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {["Computing Fundamentals", "Desktop Computing", "Online ICT", "IT Security", "Word Processing", "Presentations", "Databases", "Spreadsheets", "Productivity", "Social Media"].map(m => (
                    <span key={m} className="tag">{m}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card" style={{ borderTop: "3px solid #6366f1" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(99,102,241,.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366f1" }}><FileText size={28} /></div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#f8fafc", fontSize: 15 }}>ICDL Profile Certificate</div>
                    <div className="text-slate" style={{ fontSize: 12, marginTop: 2 }}>ICDL Africa · No. RW10017657</div>
                  </div>
                </div>
                <div style={{ background: "rgba(99,102,241,.06)", borderRadius: 8, padding: "8px 12px", marginBottom: 14 }}>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>Completed: </span>
                  <span style={{ fontSize: 12, color: "#818cf8", fontWeight: 700 }}>06/02/2026</span>
                  <span className="text-slate" style={{ fontSize: 12 }}> · 10 Modules Passed</span>
                </div>
                <div>
                  {ICDL_MODULES.map(({ name, date, icon }) => (
                    <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #1e293b" }}>
                      <span style={{ fontSize: 13, color: "#94a3b8", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: "#22c55e", display: "flex" }}><CheckCircle2 size={14} /></span>
                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>{icon} {name}</span>
                      </span>
                      <span style={{ fontSize: 11, color: "#334155", flexShrink: 0, marginLeft: 8 }}>{date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </W>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-padding">
        <W>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <Reveal>
              <p className="section-label">Get In Touch</p>
              <h2 className="pf section-title">Let's Build Together</h2>
              <div className="divider" style={{ margin: "14px auto 28px" }} />
              <p className="text-slate" style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>
                Whether you need a backend system, a stunning web app, or financial analysis tooling — I'm ready to help you build something great.
              </p>
              <div className="grid-contact" style={{ marginBottom: 40 }}>
                {[
                  { l: "Email", v: "manishimweblaise603@gmail.com", i: <Mail size={22} />, h: "mailto:manishimweblaise603@gmail.com" },
                  { l: "Phone", v: "+250 785 470 311", i: <Phone size={22} />, h: "tel:+250785470311" },
                  { l: "Portfolio", v: "blaisee.vercel.app", i: <ExternalLink size={22} />, h: "https://blaisee.vercel.app" },
                  { l: "Location", v: "Kigali, Rwanda", i: <MapPin size={22} />, h: "#" },
                ].map(({ l, v, i, h }) => (
                  <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card" style={{ textAlign: "center", display: "block" }}>
                    <div style={{ color: "#3b82f6", display: "flex", justifyContent: "center", marginBottom: 8 }}>{i}</div>
                    <div style={{ fontSize: 10, color: "#334155", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".09em", marginBottom: 4 }}>{l}</div>
                    <div className="text-highlight" style={{ fontSize: 11, fontWeight: 600, wordBreak: "break-all" }}>{v}</div>
                  </a>
                ))}
              </div>

              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} className={formErrors.name ? "error" : ""} />
                  {formErrors.name && <span className="error-msg">{formErrors.name}</span>}
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} className={formErrors.email ? "error" : ""} />
                  {formErrors.email && <span className="error-msg">{formErrors.email}</span>}
                </div>
                <textarea name="message" placeholder="How can I help you?" rows="4" value={formData.message} onChange={handleFormChange} className={formErrors.message ? "error" : ""}></textarea>
                {formErrors.message && <span className="error-msg">{formErrors.message}</span>}
                <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <Mail size={18} /> Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </W>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-dark" style={{ borderTop: "1px solid #0f172a", padding: "28px 24px", textAlign: "center" }}>
        <p style={{ color: "#475569", fontSize: 12 }}>
          © 2026 <span className="text-highlight" style={{ fontWeight: 700 }}>Manishimwe Blaise</span> · Crafted with passion in Kigali, Rwanda 🇷🇼
        </p>
      </footer>

      <button className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`} onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
