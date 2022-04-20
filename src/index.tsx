import React from 'react'
import ReactDOM from 'react-dom'
import Root from './client/Root'
import qs from 'query-string'

import reportWebVitals from './reportWebVitals'
import axios from 'axios'

import '@styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
