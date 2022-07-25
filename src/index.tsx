import '@src/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'
import qs from 'query-string'
import { createRoot } from 'react-dom/client'

import Root from './Root'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const container = document.getElementById('root')
const root = createRoot(container as Element)
root.render(<Root />)
