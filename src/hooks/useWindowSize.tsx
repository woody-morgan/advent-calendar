import { useEffect, useState } from 'react'
import { throttle } from 'lodash-es'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width?: number
    height?: number
  }>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 1000)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
