import { Variants } from 'framer-motion'

const modalTransition = {
  type: 'spring',
  damping: 50,
  mass: 1,
  stiffness: 500,
}

export const modalVariants: Variants = {
  enter: {
    y: -200,
    opacity: 0,
    speed: 3,
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: modalTransition,
  },
  exit: {
    y: -200,
    opacity: 0,
    speed: 3,
    transition: modalTransition,
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
