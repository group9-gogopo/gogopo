
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

import { reducer as detail } from "../detail/index";

import { reducer as shoppingCart } from "../shoppingCart/index";
import { reducer as story } from "../story/index";

import {
  reducer as login
} from '../login/index'

import {
  reducer as order
} from '../order/allOrder/reducer'
import { reducer as clearAccount} from '../clearAccount/index'

const reducer=combineReducers({
    profile,
    product,
    changepwd,
    home,
    detail,
    shoppingCart,
    story,
    login,
    order,
    clearAccount

})

export default reducer


