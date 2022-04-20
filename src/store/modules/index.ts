import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth'
import modal from './modal'

const reducer = combineReducers({
  auth,
  modal,
})

export default reducer
