'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

/**
 * ThreeBackground
 * Lightweight 3D animated particle field with mouse parallax.
 * - Respects prefers-reduced-motion
 * - Handles resize / DPR
 * - Offloads to requestAnimationFrame
 * - Pauses rendering when not visible
 */
export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const rafRef = useRef<number | null>(null)
  const texRef = useRef<THREE.Texture | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const reducedMotion = useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  // Intersection Observer to pause rendering when not visible
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: '100px' }
    )
    
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 0, 120)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

  // Particles geometry
    const geometry = new THREE.BufferGeometry()
    const count = 400 // Reduced from 800 for better performance
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorA = new THREE.Color('#2A2A40') // dark blue-gray
    const colorB = new THREE.Color('#3A3A50') // slightly lighter dark gray

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Random sphere distribution
      const r = 60 + Math.random() * 60
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = r * Math.cos(phi)

      const lerp = Math.random()
      const c = colorA.clone().lerp(colorB, lerp)
      colors[i3] = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Create a subtle dark particle texture
    const createCircleTexture = () => {
      const size = 32
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')!
      const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
      gradient.addColorStop(0, 'rgba(100,100,120,0.4)')
      gradient.addColorStop(0.6, 'rgba(80,80,100,0.2)')
      gradient.addColorStop(1, 'rgba(60,60,80,0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
      ctx.fill()
      const tex = new THREE.CanvasTexture(canvas)
      tex.minFilter = THREE.LinearFilter
      tex.magFilter = THREE.LinearFilter
      tex.wrapS = THREE.ClampToEdgeWrapping
      tex.wrapT = THREE.ClampToEdgeWrapping
      tex.needsUpdate = true
      return tex
    }

  const circleTex = createCircleTexture()
  texRef.current = circleTex

    const material = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.15, // much more subtle
      depthWrite: false,
      blending: THREE.NormalBlending,
      map: circleTex,
      alphaMap: circleTex,
      alphaTest: 0.01,
      sizeAttenuation: true
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Subtle rotating group
    const group = new THREE.Group()
    group.add(particles)
    scene.add(group)

    // Mouse parallax with throttling
    const target = new THREE.Vector2(0, 0)
    let mouseMoveTimeout: NodeJS.Timeout | null = null
    const onPointerMove = (e: PointerEvent) => {
      if (mouseMoveTimeout) return // Throttle mouse events
      mouseMoveTimeout = setTimeout(() => {
        mouseMoveTimeout = null
      }, 16) // ~60fps throttle
      
      const w = window.innerWidth || 1
      const h = window.innerHeight || 1
      const x = e.clientX / w
      const y = e.clientY / h
      target.x = (x - 0.5) * 2
      target.y = (y - 0.5) * 2
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    // Resize
    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const resizeObs = new ResizeObserver(onResize)
    resizeObs.observe(container)

    // Animate
    const clock = new THREE.Clock()
    let lastFrameTime = 0
    const targetFPS = 30 // Limit to 30fps for better performance
    const frameInterval = 1000 / targetFPS
    
    const animate = (currentTime: number) => {
      rafRef.current = requestAnimationFrame(animate)
      
      // Skip rendering if not visible
      if (!isVisible) return
      
      // Throttle rendering to target FPS
      const deltaTime = currentTime - lastFrameTime
      if (deltaTime < frameInterval) return
      lastFrameTime = currentTime - (deltaTime % frameInterval)
      
      const t = clock.getElapsedTime()
      // Slow rotation
      if (!reducedMotion) {
        group.rotation.y = t * 0.03
        group.rotation.x = Math.sin(t * 0.1) * 0.05
      }
      // Ease camera slightly towards mouse target
      camera.position.x += (target.x * 10 - camera.position.x) * 0.03
      camera.position.y += (-target.y * 10 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('pointermove', onPointerMove)
      resizeObs.disconnect()
      if (renderer) {
        renderer.dispose()
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      if (texRef.current) {
        texRef.current.dispose()
        texRef.current = null
      }
    }
  }, [reducedMotion, isVisible])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* WebGL canvas will be injected here */}
    </div>
  )
}
