import { ImageWrapper } from '@src/components/atom'
import { PageLayout } from '@src/components/layout'
import { useRootDispatch } from '@src/hooks'
import HouseFirstLayer from '@src/pages/HomePage/HomePageComponents/HouseFirstLayer'
import HouseSecondLayer from '@src/pages/HomePage/HomePageComponents/HouseSecondLayer'
import ResponsiveBackgroundBottomPadder from '@src/pages/HomePage/HomePageComponents/ResponsiveBackgroundBottomPadder'
import { openModal } from '@src/store/modules/modal'
import { getImagePath } from '@src/utils/globalUtil'
import React, { FC, SyntheticEvent } from 'react'

const HomePage: FC = () => {
  const dispatch = useRootDispatch()

  const handleOnClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    dispatch(
      openModal({
        name: 'CALENDAR-SAMPLE',
        title: name,
      })
    )
  }

  return (
    <PageLayout fullWidth fixedHeight>
      <div className="fixed w-full h-full flex flex-col justify-end items-center">
        <HouseSecondLayer onClick={handleOnClick} />
        <ImageWrapper
          disableLazyLoad
          className="w-full h-full fixed left-0 bottom-4"
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
