import { combineReducers } from 'redux'

import {
    reducer as profile
} from '../profile/index'

import {
    reducer as product
} from '../product/index'

const reducer=combineReducers({
    profile,
    product
})

export default reducer