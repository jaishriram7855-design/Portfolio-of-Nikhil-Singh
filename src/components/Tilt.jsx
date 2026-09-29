import { useRef } from 'react'
// Subtle 3D tilt on hover-capable devices only; off for touch and reduced motion.
export default function Tilt({ as: T = 'div', className = '', children, max = 5, ...rest }) {
  const ref = useRef(null)
  const ok = () => matchMedia('(hover:hover) and (prefers-reduced-motion: no-preference)').matches
  const move = e => {
    if (!ok()) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-4px)`
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return <T ref={ref} className={`clay tilt ${className}`} onMouseMove={move} onMouseLeave={leave} {...rest}>{children}</T>
}
