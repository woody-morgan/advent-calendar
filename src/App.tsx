import { CommonLayout } from '@src/components/layout'
import { HomePage } from '@src/pages'
import FourOFourPage from '@src/pages/FourOFourPage'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <CommonLayout>
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0)
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<FourOFourPage />} />
        </Routes>
      </AnimatePresence>
    </CommonLayout>
  )
}

export default App
