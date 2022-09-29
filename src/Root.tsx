import { BrowserRouter as Router } from 'react-router-dom'
import App from '@src/App'

import { ToastContainer } from 'react-toastify'
import { ModalContainer } from '@components/containers'
import { Provider } from 'react-redux'
import store from '@src/store'

const Root = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ModalContainer />
    </Provider>
  )
}

export default Root
