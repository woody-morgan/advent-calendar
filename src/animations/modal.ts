import { Variants } from 'framer-motion'

export const modalVariants: Variants = {
  enter: {
    y: -1000,
    opacity: 0,
    transition: {
      y: { stiffness: 20, velocity: -100 },
    },
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 1000,
    opacity: 0,
  },
}

export const modalOverlayVariants: Variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
