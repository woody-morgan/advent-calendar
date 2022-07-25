import { placeholderSrc } from '@src/utils/imageUtil'
import cx from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

export type ImageWrapperProps = {
  src: string
  width: number
  height: number
  alt?: string
  layout?: 'fill' | 'responsive'
  objectFit?: 'contain' | 'cover'
  className?: string
}

const Image: FC<ImageWrapperProps> = ({
  src,
  width,
  height,
  alt,
  layout = 'responsive',
  objectFit = 'cover',
  className,
}) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver>()
  const [isLoad, setIsLoad] = useState(false)

  function onIntersection(entries: IntersectionObserverEntry[], io: IntersectionObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target)
        setIsLoad(true)
      }
    })
  }

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(onIntersection)
    }
    imgRef.current && observerRef.current?.observe(imgRef.current)
  }, [])

  let imgClass

  if (layout === 'fill') {
    imgClass = 'w-full h-full'
  } else if (layout === 'responsive') {
    imgClass = 'max-w-full h-auto'
  }

  return (
    <img
      className={cx(
        'bg-none outline-none',
        imgClass,
        objectFit === 'contain' ? 'object-contain' : 'object-cover',
        className
      )}
      ref={imgRef}
      width={width}
      height={height}
      src={isLoad ? src : placeholderSrc(width, height)}
      data-src={src}
      alt={alt}
    />
  )
}
export default Image
