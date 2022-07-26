import house17 from '@src/assets/svgs/maison17.svg'
import { ImageWrapper } from '@src/components/atom'
import React from 'react'

const HouseBox = () => {
  return (
    <div className="relative w-10">
      <ImageWrapper
        layout="intrinsic"
        className="z-[1] absolute left-0 top-0"
        src={house17}
        width={140}
        height={28}
      />
    </div>
  )
}

export default HouseBox
