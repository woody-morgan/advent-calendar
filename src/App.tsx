import { Route, Routes } from 'react-router-dom'
import { Home, Profile } from '@src/pages'
// import for global localization
import '@styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  )
}

export default App
