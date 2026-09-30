import React from "react";

const Icon = ({ name, size = 20 }) => {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round", strokeLinejoin: "round"
  };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    monitor: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 18v3"/></>,
    chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 14 3-3 3 2 5-6"/><path d="M15 7h3v3"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.05.05-1.7 1.7-.05-.05a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.1 1.66V20h-2.4v-.07a1.8 1.8 0 0 0-1.1-1.66 1.8 1.8 0 0 0-1.98.36l-.05.05-1.7-1.7.05-.05A1.8 1.8 0 0 0 8.2 15a1.8 1.8 0 0 0-1.66-1.1H6v-2.4h.54A1.8 1.8 0 0 0 8.2 10a1.8 1.8 0 0 0-.36-1.98l-.05-.05 1.7-1.7.05.05a1.8 1.8 0 0 0 1.98.36A1.8 1.8 0 0 0 12.62 5V4h2.4v1a1.8 1.8 0 0 0 1.1 1.66 1.8 1.8 0 0 0 1.98-.36l.05-.05 1.7 1.7-.05.05A1.8 1.8 0 0 0 19.4 10a1.8 1.8 0 0 0 1.66 1.1H22v2.4h-.94A1.8 1.8 0 0 0 19.4 15Z"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    palette: <><path d="M12 3a9 9 0 0 0 0 18h1.2a1.8 1.8 0 0 0 0-3.6H12a2 2 0 0 1 0-4h2.5A6.5 6.5 0 0 0 12 3Z"/><circle cx="7.5" cy="10" r=".7"/><circle cx="9" cy="6.8" r=".7"/><circle cx="14" cy="6.8" r=".7"/><circle cx="17" cy="9.2" r=".7"/></>,
    spark: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.2 8.5-8 10-4.8-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    user: <><circle cx="12" cy="8" r="3"/><path d="M5 21a7 7 0 0 1 14 0"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r=".8" fill="currentColor" stroke="none"/></>,
    linkedin: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10v6"/><path d="M8 7.5v.1"/><path d="M12 16v-6"/><path d="M12 13a3 3 0 0 1 6 0v3"/></>,
    youtube: <><path d="M21 12s0-5-1-6-4-1-8-1-7 0-8 1-1 6-1 6 0 5 1 6 4 1 8 1 7 0 8-1 1-6 1-6Z"/><path d="m10 9 5 3-5 3V9Z"/></>
  };
  return <svg {...common}>{paths[name] || paths.spark}</svg>;
};

const services = [
  { n:"01", icon:"monitor", title:"Website Development", text:"Custom, modern and responsive websites for any industry or purpose." },
  { n:"02", icon:"chart", title:"SEO & Digital Growth", text:"Get found, attract more customers and grow your online presence." },
  { n:"03", icon:"gear", title:"Website Maintenance & Support", text:"Keep your website secure, fast and always running smoothly." },
  { n:"04", icon:"code", title:"Software Solutions", text:"Custom web applications, dashboards, portals and business tools." },
  { n:"05", icon:"palette", title:"Digital Design & Branding", text:"Logos, graphics, brand identity and visuals that make your business stand out." }
];

