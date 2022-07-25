import { Button } from '@src/components/atom'
import { PageLayout } from '@src/components/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const FourOFourPage = () => {
  return (
    <PageLayout fixedHeight>
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-center items-center space-y-4">
          <h1>404 Not Found</h1>
          <Link to="/">
            <Button className="text-white">Go Back</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default FourOFourPage
