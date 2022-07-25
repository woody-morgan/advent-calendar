import React, { FC, Fragment, memo } from 'react'

import Header from './PageLayout/Header'

const CommonLayout: FC<{
  children: React.ReactNode
  headerTransparent: boolean
  headerFixed: boolean
  headerBackgroundColor?: string
}> = ({ headerTransparent, headerFixed, headerBackgroundColor, children }) => {
  return (
    //  overflow hidden to prevent text on background on transition
    <div
      id="page-layout"
      className="overflow-hidden w-full bg-primary-bg max-w-mobile-app m-center"
    >
      <Header
        fixed={headerFixed}
        transparent={headerTransparent}
        className={headerBackgroundColor}
      />
      <Fragment>{children}</Fragment>
    </div>
  )
}

export default memo(CommonLayout)
