'use client'

import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

// Limit active WebGL contexts to avoid browser context exhaustion
let ACTIVE_WEBGL = 0
const MAX_WEBGL = 3

/**
 * ThreeServicesBackground
 * Subtle particle field tailored for the Services section
 * - Slight orbital motion, light parallax
 * - Respects reduced motion
 */
export default function ThreeServicesBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const texRef = useRef<THREE.Texture | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  const reducedMotion = useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // If too many WebGL contexts are active, use a CSS fallback and skip
    if (ACTIVE_WEBGL >= MAX_WEBGL) {
      container.style.backgroundImage = 'radial-gradient(circle at 1px 1px, rgba(60, 60, 80, 0.08) 1px, transparent 0)'
      ;(container.style as any).backgroundSize = '48px 48px'
      return
    }

    const scene = new THREE.Scene()
    const width = container.clientWidth
    const height = container.clientHeight

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 0, 140)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' as any })
      renderer.setSize(Math.max(1, width), Math.max(1, height))
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      container.appendChild(renderer.domElement)
      rendererRef.current = renderer
      ACTIVE_WEBGL++
    } catch (e) {
      console.warn('WebGL init failed, using CSS fallback', e)
      container.style.backgroundImage = 'radial-gradient(circle at 1px 1px, rgba(60, 60, 80, 0.08) 1px, transparent 0)'
      ;(container.style as any).backgroundSize = '48px 48px'
      return
    }

    // Geometry
    const geometry = new THREE.BufferGeometry()
    const count = 600 // reduced for subtlety
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const c1 = new THREE.Color('#2A2A40') // dark blue-gray
    const c2 = new THREE.Color('#3A3A50') // slightly lighter dark gray
    const c3 = new THREE.Color('#404060') // muted dark purple-gray

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Disc-like cloud in Z
      const r = 70 + Math.random() * 90
      const ang = Math.random() * Math.PI * 2
      positions[i3] = Math.cos(ang) * r
      positions[i3 + 1] = (Math.random() - 0.5) * 60
      positions[i3 + 2] = Math.sin(ang) * r

      const mix = Math.random()
      const color = c1.clone().lerp(c2, mix * 0.6).lerp(c3, mix * 0.3)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Round sprite texture
    const makeTex = () => {
      const size = 32 // smaller for subtlety
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')!
      const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2)
      grad.addColorStop(0, 'rgba(100,100,120,0.3)')
      grad.addColorStop(0.6, 'rgba(80,80,100,0.15)')
      grad.addColorStop(1, 'rgba(60,60,80,0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2)
      ctx.fill()
      const t = new THREE.CanvasTexture(canvas)
      t.minFilter = THREE.LinearFilter
      t.magFilter = THREE.LinearFilter
      t.needsUpdate = true
      return t
    }
    const tex = makeTex()
    texRef.current = tex

    const material = new THREE.PointsMaterial({
      size: 1.0, // much smaller particles
      vertexColors: true,
      transparent: true,
      opacity: 0.12, // very subtle
      depthWrite: false,
      blending: THREE.NormalBlending, // normal blending for natural look
      map: tex,
      alphaMap: tex,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const group = new THREE.Group()
    group.add(points)
    scene.add(group)

    // Parallax target
    const target = new THREE.Vector2(0, 0)
    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth || 1
      const h = window.innerHeight || 1
      target.x = (e.clientX / w - 0.5) * 2
      target.y = (e.clientY / h - 0.5) * 2
    }
    window.addEventListener('pointermove', onMove)

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(Math.max(1, w), Math.max(1, h))
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(container)

    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()

      if (!reducedMotion) {
        group.rotation.y = t * 0.02
        group.rotation.x = Math.sin(t * 0.2) * 0.03
      }

      camera.position.x += (target.x * 8 - camera.position.x) * 0.03
      camera.position.y += (-target.y * 8 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('pointermove', onMove)
      ro.disconnect()
      if (rendererRef.current) {
        rendererRef.current.dispose()
        if (rendererRef.current.domElement && rendererRef.current.domElement.parentElement === container) {
          container.removeChild(rendererRef.current.domElement)
        }
        rendererRef.current = null
        ACTIVE_WEBGL = Math.max(0, ACTIVE_WEBGL - 1)
      }
      geometry.dispose()
      material.dispose()
      if (texRef.current) {
        texRef.current.dispose()
        texRef.current = null
      }
    }
  }, [reducedMotion])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}
