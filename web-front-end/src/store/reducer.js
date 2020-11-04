import {combineReducers} from 'redux'

import  {reducer as shoppingCart}  from '../shoppingCart/index'

const reducer = combineReducers({
    shoppingCart
})
export default reducer