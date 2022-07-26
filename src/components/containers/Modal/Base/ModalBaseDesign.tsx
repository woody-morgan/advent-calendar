import { modalVariants } from '@src/animations/modal'
import { ImageWrapper } from '@src/components/atom'
import { getImagePath } from '@src/utils/globalUtil'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

const ModalBaseDesign: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <motion.div
      className="relative z-[998] w-full h-96 sm:max-w-lg sm:min-w-[20rem]"
      variants={modalVariants}
    >
      <div className="w-full h-full z-50 pt-40 px-20">{children}</div>
      <ImageWrapper
        src={getImagePath('/static/modal_base.png')}
        className="-z-10 absolute translate-center-xy w-full h-full"
        width={100}
        height={20}
      />
    </motion.div>
  )
}

export default ModalBaseDesign
