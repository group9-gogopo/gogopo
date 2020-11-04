import { combineReducers } from 'redux'

import {
  reducer as changepwd
} from '../changepwd/index'

const reducer = combineReducers({
  changepwd
})

export default reducer