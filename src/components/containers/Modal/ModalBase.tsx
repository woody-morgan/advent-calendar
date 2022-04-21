import { FC, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { modalOverlayVariants, modalVariants } from '@src/animations/modal'

interface ModalBaseShape {
  show: boolean
  title?: string
  children?: ReactNode
  onClose: () => void
}

const ModalBase: FC<ModalBaseShape> = ({ show, title, onClose, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          className="fixed flex justify-center items-center top-0 left-0 z-[1000] w-full h-full"
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.div
            className="absolute top-0 left-0 z-[998] w-full h-full bg-black/20"
            variants={modalOverlayVariants}
            onClick={() => {
              onClose()
            }}
          />
          <motion.div
            className="relative z-[998] w-full sm:max-w-lg sm:min-w-[20rem] rounded-md p-8 bg-white/90"
            variants={modalVariants}
          >
            <div className="flex items-center justify-between border-b-orange-200">
              <button
                className="text-inherit p-0"
                onClick={() => {
                  onClose()
                }}
              >
                X
              </button>
              <div>{title}</div>
              <div />
            </div>
            <div className="py-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ModalBase
