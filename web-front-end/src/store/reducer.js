
import { combineReducers } from 'redux'

import  {reducer as shoppingCart}  from '../shoppingCart/index'
import {
  reducer as changepwd
} from '../changepwd/index'


import {
    reducer as product
} from '../product/index'

import {
  reducer as profile
} from '../profile/index'

const reducer=combineReducers({
    profile,
    product,
    changepwd,
    shoppingCart
})

export default reducer