import { IconButton, ImageWrapper } from '@src/components/atom'
import { getImagePath } from '@src/utils/globalUtil'
import { notImplCallback } from '@src/utils/notImplUtil'
import cx from 'classnames'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  fixed?: boolean
  transparent?: boolean
}

const Header: FC<Props> = ({ className, fixed = false, transparent = false }) => {
  return (
    <header className="relative">
      <div
        className={cx(
          'z-20 w-full max-w-mobile-app h-gb-header top-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold',
          'border-gray-300 border-b-2 border-solid',
          fixed ? 'fixed' : 'absolute',
          transparent ? 'bg-transparent' : 'bg-primary-bg',
          className
        )}
      >
        <div className="flex w-full justify-between items-center">
          <Link to="/">
            <ImageWrapper src={getImagePath('/logo.png')} alt="logo" width={30} height={30} />
          </Link>
          <IconButton name="hamburger" size={30} onClick={notImplCallback} />
        </div>
      </div>
    </header>
  )
}

export default Header
