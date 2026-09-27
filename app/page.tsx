import Image from "next/image";

const projects = [
  {
    number: "02",
    name: "OXALIA",
    type: "AI-powered medical imaging",
    description:
      "A Flutter and FastAPI platform for X-ray workflows, asynchronous AI inference, secure medical records, and PDF reports.",
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
    accent: "oxalia",
  },
  {
    number: "03",
    name: "Tunistade",
    type: "Smart stadium management",
    description:
      "A stadium management system built with web technologies, Java, and SQL.",
    stack: ["PHP", "HTML", "CSS", "Java", "SQL"],
    accent: "tunistade",
  },
  {
    number: "04",
    name: "Grecycle",
    type: "Recycling management desktop app",
    description:
      "A desktop application for recycling management, built with Qt and MySQL.",
    stack: ["C++", "Qt", "MySQL"],
    accent: "grecycle",
  },
];

const autoTraderStack = [
  "Flutter",
  "NestJS",
  "FastAPI",
  "MongoDB",
  "Ollama",
  "OpenRouter",
  "Gemini",
  "Binance API",
];

const tradeSmartWalkthrough =
  "https://www.linkedin.com/feed/update/urn:li:activity:7467925386870513664/";

const experience = [
  {
    period: "JUL — SEP 2026",
    role: "Full-Stack Engineer Intern",
    company: "Get Wireless · AI Healthcare",
    location: "Tunis, Tunisia",
    highlights: [
      "Developed a medical imaging platform with a Flutter app, FastAPI backend, and PostgreSQL database.",
      "Built an asynchronous AI inference pipeline with a modular ModelAdapter architecture.",
      "Implemented JWT access and refresh tokens, token revocation, role-based access, and secure medical records.",
      "Automated testing, linting, security checks, and Docker builds with GitHub Actions.",
    ],
  },
  {
    period: "JUN — AUG 2025",
    role: "Software Development Intern",
    company: "Ads Valley",
    location: "Tunis, Tunisia",
    highlights: [
      "Developed a training management platform with Next.js, NestJS, and PostgreSQL.",
      "Built authenticated REST APIs and worked on database schema design, migrations, and query optimization.",
      "Containerized application services with Docker and configured CI/CD using GitHub Actions.",
      "Collaborated in an Agile Scrum team through planning, stand-ups, and code reviews.",
    ],
  },
];

