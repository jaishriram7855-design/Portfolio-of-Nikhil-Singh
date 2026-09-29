import { useEffect, useRef } from 'react'
import * as THREE from 'three'
// Subtle background: a few floating faceted shapes + connected particle nodes.
export default function HeroScene() {
  const host = useRef(null)
  useEffect(() => {
    const el = host.current
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = innerWidth < 768
    let renderer
    try { renderer = new THREE.WebGLRenderer({ antialias: !mobile, alpha: true, powerPreference: 'low-power' }) } catch { return }
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.25 : 1.75))
    el.appendChild(renderer.domElement)
    const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    cam.position.z = 14
    scene.add(new THREE.AmbientLight(0x8fb4ff, 0.7))
    const key = new THREE.DirectionalLight(0xffffff, 1.1); key.position.set(4, 6, 8); scene.add(key)
    const mat = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.45, metalness: 0.2, flatShading: true, transparent: true, opacity: 0.85 })
    const geos = [new THREE.IcosahedronGeometry(1.3, 0), new THREE.OctahedronGeometry(1.1), new THREE.TorusGeometry(0.9, 0.3, 10, 24), new THREE.BoxGeometry(1.3, 1.3, 1.3)]
    const cols = [0x2b4a80, 0x3a6ea5, 0x5ad1ff, 0x33507f]
    const pos = [[-7, 2.5, -3], [7.5, 3, -4], [6, -3.5, -2], [-6, -3, -5]]
    const meshes = []
    for (let i = 0; i < (mobile ? 2 : 4); i++) {
      const m = new THREE.Mesh(geos[i], mat(cols[i])); m.position.set(...pos[i]); m.userData.p = i; m.userData.y = pos[i][1]; scene.add(m); meshes.push(m)
    }
    const N = mobile ? 26 : 55, pts = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) { pts[i*3] = (Math.random()-.5)*26; pts[i*3+1] = (Math.random()-.5)*14; pts[i*3+2] = (Math.random()-.5)*8 - 3 }
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pts, 3))
    const points = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0x8fd8ff, size: 0.07, transparent: true, opacity: 0.8 }))
    const seg = []
    for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
      const dx = pts[i*3]-pts[j*3], dy = pts[i*3+1]-pts[j*3+1], dz = pts[i*3+2]-pts[j*3+2]
      if (dx*dx+dy*dy+dz*dz < 9) seg.push(pts[i*3],pts[i*3+1],pts[i*3+2],pts[j*3],pts[j*3+1],pts[j*3+2])
    }
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3))
    const lines = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x4a78b8, transparent: true, opacity: 0.22 }))
    const group = new THREE.Group(); group.add(points, lines); scene.add(group)
    const size = () => { const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix(); if (reduce) draw() }
    const mouse = { x: 0, y: 0 }
    const onMove = e => { mouse.x = e.clientX / innerWidth - .5; mouse.y = e.clientY / innerHeight - .5 }
    let raf, visible = true, t = 0
    const draw = () => {
      meshes.forEach(m => { m.rotation.x = t * .12 + m.userData.p; m.rotation.y = t * .16; m.position.y = m.userData.y + Math.sin(t * .6 + m.userData.p) * .35 })
      group.rotation.y = t * .015
      cam.position.x += (mouse.x * 1.6 - cam.position.x) * .04
      cam.position.y += (-mouse.y * 1.0 - cam.position.y) * .04
      cam.lookAt(0, 0, 0); renderer.render(scene, cam)
    }
    const loop = () => { cancelAnimationFrame(raf); if (!visible) return; t += 0.016; draw(); raf = requestAnimationFrame(loop) }
    size(); addEventListener('resize', size)
    if (!mobile && !reduce) addEventListener('pointermove', onMove)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !reduce) loop() })
    io.observe(el)
    return () => {
      cancelAnimationFrame(raf); io.disconnect(); removeEventListener('resize', size); removeEventListener('pointermove', onMove)
      scene.traverse(o => { o.geometry?.dispose(); o.material?.dispose?.() }); renderer.dispose(); renderer.domElement.remove()
    }
  }, [])
  return <div ref={host} className="hero-scene" aria-hidden="true" />
}