const templates = [
  { title:"Business Pro", tag:"Corporate • Consulting • Business", image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85" },
  { title:"Portfolio Pro", tag:"Personal • Creative • Freelancer", image:"https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85" },
  { title:"Restaurant Pro", tag:"Restaurant • Cafe • Food", image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85" },
  { title:"School Pro", tag:"School • College • Education", image:"https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85" }
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="NEDOPULSE home">
      <span className="logo-mark"><span>N</span></span>
      <span><strong>NEDOPULSE</strong><small>CONSULTING GROUP</small></span>
    </a>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div id="top" className="site">
      <header className="nav">
        <div className="container nav-inner">
          <Logo />
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Open menu"><Icon name="menu"/></button>
          <nav className={open ? "nav-links open" : "nav-links"}>
            <a className="active" href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#templates">Templates</a>
            <a href="#process">About</a>
            <a href="#contact">Pricing</a>
            <a href="#templates">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Theme"><Icon name="sun" size={18}/></button>
            <a className="btn btn-primary btn-small" href="#contact">Start a Project <Icon name="arrow" size={16}/></a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-orb orb-one"></div>
          <div className="hero-orb orb-two"></div>
          <div className="hero-grid"></div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">TECHNOLOGY. STRATEGY. GROWTH.</div>
              <h1>Your Vision.<br/><span>Our Technology.</span></h1>
              <p>NEDOPULSE Consulting Group is a technology consulting and software solutions company that helps businesses, organizations and individuals build, improve and manage their digital presence.</p>
              <div className="hero-buttons">
                <a className="btn btn-primary" href="#contact">Get Started <Icon name="arrow" size={18}/></a>
                <a className="btn btn-outline" href="#services">Explore Services</a>
              </div>
              <div className="hero-trust">
                <span><Icon name="spark" size={16}/> Modern Solutions</span>
                <span><Icon name="shield" size={16}/> Expert Support</span>
                <span><Icon name="check" size={16}/> Results Driven</span>
              </div>
            </div>
            <div className="hero-visual">
              <img src="/hero-devices.jpg" alt="NEDOPULSE website displayed on a laptop and phone" />
              <div className="hero-badge"><b>ϟ</b><span><strong>Modern Digital Solutions</strong><small>Built for growth</small></span></div>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-head">
              <div className="section-intro">
                <div className="eyebrow">OUR SERVICES</div>
                <h2>Everything You Need<br/><span>in One Place.</span></h2>
                <p>From stunning websites to powerful software, we provide end-to-end digital solutions to help your business grow.</p>
                <a className="btn btn-primary" href="#contact">View All Services <Icon name="arrow" size={17}/></a>
              </div>
              <div className="service-grid">
                {services.map((s) => (
                  <article className="service-card" key={s.n}>
                    <div className="service-icon"><Icon name={s.icon}/></div>
                    <small>{s.n}</small>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <a href="#contact">Learn More <Icon name="arrow" size={14}/></a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="templates" className="section templates-section">
          <div className="container templates-wrap">
            <div className="template-copy">
              <div className="eyebrow">WEBSITE TEMPLATES</div>
              <h2>Professional Designs.<br/><span>Ready to Launch.</span></h2>
              <p>Choose from our collection of modern website templates. Fully customizable, mobile-friendly and designed for real businesses.</p>
              <a className="btn btn-primary" href="#contact">Browse Templates <Icon name="arrow" size={17}/></a>
            </div>
            <div className="template-showcase">
              <div className="filters">
                {["All","Business","Personal","Schools","Restaurants","E-commerce","Professional"].map((x,i)=><button className={i===0?"selected":""} key={x}>{x}</button>)}
              </div>
              <div className="template-grid">
                {templates.map((t) => (
                  <article className="template-card" key={t.title}>
                    <img src={t.image} alt="" />
                    <div className="template-info">
                      <h3>{t.title}</h3><p>{t.tag}</p>
                      <a href="#contact">View Demo <Icon name="arrow" size={13}/></a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="container process-wrap">
            <div className="process-copy">
              <div className="eyebrow">HOW IT WORKS</div>
              <h2>From Idea to Impact<br/><span>in 5 Simple Steps.</span></h2>
              <p>We make the process simple, transparent and stress-free. Get your digital solution up and running, faster.</p>
              <a className="btn btn-primary" href="#contact">Start Your Project <Icon name="arrow" size={17}/></a>
            </div>
            <div className="steps">
              {[
                ["01","Tell Us Your Needs","Fill out a quick form or book a free consultation. We'll understand your goals."],
                ["02","We Build & Design","Our team (and AI tools) create your solution — fast and efficiently."],
                ["03","You Review & Improve","Request changes, add your personal touch and get it just right."],
                ["04","We Launch","Your project goes live with full support and setup guidance."],
                ["05","Ongoing Support","We're here after launch with maintenance, updates and more."]
              ].map(([n,t,d])=>(
                <div className="step" key={n}><div className="step-number">{n}</div><div><h3>{t}</h3><p>{d}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section partner-section">
          <div className="container partner-wrap">
            <div className="partner-copy">
              <div className="eyebrow">WHY NEDOPULSE</div>
              <h2>More Than Just a Service.<br/><span>A Partnership.</span></h2>
              <p>We're not just a service provider — we're your long-term tech partner. Focused on your success, with solutions that scale as you grow.</p>
              <a className="btn btn-primary" href="#contact">Get Started Today <Icon name="arrow" size={17}/></a>
            </div>
            <div className="benefits">
              {[
                ["spark","AI-Powered Efficiency","We use AI-assisted workflows to deliver faster, smarter and more consistent results."],
                ["shield","Affordable & Transparent","No hidden fees. No surprises. Just clear pricing and real value."],
                ["user","Ongoing Support","We're here even after launch with reliable maintenance and expert support."],
                ["pin","Client Focused","Your goals, your vision. We listen, we plan, we deliver."]
              ].map(([i,t,d])=>(
                <div className="benefit" key={t}><div className="benefit-icon"><Icon name={i}/></div><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="cta">
          <div className="cta-glow"></div>
          <div className="container cta-inner">
            <div>
              <h2>Ready to Build Your Digital Future?</h2>
              <p>Let's bring your vision to life with powerful, modern solutions.</p>
            </div>
            <div className="cta-buttons">
              <a className="btn btn-primary" href="mailto:hello@nedopulseconsulting.co.za">Start a Project <Icon name="arrow" size={18}/></a>
              <a className="btn btn-outline" href="mailto:hello@nedopulseconsulting.co.za">Get a Free Quote</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <Logo />
          <p>Let's build your digital future — together.</p>
          <div className="footer-links">
            <a href="#top">Home</a><a href="#services">Services</a><a href="#templates">Templates</a><a href="#process">About</a><a href="#contact">Pricing</a><a href="#templates">Blog</a><a href="#contact">Contact</a>
          </div>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={17}/></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={17}/></a>
            <a href="#" aria-label="YouTube"><Icon name="youtube" size={17}/></a>
          </div>
        </div>
        <div className="container copyright">© 2026 NEDOPULSE Consulting Group. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;