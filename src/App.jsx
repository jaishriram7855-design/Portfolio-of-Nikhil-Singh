import { useState, useEffect, lazy, Suspense } from 'react'
import useReveal from './hooks/useReveal.js'
import { profile, nav } from './data/content.js'
import { About, Skills, Experience, Projects, Education, Certifications, Contact } from './sections/Sections.jsx'
const HeroScene = lazy(() => import('./components/HeroScene.jsx'))

const id = n => n.toLowerCase()

export default function App() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useReveal()
  useEffect(() => {
    const s = () => setScrolled(scrollY > 10)
    s(); addEventListener('scroll', s, { passive: true }); return () => removeEventListener('scroll', s)
  }, [])
  useEffect(() => {
    const k = e => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [])
  const go = () => setOpen(false)
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <nav className="clay nav-in" aria-label="Primary">
          <a href="#home" className="brand" onClick={go}>Nikhil<span>Singh</span></a>
          <button className="burger" aria-expanded={open} aria-controls="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}><i /><i /><i /></button>
          <ul id="menu" className={open ? 'open' : ''}>
            {nav.slice(1).map(n => <li key={n}><a href={`#${id(n)}`} onClick={go}>{n}</a></li>)}
            <li><a className="btn primary sm" href="#contact" onClick={go}>Let's connect</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <section id="home" className="hero" aria-labelledby="hero-h">
          <Suspense fallback={null}><HeroScene /></Suspense>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="pill">{profile.tagline}</p>
              <h1 id="hero-h">{profile.name}<span>{profile.role}</span></h1>
              <p className="lead">{profile.intro}</p>
              <ul className="chips">{profile.focus.map(s => <li key={s} className="chip">{s}</li>)}</ul>
              <div className="btn-row">
                <a className="btn primary" href="#projects">View my work</a>
                <a className="btn" href={profile.resume} download="Nikhil_Singh_CV.pdf">Download resume</a>
                <a className="btn" href="#contact">Let's connect</a>
              </div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait clay">
                <img src={profile.photo} width="420" height="420" alt="Portrait of Nikhil Singh in a black shirt" fetchpriority="high" decoding="async" />
              </div>
            </div>
          </div>
        </section>
        <About /><Skills /><Experience /><Projects /><Education /><Certifications /><Contact />
      </main>

      <footer className="footer">
        <div className="wrap foot-in">
          <div><strong>{profile.name}</strong><p className="muted">{profile.role}</p></div>
          <ul className="foot-nav">{nav.slice(1).map(n => <li key={n}><a href={`#${id(n)}`}>{n}</a></li>)}</ul>
          <div className="foot-r">
            <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.socials.map(s => <a key={s.label} className="link" href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
            <p className="muted small">© {new Date().getFullYear()} {profile.name}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
