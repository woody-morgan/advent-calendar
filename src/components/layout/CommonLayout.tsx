import LuneSvg from '@src/assets/svgs/lune.svg'
import { ImageWrapper } from '@src/components/atom'
import { getImagePath } from '@src/utils/globalUtil'
import cx from 'classnames'
import React, { FC, Fragment, memo } from 'react'

const CommonLayout: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div
      id="page-layout"
      className={cx('overflow-hidden w-full m-center', 'bg-gradient-to-r from-from-bg to-to-bg')}
    >
      <Fragment>{children}</Fragment>
      <ImageWrapper
        disableLazyLoad
        className={cx('w-20 h-full fixed top-4 left-[20%] -translate-x-[20%]', 'sm:w-32 sm:top-7')}
        src={LuneSvg}
        width={40}
        height={40}
      />
      <div className="px-6 fixed top-6 left-0">
        <ImageWrapper
          disableLazyLoad
          src={getImagePath('/static/bg_stars.png')}
          width={800}
          height={100}
        />
      </div>
      <ImageWrapper
        disableLazyLoad
        className="w-full h-full fixed bottom-0 left-0"
        src={getImagePath('/static/bg_trees.png')}
        width={200}
        height={200}
      />
      <ImageWrapper
        disableLazyLoad
        className="w-full h-full fixed bottom-0 left-0"
        src={getImagePath('/static/bg_trees_prettier.png')}
        width={200}
        height={200}
      />
    </div>
  )
}

export default memo(CommonLayout)
