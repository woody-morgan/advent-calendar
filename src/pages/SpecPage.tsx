import { PageLayout } from '@src/components/layout'
import { HouseBox } from '@src/components/molecule'
import React from 'react'

const SpecPage = () => {
  return (
    <PageLayout fixedHeight>
      <div className="w-full h-full flex justify-center items-center">
        <HouseBox />
      </div>
    </PageLayout>
  )
}

export default SpecPage
