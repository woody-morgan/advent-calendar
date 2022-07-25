import { Variants } from 'framer-motion'

export const pageVarsCustom: Variants = {
  hidden: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      y: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    }
  },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      y: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    }
  },
}

export const pageVars: Variants = {
  hidden: {
    x: 1000,
    y: 0,
    opacity: 0,
    transition: { duration: 0.5 },
  },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: {
    x: -1000,
    y: 0,
    opacity: 0,
    transition: { duration: 0.5 },
  },
}
