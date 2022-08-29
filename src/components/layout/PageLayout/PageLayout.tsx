import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './PageLayout.module.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import PageTransition from './PageTransition/PageTransition'

interface Props {
  className?: string
  children: ReactNode
  fullWidth?: boolean
  enablePageTransition?: boolean
}

const PageLayout: FC<Props> = ({
  className,
  children,
  fullWidth = false,
  enablePageTransition = false,
}) => {
  return (
    <main className={classNames(styles.container, className)}>
      <Header />

      <div
        className={classNames(styles.content, {
          [styles['full-width']]: fullWidth,
        })}
      >
        {enablePageTransition ? <PageTransition>{children}</PageTransition> : <>{children}</>}
      </div>
      <Footer />
    </main>
  )
}

export default PageLayout
