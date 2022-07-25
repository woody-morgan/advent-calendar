import App from '@src/App'
import { ModalContainer } from '@src/components/containers'
import store from '@src/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Root = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
      <ModalContainer />
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
    </Provider>
  )
}

export default Root
