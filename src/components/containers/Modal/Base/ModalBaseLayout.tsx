import cx from 'classnames'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

const ModalBaseLayout: FC<{
  key: number
  children: React.ReactNode
}> = ({ children, key }) => {
  return (
    <motion.div
      id={`modal-base-${key}`}
      className={cx(
        'z-[1000] w-full h-full',
        'fixed top-0 left-0 ',
        'flex justify-center items-center'
      )}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default ModalBaseLayout
