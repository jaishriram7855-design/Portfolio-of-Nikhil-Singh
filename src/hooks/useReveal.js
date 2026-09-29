import { useEffect } from 'react'
// Adds .in to .reveal elements once they enter the viewport.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.1 })
    els.forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [])
}
