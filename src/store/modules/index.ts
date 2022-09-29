import { combineReducers } from '@reduxjs/toolkit'

import modal from './modal'
import calendar from './calendar'

const reducer = combineReducers<{
  modal: ReturnType<typeof modal>
  calendar: ReturnType<typeof calendar>
}>({
  modal,
  calendar,
})

export default reducer
