import { useState } from "react";
import SpiderVerseCanvas from "./components/canvas/SpiderVerseCanvas";
import {
  achievements,
  downloads,
  education,
  hero,
  hobbies,
  inspirationList,
  interestingFacts,
  navLinks,
  rulesList,
  siteConfig,
  skills,
  social,
  ventures,
} from "./data/content";

export default function App() {
  const [onTwos, setOnTwos] = useState(true);
  const [openEdu, setOpenEdu] = useState(1); // Open Excelsior CXC by default
  const [rulesTab, setRulesTab] = useState("rules");

  return (
    <>
      <SpiderVerseCanvas onTwos={onTwos} />

      <div className="p-shell">
        {/* ── STICKY EDITORIAL NAVBAR ──────────────────────────────────── */}
        <header className="p-header">
          <div className="p-container p-nav-inner">
            <a href="#home" className="p-brand">
              <img src={siteConfig.agentsarLogo} alt="Agentsar Emblem" />
              <span className="p-brand-text">
                <strong>{siteConfig.logo}</strong>
                <span>SHAKIR RUSSELL · AGENTSAR</span>
              </span>
            </a>

            <nav className="p-nav-links" aria-label="Primary">
              {navLinks.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </nav>

            <div className="p-nav-actions">
              <button
                type="button"
                className="p-cadence"
                aria-pressed={onTwos}
                onClick={() => setOnTwos((v) => !v)}
                title="Toggle Spider-Verse On-Twos (12fps) vs Smooth (60fps)"
              >
                {onTwos ? "ON 2s (12fps)" : "SMOOTH (60fps)"}
              </button>
              <a href={social.agentsar} target="_blank" rel="noopener noreferrer" className="p-btn-ink p-btn-sm">
                Agentsar ↗
              </a>
            </div>
          </div>
        </header>

        <main id="home">
          {/* ── HERO SECTION ──────────────────────────────────────────── */}
          <section className="p-hero">
            <div className="p-container p-hero-grid">
              <div>
                <div className="p-eyebrow">{hero.eyebrow}</div>
                <h1 className="p-hero-title">
                  <span className="cmyk">{hero.centerpiece}</span>
                </h1>
                <p className="p-hero-name">
                  {siteConfig.name} — {hero.tagline}
                </p>
                <p className="p-hero-lead">{hero.subtitle}</p>

                <div className="p-cta-row">
                  <a href="#projects" className="p-btn-ink">
                    Explore Ventures &amp; Work &darr;
                  </a>
                  <a href={social.github} target="_blank" rel="noopener noreferrer" className="p-btn-paper">
                    GitHub (@wearecyberrock) &rarr;
                  </a>
                  <a href={downloads.resume.link} target="_blank" rel="noopener noreferrer" className="p-btn-paper">
                    Resume PDF
                  </a>
                </div>

                <div className="p-stat-strip">
                  <div>
                    <div className="k">AI &amp; Art Company</div>
                    <div className="v">Agentsar</div>
                  </div>
                  <div>
                    <div className="k">Hardware Lab</div>
                    <div className="v">Cyberrock</div>
                  </div>
                  <div>
                    <div className="k">Fashion &amp; Watches</div>
                    <div className="v">DAPA</div>
                  </div>
                </div>
              </div>

              <div className="p-portrait-wrap">
                <figure className="p-portrait-card" style={{ margin: 0 }}>
                  <div className="p-portrait-media">
                    <img src={siteConfig.portrait} alt="Shakir Russell placeholder portrait" />
                    <div className="p-watermark-band" aria-label="Placeholder watermark">
                      PLACEHOLDER
                    </div>
                  </div>
                  <figcaption className="p-portrait-caption">
                    <strong>FIG. 01 // SHAKIR RUSSELL</strong>
                    <span>PHOTO PLACEHOLDER</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <div className="p-halftone-bar" aria-hidden="true" />

          {/* ── RULES & INSPIRATION TABS ─────────────────────────────── */}
          <section id="rules" className="p-section p-section-alt">
            <div className="p-container">
              <div className="p-sec-head">
                <div>
                  <div className="p-kicker">CODE OF CONDUCT // RULES &amp; INSPIRATION</div>
                  <h2 className="p-sec-title">50% AI. 50% You. Stay in command.</h2>
                </div>
                <p className="p-sec-desc">
                  Technology should multiply your thinking, never replace it. Here are the core
                  rules and inspirations behind everything I build.
                </p>
              </div>

              <div className="p-tabs" role="tablist" aria-label="Rules and Inspiration">
                <button
                  type="button"
                  role="tab"
                  aria-selected={rulesTab === "rules"}
                  className={`p-tab-btn ${rulesTab === "rules" ? "active" : ""}`}
                  onClick={() => setRulesTab("rules")}
                >
                  01 · The Rules (50/50 Code)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={rulesTab === "inspiration"}
                  className={`p-tab-btn ${rulesTab === "inspiration" ? "active" : ""}`}
                  onClick={() => setRulesTab("inspiration")}
                >
                  02 · Inspiration
                </button>
              </div>

              <div className="p-rules-grid">
                {(rulesTab === "rules" ? rulesList : inspirationList).map((item) => (
                  <article key={item.title} className="p-comic-card">
                    <div className="p-kicker">{item.num}</div>
                    <h3>{item.title}</h3>
                    <p style={{ margin: "0 0 16px", fontSize: "0.9rem", color: "var(--ink-muted)" }}>
                      {item.body}
                    </p>
                    <div className="p-pill-list">
                      {item.tags.map((t) => (
                        <span key={t} className="p-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── VENTURES, SOFTWARE & CREATIVE WORK ───────────────────── */}
          <section id="projects" className="p-section p-section-dark">
            <div className="p-container">
              <div className="p-sec-head">
                <div>
                  <div className="p-kicker">01 // COMPANIES, SOFTWARE &amp; ART</div>
                  <h2 className="p-sec-title">What I build &amp; lead.</h2>
                </div>
                <p className="p-sec-desc">
                  From sovereign local-first AI software and hardware labs to fashion, animation,
                  comics, and original music — bridging engineering with Caribbean creative culture.
                </p>
              </div>

              <div className="p-projects-grid">
                {ventures.map((v) => (
                  <article key={v.id} className="p-project-card" data-accent={v.accent}>
                    {v.image && (
                      <div className={`p-project-media ${v.containImage ? "halftone-bg" : ""}`}>
                        <img
                          src={v.image}
                          alt={v.title}
                          className={v.containImage ? "contain" : "cover"}
                        />
                      </div>
                    )}
                    <div className="p-project-body">
                      <div>
                        <div className="p-project-kicker">{v.kicker}</div>
                        <h3>{v.title}</h3>
                        <p>{v.description}</p>
                      </div>
                      <div>
                        <div className="p-tags" style={{ marginBottom: 14 }}>
                          {v.tags.map((t) => (
                            <span key={t} className="p-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="p-project-foot">
                          <span style={{ color: "#9aa2b2" }}>{v.id.toUpperCase()}</span>
                          <a href={v.link} target="_blank" rel="noopener noreferrer">
                            {v.cta} &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── ABOUT, SKILLS, EDUCATION, ACHIEVEMENTS & FACTS ────────── */}
          <section id="about" className="p-section">
            <div className="p-container">
              <div className="p-sec-head">
                <div>
                  <div className="p-kicker">02 // PROFILE, DISCIPLINES &amp; CREDENTIALS</div>
                  <h2 className="p-sec-title">Engineering rigor meets artistic instinct.</h2>
                </div>
                <p className="p-sec-desc">
                  Computer Science student at UWI, Honor Roll Excelsior alumnus, white-hat security
                  researcher, and founder building open-source AI &amp; art ecosystems for the
                  Caribbean.
                </p>
              </div>

              <div className="p-about-grid">
                {/* Skills Card */}
                <div className="p-comic-card">
                  <div className="p-kicker">SKILLS &amp; STACK</div>
                  <h3>Technical &amp; Creative Capabilities</h3>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", marginBottom: 8, color: "var(--ink-muted)" }}>
                      ENGINEERING, AI &amp; SECURITY
                    </div>
                    <div className="p-pill-list">
                      {skills.technical.map((s) => (
                        <span key={s} className="p-pill cyan">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", marginBottom: 8, color: "var(--ink-muted)" }}>
                      ART, MOTION &amp; AUDIO
                    </div>
                    <div className="p-pill-list">
                      {skills.creative.map((s) => (
                        <span key={s} className="p-pill">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education Accordion */}
                <div className="p-comic-card">
                  <div className="p-kicker">EDUCATION</div>
                  <h3>Academic Foundation</h3>
                  {education.map((ed, idx) => {
                    const isOpen = openEdu === idx;
                    return (
                      <div key={ed.institution} className="p-edu-item">
                        <button
                          type="button"
                          className="p-edu-btn"
                          onClick={() => setOpenEdu(isOpen ? -1 : idx)}
                        >
                          <div>
                            <strong>{ed.institution}</strong>
                            <span>{ed.description || ed.detail}</span>
                          </div>
                          {ed.items.length > 0 && (
                            <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                              {isOpen ? "−" : "+"}
                            </span>
                          )}
                        </button>
                        {isOpen && ed.items.length > 0 && (
                          <div className="p-grade-grid">
                            {ed.items.map((it) => (
                              <div key={it.subject} className="p-grade-row">
                                <span>{it.subject}</span>
                                <strong>Grade {it.grade}</strong>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Achievements */}
                <div className="p-comic-card">
                  <div className="p-kicker">HONORS &amp; LEADERSHIP</div>
                  <h3>Achievements</h3>
                  <ul className="p-list">
                    {achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>

                {/* Hobbies & Interesting Facts */}
                <div className="p-comic-card">
                  <div className="p-kicker">OFF THE CLOCK</div>
                  <h3>Interests &amp; Quick Facts</h3>
                  <div className="p-pill-list" style={{ marginBottom: 18 }}>
                    {hobbies.map((h) => (
                      <span key={h.name} className="p-pill">
                        {h.icon} {h.name}
                      </span>
                    ))}
                  </div>
                  <div className="p-facts-grid">
                    {Object.entries(interestingFacts).map(([k, v]) => (
                      <div key={k} className="p-fact-box">
                        <div className="fk">{k}</div>
                        <div className="fv">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── RESUME, CV & DOWNLOADS ───────────────────────────────── */}
          <section id="downloads" className="p-section p-section-alt">
            <div className="p-container">
              <div className="p-sec-head">
                <div>
                  <div className="p-kicker">03 // OFFICIAL DOCUMENTS</div>
                  <h2 className="p-sec-title">{downloads.heading}</h2>
                </div>
                <p className="p-sec-desc">{downloads.description}</p>
              </div>

              <div className="p-dl-grid">
                <article className="p-dl-card">
                  <div>
                    <div className="p-kicker">PDF DOCUMENT</div>
                    <h3 style={{ fontFamily: "var(--font-display)", margin: "6px 0" }}>Resume</h3>
                    <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--ink-muted)" }}>
                      Concise engineering, creative, and leadership overview.
                    </p>
                  </div>
                  <a href={downloads.resume.link} target="_blank" rel="noopener noreferrer" className="p-btn-ink p-btn-sm">
                    {downloads.resume.text} &darr;
                  </a>
                </article>

                <article className="p-dl-card">
                  <div>
                    <div className="p-kicker">PDF DOCUMENT</div>
                    <h3 style={{ fontFamily: "var(--font-display)", margin: "6px 0" }}>Curriculum Vitae</h3>
                    <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--ink-muted)" }}>
                      Full academic credentials, certifications, and project portfolio.
                    </p>
                  </div>
                  <a href={downloads.cv.link} target="_blank" rel="noopener noreferrer" className="p-btn-paper p-btn-sm">
                    {downloads.cv.text} &darr;
                  </a>
                </article>

                <article className="p-dl-card">
                  <div>
                    <div className="p-kicker">PDF DOCUMENT</div>
                    <h3 style={{ fontFamily: "var(--font-display)", margin: "6px 0" }}>Cover Letter</h3>
                    <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--ink-muted)" }}>
                      Formal introduction letter for partnerships and engineering roles.
                    </p>
                  </div>
                  <a href={downloads.coverLetter.link} target="_blank" rel="noopener noreferrer" className="p-btn-paper p-btn-sm">
                    {downloads.coverLetter.text} &darr;
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* ── CONTACT & LINKS ──────────────────────────────────────── */}
          <section id="contact" className="p-section">
            <div className="p-container">
              <div className="p-contact-box">
                <div>
                  <div className="p-kicker" style={{ color: "var(--cyan-bright)" }}>
                    04 // CONNECT DIRECTLY
                  </div>
                  <h2 className="p-sec-title" style={{ color: "var(--paper-card)", marginBottom: 14 }}>
                    Let's build something unforgettable.
                  </h2>
                  <p style={{ color: "var(--ink-light-muted)", margin: "0 0 22px", fontSize: "0.95rem" }}>
                    Whether it's custom AI software, Cyberrock hardware setup, cybersecurity
                    research, animation, or creative direction — reach out directly.
                  </p>
                  <a href={`mailto:${social.email}`} className="p-btn-paper">
                    Email {social.email} &rarr;
                  </a>
                </div>

                <div className="p-social-stack">
                  <a className="p-social-row" href={social.github} target="_blank" rel="noopener noreferrer">
                    <span>GITHUB</span>
                    <strong>github.com/wearecyberrock &rarr;</strong>
                  </a>
                  <a className="p-social-row" href={social.agentsar} target="_blank" rel="noopener noreferrer">
                    <span>AGENTSAR</span>
                    <strong>AI Software &amp; Art Studio &rarr;</strong>
                  </a>
                  <a className="p-social-row" href={social.cyberrock} target="_blank" rel="noopener noreferrer">
                    <span>CYBERROCK</span>
                    <strong>Hardware &amp; Tech Lab &rarr;</strong>
                  </a>
                  <a className="p-social-row" href={social.instagram} target="_blank" rel="noopener noreferrer">
                    <span>INSTAGRAM</span>
                    <strong>@itsshakyuhzmi &rarr;</strong>
                  </a>
                  <a className="p-social-row" href={social.tiktok} target="_blank" rel="noopener noreferrer">
                    <span>TIKTOK</span>
                    <strong>@agentshak.exe &rarr;</strong>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="p-footer">
          <div className="p-container p-footer-inner">
            <span>&copy; 2026 Shakir Russell (itsSHAK) · RAH Holdings / Agentsar / Cyberrock.</span>
            <span>Life is Art. · Built for Cloudflare Workers</span>
          </div>
        </footer>
      </div>
    </>
  );
}