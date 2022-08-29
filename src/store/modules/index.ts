import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth'
import modal from './modal'
import calendar from './calendar'

const reducer = combineReducers<{
  auth: ReturnType<typeof auth>
  modal: ReturnType<typeof modal>
  calendar: ReturnType<typeof calendar>
}>({
  auth,
  modal,
  calendar,
})

export default reducer
