import house1 from '@src/assets/svgs/maison02.svg'
import house2 from '@src/assets/svgs/maison03.svg'
import house3 from '@src/assets/svgs/maison04.svg'
import { ImageWrapper } from '@src/components/atom'
import React from 'react'

const HouseFirstLayer = () => {
  return (
    <div className="-z-0 flex w-[400px]">
      <button className="z-[2] w-20 h-20 relative left-12">
        <ImageWrapper className="h-20" src={house1} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative left-8">
        <ImageWrapper className="h-20" src={house2} width={140} height={140} />
      </button>
      <button className="z-[2] w-20 h-20 relative left-4">
        <ImageWrapper className="h-20" src={house3} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative -left-0.5">
        <ImageWrapper className="h-20" src={house3} width={140} height={140} />
      </button>
      <button className="z-[2] w-20 h-20 relative right-4">
        <ImageWrapper className="h-20" src={house2} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative right-8">
        <ImageWrapper className="h-20" src={house1} width={140} height={140} />
      </button>
    </div>
  )
}

export default HouseFirstLayer
