import { ImageWrapper } from '@src/components/atom'
import { PageLayout } from '@src/components/layout'
import HouseFirstLayer from '@src/pages/HomePage/HomePageComponents/HouseFirstLayer'
import HouseSecondLayer from '@src/pages/HomePage/HomePageComponents/HouseSecondLayer'
import ResponsiveBackgroundBottomPadder from '@src/pages/HomePage/HomePageComponents/ResponsiveBackgroundBottomPadder'
import { getImagePath } from '@src/utils/globalUtil'
import React, { FC } from 'react'

const HomePage: FC = () => {
  return (
    <PageLayout fullWidth fixedHeight>
      <div className="relative w-full h-full flex flex-col justify-end items-center">
        <HouseSecondLayer />
        <ImageWrapper
          disableLazyLoad
          className="w-full h-full fixed left-0 bottom-11"
          src={getImagePath('/static/bg_snow_hill.png')}
          width={200}
          height={200}
        />
        <HouseFirstLayer />

        <ResponsiveBackgroundBottomPadder />
      </div>
    </PageLayout>
  )
}

export default HomePage
