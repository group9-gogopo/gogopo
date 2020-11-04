import { combineReducers } from 'redux'

import {
<<<<<<< HEAD
  reducer as changepwd
} from '../changepwd/index'

const reducer = combineReducers({
  changepwd
=======
    reducer as profile
} from '../profile/index'

import {
    reducer as product
} from '../product/index'

const reducer=combineReducers({
    profile,
    product
>>>>>>> liyx
})

export default reducer