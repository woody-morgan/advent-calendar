import { PageLayout } from '@src/components/layout'
import { FC } from 'react'

import HomePageTemplate from './HomePageComponents/HomePageTemplate'

const HomePage: FC = () => {
  return (
    <PageLayout>
      <HomePageTemplate />
    </PageLayout>
  )
}

export default HomePage
