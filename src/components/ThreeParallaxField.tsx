'use client'

import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

type Props = {
  count?: number
  size?: number
  opacity?: number
  speed?: number
  colors?: string[]
  pointerScale?: number
  scrollScale?: number
}

export default function ThreeParallaxField({
  count = 800,
  size = 2.2,
  opacity = 0.65,
  speed = 0.02,
  colors = ['#22d3ee', '#6366f1', '#a855f7'],
  pointerScale = 8,
  scrollScale = 40,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const texRef = useRef<THREE.Texture | null>(null)

  const reducedMotion = useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const width = container.clientWidth
    const height = container.clientHeight

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 0, 140)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    container.appendChild(renderer.domElement)

    // geometry
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colorsArr = new Float32Array(count * 3)

    const palette = colors.map((c) => new THREE.Color(c))

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const r = 70 + Math.random() * 100
      const ang = Math.random() * Math.PI * 2
      positions[i3] = Math.cos(ang) * r
      positions[i3 + 1] = (Math.random() - 0.5) * 70
      positions[i3 + 2] = Math.sin(ang) * r

      const c = palette[Math.floor(Math.random() * palette.length)]
      colorsArr[i3] = c.r
      colorsArr[i3 + 1] = c.g
      colorsArr[i3 + 2] = c.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colorsArr, 3))

    // round sprite
    const makeTex = () => {
      const s = 64
      const canvas = document.createElement('canvas')
      canvas.width = s
      canvas.height = s
      const ctx = canvas.getContext('2d')!
      const grad = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2)
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(0.6, 'rgba(255,255,255,0.9)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(s/2, s/2, s/2, 0, Math.PI * 2)
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
      size,
      vertexColors: true,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: tex,
      alphaMap: tex,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    const group = new THREE.Group()
    group.add(points)
    scene.add(group)

    // parallax (pointer + scroll)
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
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(container)

    // track scroll position for local parallax
    const anchor = { top: 0, height: height }
    const updateAnchor = () => {
      const rect = container.getBoundingClientRect()
      anchor.top = rect.top
      anchor.height = rect.height
    }
    const onScroll = () => updateAnchor()
    window.addEventListener('scroll', onScroll, { passive: true })
    updateAnchor()

    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      if (!reducedMotion) {
        group.rotation.y = t * speed
        group.rotation.x = Math.sin(t * speed * 6) * 0.03
      }

      // pointer parallax
      camera.position.x += (target.x * pointerScale - camera.position.x) * 0.03
      camera.position.y += (-target.y * pointerScale - camera.position.y) * 0.03

      // scroll parallax relative to viewport
      const vh = window.innerHeight || 1
      const centerDelta = (anchor.top + anchor.height / 2) - vh / 2
      const scrollOffset = (centerDelta / vh) * scrollScale
      group.position.y = scrollOffset

      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      renderer.dispose()
      container.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      if (texRef.current) {
        texRef.current.dispose()
        texRef.current = null
      }
    }
  }, [count, size, opacity, speed, colors, pointerScale, scrollScale, reducedMotion])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}
