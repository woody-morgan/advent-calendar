import house4 from '@src/assets/svgs/maison04.svg'
import house6 from '@src/assets/svgs/maison06.svg'
import house8 from '@src/assets/svgs/maison08.svg'
import house9 from '@src/assets/svgs/maison09.svg'
import houseLight from '@src/assets/svgs/maisonLight.svg'
import { ImageWrapper } from '@src/components/atom'
import cx from 'classnames'
import React, { FC, SyntheticEvent } from 'react'

const HouseSecondLayer: FC<{
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
}> = ({ onClick }) => {
  const [isShow, setIsShow] = React.useState(false)

  return (
    <div className="-z-0 flex max-w-full md:max-w-[500px] relative -bottom-10">
      <button
        name="house-4"
        className="z-[2] w-20 h-20 relative left-10 sm:-bottom-2 md:-bottom-4"
        onMouseOver={() => {
          setIsShow(true)
        }}
        onMouseLeave={() => {
          setIsShow(false)
        }}
        onClick={onClick}
      >
        <ImageWrapper
          className={cx('h-16 absolute top-3 left-0', isShow ? 'opacity-1' : 'opacity-0')}
          src={houseLight}
          width={140}
          height={140}
        />
        <ImageWrapper className="h-20" src={house9} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative left-6" onClick={onClick}>
        <ImageWrapper className="h-20" src={house4} width={140} height={140} />
      </button>
      <button className="z-[2] w-20 h-20 relative left-0" onClick={onClick}>
        <ImageWrapper className="h-20" src={house6} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative -left-2" onClick={onClick}>
        <ImageWrapper className="h-20" src={house8} width={140} height={140} />
      </button>
      <button className="z-[2] w-20 h-20 relative -left-8" onClick={onClick}>
        <ImageWrapper className="h-20" src={house8} width={140} height={140} />
      </button>
      <button className="z-[1] w-20 h-20 relative right-10 -bottom-4" onClick={onClick}>
        <ImageWrapper className="h-20" src={house6} width={140} height={140} />
      </button>
    </div>
  )
}

export default HouseSecondLayer
