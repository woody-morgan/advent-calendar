import { ImageWrapper } from '@src/components/atom'
import { placeholderSrc } from '@src/utils/imageUtil'
import React from 'react'

const ResponsiveBackgroundBottomPadder = () => {
  return (
    <div className="w-full">
      <ImageWrapper
        className="w-full"
        disableLazyLoad
        src={placeholderSrc(11, 1)}
        width={320}
        height={609}
      />
    </div>
  )
}

export default ResponsiveBackgroundBottomPadder
