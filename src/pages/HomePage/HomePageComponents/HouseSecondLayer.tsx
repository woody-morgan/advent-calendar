import house4 from '@src/assets/svgs/maison04.svg'
import house6 from '@src/assets/svgs/maison06.svg'
import house7 from '@src/assets/svgs/maison07.svg'
import house8 from '@src/assets/svgs/maison08.svg'
import house9 from '@src/assets/svgs/maison09.svg'
import { ImageWrapper } from '@src/components/atom'
import React from 'react'

const HouseSecondLayer = () => {
  return (
    <div className="-z-0 flex w-[500px] relative -bottom-10">
      <button className="z-[2] w-20 h-20 relative left-16">
        <ImageWrapper className="h-20" src={house9} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative left-10">
        <ImageWrapper className="h-20" src={house4} width={140} height={140} />
      </button>
      <button className="z-[2] w-20 h-20 relative left-4">
        <ImageWrapper className="h-20" src={house6} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative -left-2">
        <ImageWrapper className="h-20" src={house8} width={140} height={140} />
      </button>
      <button className="z-[2] w-20 h-20 relative right-4">
        <ImageWrapper className="h-20" src={house7} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative -bottom-3 right-1">
        <ImageWrapper className="h-20" src={house6} width={140} height={140} />
      </button>
    </div>
  )
}

export default HouseSecondLayer
