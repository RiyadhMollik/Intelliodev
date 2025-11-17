'use client'

import { useEffect, useState, useRef } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] {
  const { threshold = 0.1, rootMargin = '50px', freezeOnceVisible = false } = options
  
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasBeenVisible = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // If already visible and should freeze, don't create observer
    if (freezeOnceVisible && hasBeenVisible.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        setIsVisible(isIntersecting)
        
        if (isIntersecting) {
          hasBeenVisible.current = true
          if (freezeOnceVisible) {
            observer.disconnect()
          }
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, freezeOnceVisible])

  return [elementRef, isVisible]
}
