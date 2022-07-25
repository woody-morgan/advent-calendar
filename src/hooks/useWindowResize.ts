import { throttle } from 'lodash-es'
import { useEffect } from 'react'

export default function useWindowResize(callback: () => void, delay: number) {
  useEffect(() => {
    const handleResize = throttle(() => {
      callback()
    }, delay)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}
