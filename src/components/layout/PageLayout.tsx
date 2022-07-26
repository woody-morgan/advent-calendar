import { pageVars } from '@src/animations/page'
import Footer from '@src/components/layout/PageLayout/Footer'
import useWindowResize from '@src/hooks/useWindowResize'
import cx from 'classnames'
import { motion } from 'framer-motion'
import React, { FC, Fragment, useRef } from 'react'

const PageLayout: FC<{
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
}> = ({ children, fullWidth = false, fixedHeight = false, disableTransition = false }) => {
  const mainRef = useRef<HTMLDivElement>(null)

  // to recalculate height when mobile browser search bar appeared and disappeared
  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current?.style.setProperty('height', `${window.innerHeight}px`)
    } else {
      mainRef.current?.style.setProperty('height', 'h-full')
    }
  }, 0)

  // it is for showing content on the top of bottom nav
  // it should be pb-0 on desktop size because bottom nav will not be shown
  return (
    <>
      <motion.div
        className="relative"
        variants={disableTransition ? {} : pageVars}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
      >
        <main
          ref={mainRef}
          className={cx(
            'relative m-center w-full pt-gb-header md:pb-0',
            fullWidth ? null : `max-w-mobile-app px-side-padding`,
            fixedHeight ? 'overflow-hidden h-screen' : 'min-h-screen'
          )}
        >
          {children}
        </main>
      </motion.div>
      <Fragment>{fixedHeight ? <></> : <Footer />}</Fragment>
    </>
  )
}

export default PageLayout
