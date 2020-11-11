import { combineReducers } from 'redux'

import {
  reducer as changepwd
} from '../changepwd/index'


import {
    reducer as product
} from '../product/index'

import {
  reducer as profile
} from '../profile/index'

import {
  reducer as detail
} from  '../detail/index'

import {
  reducer as login
} from '../login/index'

const reducer=combineReducers({
    profile,
    product,
    changepwd,
    detail,
    login
})

export default reducer