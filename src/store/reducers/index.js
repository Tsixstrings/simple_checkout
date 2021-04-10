import { combineReducers } from 'redux'
import checkout from './checkout'
import catalog from './catalog'

export default combineReducers({
  checkout,
  catalog
})