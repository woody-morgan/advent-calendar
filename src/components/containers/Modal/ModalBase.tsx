import { FC, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { modalOverlayVariants, modalVariants } from '@src/animations/modal'
import { ReactComponent as XButton } from '@src/assets/xButton.svg'

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
          id={`modal-base-${Math.random()}`}
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
            <div className="relative w-full items-center">
              <button
                className="absolute left-0 text-lg h-full"
                onClick={() => {
                  onClose()
                }}
              >
                <XButton width="24" height="24" />
              </button>
              <div className="w-4/5 mx-auto text-center items-center text-lg font-bold hide-text-overflow">
                {title}
              </div>
            </div>
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ModalBase
