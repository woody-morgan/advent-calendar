import ModalBaseDesign from '@src/components/containers/Modal/Base/ModalBaseDesign'
import ModalBaseLayout from '@src/components/containers/Modal/Base/ModalBaseLayout'
import ModalBaseOverLay from '@src/components/containers/Modal/Base/ModalBaseOverLay'
import { AnimatePresence } from 'framer-motion'
import React, { FC, ReactNode } from 'react'

export type ModalBaseShape = {
  transitionKey: number
  show: boolean
  children?: ReactNode
  onClose: () => void
}

const ModalBase: FC<ModalBaseShape> = ({ transitionKey, show, onClose, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <ModalBaseLayout key={transitionKey}>
          <ModalBaseOverLay onClick={onClose} />
          <ModalBaseDesign>{children}</ModalBaseDesign>
        </ModalBaseLayout>
      )}
    </AnimatePresence>
  )
}

export default ModalBase
