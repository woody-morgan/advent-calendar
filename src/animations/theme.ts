import type { Variants } from 'framer-motion'

export const themeVariants: Variants = {
  hidden: { rotate: -90, originX: 0.6, originY: 0.6, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    rotate: 90,
    originX: 0.6,
    originY: 0.6,
    opacity: 0,
    transition: { duration: 0.5 },
  },
}
