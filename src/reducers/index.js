import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import quotationsReducer from './quotationsReducer'
import tagsReducer from './tagsReducer'

const rootReducers = combineReducers({
  form: form,
  quotations: quotationsReducer,
  tags: tagsReducer,
})

export default rootReducers
