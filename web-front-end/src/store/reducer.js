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
  reducer as home
} from '../home/index/index'

const reducer=combineReducers({
    profile,
    product,
    changepwd,
    home
})

export default reducer