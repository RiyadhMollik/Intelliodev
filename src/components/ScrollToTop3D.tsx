'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const ScrollToTop3D = () => {
  const containerRef = useRef<HTMLButtonElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
  const arcRef = useRef<THREE.Mesh | null>(null)
  const rafRef = useRef<number | null>(null)
  const [visible, setVisible] = useState(false)

  const reducedMotion = useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 200)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  useEffect(() => {
    const mount = canvasRef.current
    if (!mount) return

    // Use container dimensions for perfect alignment
    const getSize = () => {
      const parent = containerRef.current
      if (!parent) return { w: 56, h: 56 }
      return { w: Math.max(1, parent.clientWidth), h: Math.max(1, parent.clientHeight) }
    }

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 2
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const { w, h } = getSize()
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    // Ensure the canvas visually fills the button exactly
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    mount.appendChild(renderer.domElement)
    sceneRef.current = scene
    cameraRef.current = camera
    rendererRef.current = renderer

    // Track ring (thin, subtle, fully transparent background behind arc)
    const trackGeom = new THREE.RingGeometry(0.72, 0.9, 96)
    const trackMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#4338CA'), transparent: true, opacity: 0.2 })
    const track = new THREE.Mesh(trackGeom, trackMat)
    scene.add(track)

    // Progress arc (dynamic)
    const arcGeom = new THREE.RingGeometry(0.72, 0.9, 96, 1, 0, Math.PI * 2)
    const arcMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#818CF8') })
    const arc = new THREE.Mesh(arcGeom, arcMat)
    arc.rotation.z = -Math.PI / 2
    scene.add(arc)
    arcRef.current = arc

    const clock = new THREE.Clock()
    let lastFrameTime = 0
    const targetFPS = 30
    const frameInterval = 1000 / targetFPS
    
    const animate = (currentTime: number) => {
      rafRef.current = requestAnimationFrame(animate)
      
      // Throttle rendering
      const deltaTime = currentTime - lastFrameTime
      if (deltaTime < frameInterval) return
      lastFrameTime = currentTime - (deltaTime % frameInterval)
      
      const t = clock.getElapsedTime()
      if (!reducedMotion) {
        // Subtle breathing via alpha on the track for life; no planes to avoid squares
        track.material.opacity = 0.18 + Math.abs(Math.sin(t * 2)) * 0.07
      }
      renderer.render(scene, camera)
    }
    rafRef.current = requestAnimationFrame(animate)

    // Keep renderer in sync with button size
    const ro = new ResizeObserver(() => {
      const { w: nw, h: nh } = getSize()
      renderer.setSize(nw, nh)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    })
    ro.observe(containerRef.current!)

    const onResize = () => {
      const { w: nw, h: nh } = getSize()
      renderer.setSize(nw, nh)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      ro.disconnect()
      trackGeom.dispose()
      trackMat.dispose()
      arcGeom.dispose()
      arcMat.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [reducedMotion])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0
      // Update arc geometry thetaLength to reflect progress
      if (arcRef.current) {
        const newGeom = new THREE.RingGeometry(0.72, 0.9, 96, 1, 0, Math.PI * 2 * progress)
        arcRef.current.geometry.dispose()
        arcRef.current.geometry = newGeom
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      ref={containerRef}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 h-14 w-14 z-[9999] rounded-full border border-white/10 bg-transparent backdrop-blur-md 
                 shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-105 
                 ${visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'}`}
    >
      <div ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="size-5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </button>
  )
}

export default ScrollToTop3D