const disciplines = [
  {
    number: "01",
    name: "Web",
    tools: "React · Next.js · TypeScript",
  },
  {
    number: "02",
    name: "Mobile",
    tools: "Flutter · Dart · Kotlin · Swift",
  },
  {
    number: "03",
    name: "Backend",
    tools: "NestJS · FastAPI · REST APIs",
  },
  {
    number: "04",
    name: "Infrastructure",
    tools: "Docker · Kubernetes · CI/CD",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 12 12 4M5 4h7v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path
        d="M2.5 8h10m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Taieb Bsaies, home">
          taieb<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href="mailto:bsaiestaieb@gmail.com">
          Get in touch <ArrowIcon diagonal />
        </a>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> SOFTWARE ENGINEERING · TUNIS, TN</p>
            <h1 id="hero-title">
              I build web &amp; mobile products<span className="hero-comma">,</span>
              <br className="hero-break" /> from the first screen to the systems behind it<span className="hero-period">.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                I&apos;m Taieb, a software engineering student at ESPRIT. I build
                across the stack—from mobile and web interfaces to APIs,
                databases, and deployment. On AutoTrader, I focused on an
                AI sentiment pipeline and a trading strategy combining social,
                technical, and fundamental signals.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">
                  See what I build <ArrowIcon />
                </a>
                <a className="availability-link" href="#contact">
                  <span className="availability-dot" />
                  Open to a 5–6 month PFE internship
                </a>
              </div>
            </div>
          </div>

          <div className="hero-portrait">
            <Image
              className="portrait-image"
              src="/taieb-bsaies.png"
              alt="Taieb Bsaies"
              fill
              priority
              sizes="(max-width: 720px) 100vw, 40vw"
            />
            <div className="portrait-label">
              <span>TAIEB BSAIES</span>
              <span>SOFTWARE ENGINEERING · TUNIS, TN</span>
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="section-number">01</span> SELECTED WORK</p>
              <h2 id="work-title">The work, <span>in context.</span></h2>
            </div>
            <p className="section-aside">
              Not just what I used.
              <br />
              How the pieces work together.
            </p>
          </div>

          <article className="featured-project" id="featured">
            <div className="featured-copy">
              <div className="featured-kicker">
                <span>01 / 04</span>
                <span>TEAM PROJECT · ESPRIT</span>
              </div>
              <p className="project-type">AI-POWERED AUTOMATED TRADING</p>
              <h3>AutoTrader<span>.</span></h3>
              <p className="featured-description">
                A mobile trading platform that brings live market signals
                together to make and manage trades.
              </p>
              <div className="contribution">
                <span className="micro-label">MY CONTRIBUTION</span>
                <p>
                  I focused on the AI sentiment pipeline and trading
                  strategy—combining sentiment with fundamental and technical
                  signals. I also contributed to other features across the
                  team-built product.
                </p>
              </div>
              <div className="tag-row" aria-label="AutoTrader technologies">
                {autoTraderStack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <a
                className="case-link"
                href={tradeSmartWalkthrough}
                target="_blank"
                rel="noreferrer"
              >
                Watch the team walkthrough <ArrowIcon diagonal />
              </a>
            </div>

            <figure className="system-map">
              <figcaption>
                <span>FROM MARKET SIGNAL TO POSITION</span>
                <span className="map-caption-note">SYSTEM MAP · ILLUSTRATIVE</span>
              </figcaption>
              <ol className="workflow">
                <li>
                  <span className="workflow-step">01</span>
                  <span className="workflow-marker marker-mobile"><span>01</span></span>
                  <span className="workflow-text"><b>Collect live conversations</b><small>13 Telegram channels · 17 Reddit communities</small></span>
                  <span className="workflow-indicator">DATA</span>
                </li>
                <li>
                  <span className="workflow-step">02</span>
                  <span className="workflow-marker marker-api"><span>02</span></span>
                  <span className="workflow-text"><b>Analyze market sentiment</b><small>Multiple LLMs · Ollama · OpenRouter · Gemini</small></span>
                  <span className="workflow-indicator">AI</span>
                </li>
                <li>
                  <span className="workflow-step">03</span>
                  <span className="workflow-marker marker-ai"><span>03</span></span>
                  <span className="workflow-text"><b>Combine signals into a strategy</b><small>Sentiment · fundamental · technical analysis</small></span>
                  <span className="workflow-indicator">SIGNAL</span>
                </li>
                <li>
                  <span className="workflow-step">04</span>
                  <span className="workflow-marker marker-result"><span>04</span></span>
                  <span className="workflow-text"><b>Manage risk &amp; execute</b><small>10 protection layers · dynamic stop-loss / take-profit</small></span>
                  <span className="workflow-indicator">TRADE</span>
                </li>
              </ol>
              <div className="map-footer">
                <span>BINANCE API</span>
                <span>PAPER TRADING · LIVE TRADING</span>
              </div>
            </figure>
          </article>

          <div className="other-work-heading">
            <h3>More things I&apos;ve built</h3>
            <span>02 — 04</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.accent}`} key={project.number}>
                <div className="project-card-top">
                  <span className="project-count">{project.number} / 04</span>
                  <span className="project-decoration" aria-hidden="true">
                    {project.accent === "oxalia" ? "✳" : project.accent === "tunistade" ? "◎" : "↻"}
                  </span>
                </div>
                <p className="project-type">{project.type}</p>
                <h4>{project.name}<span>.</span></h4>
                <p className="project-description">{project.description}</p>
                <div className="tag-row" aria-label={`${project.name} technologies`}>
                  {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-wrap about-inner">
            <div className="about-copy">
              <p className="eyebrow"><span className="section-number">02</span> A LITTLE ABOUT ME</p>
              <h2 id="about-title">I like seeing<br />the <span>whole picture.</span></h2>
              <p>
                I&apos;m studying software engineering at ESPRIT in Tunis. The
                problems I enjoy most are the ones that ask me to think beyond
                a single screen or service—how the experience, API, data, and
                deployment all fit together.
              </p>
              <p>
                I&apos;ve brought that approach to healthcare, training, and
                mobile projects. I like collaborating, learning unfamiliar
                tools, and making the details work as well as the big idea.
              </p>
              <a className="inline-link" href="mailto:bsaiestaieb@gmail.com">
                Have something interesting to build? <ArrowIcon diagonal />
              </a>
            </div>
            <div className="discipline-list" aria-label="Areas of focus">
              <span className="micro-label">HOW I WORK ACROSS THE STACK</span>
              {disciplines.map((discipline) => (
                <div className="discipline-row" key={discipline.number}>
                  <span className="discipline-number">{discipline.number}</span>
                  <h3>{discipline.name}</h3>
                  <span className="discipline-tools">{discipline.tools}</span>
                </div>
              ))}
              <div className="discipline-note">
                <span className="note-spark">✳</span>
                <span>Curious by default.<br />Still learning, always building.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="section-number">03</span> EXPERIENCE</p>
              <h2 id="experience-title">Learning by <span>doing.</span></h2>
            </div>
            <p className="section-aside">
              A couple of teams, real products,
              <br />
              and a lot learned along the way.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((role, index) => (
              <article className="experience-item" key={role.company}>
                <div className="experience-period">
                  <span>{role.period}</span>
                  <span className="experience-index">0{index + 1}</span>
                </div>
                <div className="experience-main">
                  <div className="experience-title">
                    <div>
                      <h3>{role.role}</h3>
                      <p>{role.company} <span>·</span> {role.location}</p>
                    </div>
                    <ArrowIcon diagonal />
                  </div>
                  <ul>
                    {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="toolkit-section section-wrap" id="toolkit" aria-labelledby="toolkit-title">
          <div className="toolkit-heading">
            <div>
              <p className="eyebrow"><span className="section-number">04</span> THE TOOLKIT</p>
              <h2 id="toolkit-title">Tools for the <span>job.</span></h2>
            </div>
            <p className="section-aside">Different problems call for different tools.<br />These are the ones I work with.</p>
          </div>
          <div className="toolkit-groups">
            <div><span>WEB</span><p>React · Next.js · TypeScript · JavaScript</p></div>
            <div><span>MOBILE</span><p>Flutter · Dart · Kotlin · Swift</p></div>
            <div><span>BACKEND</span><p>NestJS · FastAPI · Node.js · Python</p></div>
            <div><span>DATA</span><p>PostgreSQL · MongoDB · MySQL</p></div>
            <div><span>DELIVERY</span><p>Docker · Kubernetes · GitHub Actions · Jenkins · GitLab CI/CD</p></div>
            <div><span>ALSO</span><p>Java · C++ · Git</p></div>
          </div>
          <div className="education-row">
            <span className="micro-label">EDUCATION</span>
            <div><h3>Engineering Degree in Software Engineering</h3><p>ESPRIT · Tunis, Tunisia</p></div>
            <span className="education-years">2022 — JUNE 2027 <small>EXPECTED</small></span>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <p className="eyebrow"><span className="availability-dot" /> AVAILABLE FOR A 5–6 MONTH PFE INTERNSHIP</p>
              <h2 id="contact-title">Good work starts<br />with a <span>conversation.</span></h2>
              <p>Looking for a full-stack intern, have a project in mind, or just want to talk engineering? I&apos;d love to hear from you.</p>
              <a className="button button-light" href="mailto:bsaiestaieb@gmail.com">
                Email me <ArrowIcon diagonal />
              </a>
            </div>
            <a className="contact-email" href="mailto:bsaiestaieb@gmail.com">
              bsaiestaieb@gmail.com <ArrowIcon diagonal />
            </a>
            <span className="contact-decoration" aria-hidden="true">TB<span>.</span></span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home" aria-label="Back to top">
          taieb<span>.</span>
        </a>
        <span className="footer-note">Built with curiosity in Tunis, Tunisia.</span>
        <div className="footer-links">
          <a href="https://github.com/taiebbsaies" target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
          <a href="https://linkedin.com/in/taieb-bsaies-821534248" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
          <a href="mailto:bsaiestaieb@gmail.com">Email <ArrowIcon diagonal /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} TAIEB BSAIES</span>
      </footer>
    </>
  );
}
