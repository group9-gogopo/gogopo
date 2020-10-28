import { combineReducers } from 'redux'

import {
    reducer as profile
} from '../profile/index'

const reducer=combineReducers({
    profile
})

export default reducer