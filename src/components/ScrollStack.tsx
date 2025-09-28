'use client'

import { useLayoutEffect, useRef, useCallback } from 'react'
import Lenis from 'lenis'
import styles from './ScrollStack.module.css'

export const ScrollStackItem = ({ children, itemClassName = '' }: { children: React.ReactNode, itemClassName?: string }) => (
  <div className={[styles.card, itemClassName].filter(Boolean).join(' ')}>{children}</div>
)

type Props = {
  children: React.ReactNode
  className?: string
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string | number
  scaleEndPosition?: string | number
  baseScale?: number
  scaleDuration?: number
  rotationAmount?: number
  blurAmount?: number
  useWindowScroll?: boolean
  onStackComplete?: () => void
}

export default function ScrollStack({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5, // eslint-disable-line @typescript-eslint/no-unused-vars
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const stackCompletedRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const cardsRef = useRef<HTMLElement[]>([])
  const lastTransformsRef = useRef<Map<number, { translateY: number; scale: number; rotation: number; blur: number }>>(new Map())

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0
    if (scrollTop > end) return 1
    return (scrollTop - start) / (end - start)
  }, [])

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight
    }
    return Number(value)
  }, [])

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      }
    } else {
      const scroller = scrollerRef.current as HTMLDivElement
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller,
      }
    }
  }, [useWindowScroll])

  const getElementOffset = useCallback((element: HTMLElement) => {
    if (useWindowScroll) {
      const rect = element.getBoundingClientRect()
      return rect.top + window.scrollY
    }
    return element.offsetTop
  }, [useWindowScroll])

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return

    const { scrollTop, containerHeight } = getScrollData()
    const stackPositionPx = parsePercentage(stackPosition, containerHeight)
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight)

    const endElement = (useWindowScroll
      ? document.querySelector(`.${styles.end}`)
      : scrollerRef.current?.querySelector(`.${styles.end}`)) as HTMLElement | null

    const endElementTop = endElement ? getElementOffset(endElement) : 0

    cardsRef.current.forEach((card, i) => {
      if (!card) return

      const cardTop = getElementOffset(card)
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i
      const triggerEnd = cardTop - scaleEndPositionPx
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i
      const pinEnd = endElementTop - containerHeight / 2

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd)
      const targetScale = baseScale + i * itemScale
      const scale = 1 - scaleProgress * (1 - targetScale)

      let translateY = 0
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i
      }

      const newTransform = {
        translateY: Math.round(translateY * 10) / 10, // smoother rounding for less jitter
        scale: Math.round(scale * 1000) / 1000, // higher precision for scale
      }

      const lastTransform = lastTransformsRef.current.get(i)
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.3 || // smaller threshold for smoother updates
        Math.abs(lastTransform.scale - newTransform.scale) > 0.005

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`
        card.style.transform = transform
        card.style.transition = 'transform 0.05s ease-out' // add subtle transition for smoothness
        lastTransformsRef.current.set(i, { ...newTransform, rotation: 0, blur: 0 })
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true
          onStackComplete?.()
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false
        }
      }
    })
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ])

  const handleScroll = useCallback(() => {
    updateCardTransforms()
  }, [updateCardTransforms])

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.8, // slightly longer duration for smoother motion
        easing: (t: number) => t * (2 - t), // smoother easing function
        smoothWheel: true,
        touchMultiplier: 2.0, // increased sensitivity for touch devices
        wheelMultiplier: 1.5, // increased sensitivity for mouse wheel
        lerp: 0.1, // balanced lerp for smooth motion
        syncTouch: true,
        syncTouchLerp: 0.09, // slightly slower sync touch lerp
      })
      lenis.on('scroll', handleScroll)
      const raf = (time: number) => {
        lenis.raf(time)
        animationFrameRef.current = requestAnimationFrame(raf)
      }
      animationFrameRef.current = requestAnimationFrame(raf)
      lenisRef.current = lenis
      return lenis
    } else {
      const scroller = scrollerRef.current
      if (!scroller) return
      const lenis = new Lenis({
        wrapper: scroller as HTMLElement,
        content: (scroller as HTMLElement).querySelector(`.${styles.inner}`) as HTMLElement,
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
      })
      lenis.on('scroll', handleScroll)
      const raf = (time: number) => {
        lenis.raf(time)
        animationFrameRef.current = requestAnimationFrame(raf)
      }
      animationFrameRef.current = requestAnimationFrame(raf)
      lenisRef.current = lenis
      return lenis
    }
  }, [handleScroll, useWindowScroll])

  useLayoutEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const cards = Array.from(
      useWindowScroll
        ? (document.querySelectorAll(`.${styles.card}`) as NodeListOf<HTMLElement>)
        : (scroller.querySelectorAll(`.${styles.card}`) as NodeListOf<HTMLElement>)
    )

    cardsRef.current = cards
    const transformsCache = lastTransformsRef.current

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`
      card.style.willChange = 'transform'
      card.style.transformOrigin = 'top center'
      card.style.backfaceVisibility = 'hidden'
      card.style.transform = 'translateZ(0)'
      card.style.transition = 'none' // remove any existing transitions initially
      ;(card.style as any).webkitTransform = 'translateZ(0)'
      ;(card.style as any).perspective = '1000px'
      ;(card.style as any).webkitPerspective = '1000px'
    })

    setupLenis()
    updateCardTransforms()

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      if (lenisRef.current) lenisRef.current.destroy()
      stackCompletedRef.current = false
      cardsRef.current = []
      transformsCache.clear()
    }
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ])

  return (
    <div
      className={[
        styles.scroller,
        useWindowScroll ? styles.windowScroll : '',
        className,
      ].filter(Boolean).join(' ')}
      ref={scrollerRef}
    >
      <div className={styles.inner}>
        {children}
        <div className={styles.end} />
      </div>
    </div>
  )
}
