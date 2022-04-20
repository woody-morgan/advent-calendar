import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { framerPageTrans } from '@src/animations/page-trans'

const PageTransition: FC = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div {...framerPageTrans}>{children}</motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
