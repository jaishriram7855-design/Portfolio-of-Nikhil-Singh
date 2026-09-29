import { useState } from 'react'
import Tilt from '../components/Tilt.jsx'
import { profile, aboutCards, skills, experience, projects, education, certifications } from '../data/content.js'

const Head = ({ id, title, sub }) => (
  <header className="sec-head reveal"><h2 id={id}>{title}</h2>{sub && <p>{sub}</p>}</header>
)

export const About = () => (
  <section id="about" className="section" aria-labelledby="about-h">
    <div className="wrap">
      <Head id="about-h" title="About me" sub={profile.summary} />
      <div className="grid g3">
        {aboutCards.map((c, i) => (
          <Tilt key={c.title} className={`card reveal ${i === 0 ? 'span2' : ''}`} style={{ '--d': `${i * 70}ms` }}>
            <span className="icon" aria-hidden="true">{c.icon}</span>
            <h3>{c.title}</h3><p>{c.text}</p>
          </Tilt>
        ))}
      </div>
    </div>
  </section>
)

export const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-h">
    <div className="wrap">
      <Head id="skills-h" title="Skills" sub="Grouped as listed in my CV." />
      <div className="grid g3">
        {skills.map((g, i) => (
          <Tilt key={g.group} className={`card reveal ${g.group === 'Additional Skills' ? 'span2' : ''}`} style={{ '--d': `${i * 60}ms` }} max={3}>
            <div className="card-top"><span className="icon" aria-hidden="true">{g.icon}</span><h3>{g.group}</h3></div>
            <ul className="chips">{g.items.map(s => <li key={s} className="chip">{s}</li>)}</ul>
          </Tilt>
        ))}
      </div>
    </div>
  </section>
)

export const Experience = () => (
  <section id="experience" className="section" aria-labelledby="exp-h">
    <div className="wrap narrow">
      <Head id="exp-h" title="Experience" />
      <ol className="timeline">
        {experience.map(x => (
          <li key={x.title} className="tl-item reveal">
            <span className="dot" aria-hidden="true" />
            <div className="clay card">
              <p className="meta">{x.period}</p>
              <h3>{x.title}</h3>
              <p className="org">{x.company} · {x.place}</p>
              <p className="muted">Via {x.via}</p>
              <ul className="bullets">{x.points.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export const Projects = () => (
  <section id="projects" className="section" aria-labelledby="proj-h">
    <div className="wrap">
      <Head id="proj-h" title="Projects" />
      {projects.map(p => (
        <Tilt key={p.title} className="card project reveal" max={2.5}>
          <div>
            <h3>{p.title}</h3>
            <p className="lead">{p.description}</p>
            <ul className="chips">{p.stack.map(s => <li key={s} className="chip">{s}</li>)}</ul>
            <p className="note">{p.note}</p>
            <div className="btn-row">
              {p.github && <a className="btn" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {p.live && <a className="btn primary" href={p.live} target="_blank" rel="noopener noreferrer">Live demo</a>}
              {!p.github && !p.live && <span className="muted small">GitHub and live links can be added in src/data/content.js.</span>}
            </div>
          </div>
          <div className="inset">
            <h4>Key features</h4>
            <ul className="bullets">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
)

export const Education = () => (
  <section id="education" className="section" aria-labelledby="edu-h">
    <div className="wrap narrow">
      <Head id="edu-h" title="Education" />
      <ol className="timeline">
        {education.map(e => (
          <li key={e.degree} className="tl-item reveal">
            <span className="dot" aria-hidden="true" />
            <div className="clay card">
              <p className="meta">{e.status}</p>
              <h3>{e.degree}</h3>
              <p className="org">{e.school}</p>
              <p className="muted">{e.place}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export const Certifications = () => (
  <section id="certifications" className="section" aria-labelledby="cert-h">
    <div className="wrap narrow">
      <Head id="cert-h" title="Certifications" />
      {certifications.map(c => (
        <Tilt key={c.title} className="card cert reveal">
          <span className="icon big" aria-hidden="true">★</span>
          <div><h3>{c.title}</h3><p className="org">{c.issuer}</p><p className="meta">{c.year}</p></div>
        </Tilt>
      ))}
    </div>
  </section>
)

export const Contact = () => {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const on = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    // No backend is configured: open the visitor's email app with the message pre-filled.
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="wrap">
        <Head id="contact-h" title="Let's connect" sub="Open to internships, full-time roles and freelance work." />
        <div className="contact-grid">
          <div className="stack reveal">
            {[['Email', profile.email, `mailto:${profile.email}`], ['Phone', profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`], ['Location', profile.location]].map(([l, v, h]) => (
              <div key={l} className="clay card"><p className="meta">{l}</p>{h ? <a href={h} className="link">{v}</a> : <p className="org">{v}</p>}</div>
            ))}
          </div>
          <form className="clay card form reveal" onSubmit={submit}>
            <label>Name<input required value={f.name} onChange={on('name')} autoComplete="name" /></label>
            <label>Email<input required type="email" value={f.email} onChange={on('email')} autoComplete="email" /></label>
            <label className="full">Subject<input required value={f.subject} onChange={on('subject')} /></label>
            <label className="full">Message<textarea required rows="5" value={f.message} onChange={on('message')} /></label>
            <div className="full">
              <button className="btn primary" type="submit">Send message</button>
              <p className="muted small" role="status" aria-live="polite">{sent ? 'Your email app should have opened with the message ready to send.' : 'This opens your email app. Nothing is sent from the website itself.'}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
