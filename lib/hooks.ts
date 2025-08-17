import { useEffect, useState } from 'react'

// Custom hook for fade-in animations
export function useFadeIn(delay: number = 0) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return isVisible
}

// Animation classes helper
export const fadeInClasses = (isVisible: boolean) => 
  `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
