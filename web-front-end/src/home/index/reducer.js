import { CHANGENUM } from './actionTypes'

const defaultState = {
    num:0
}

const reducer = ( state = defaultState, action)=>{
    switch(action.type){
        case CHANGENUM:
            return {
                num:action.num + 1
            }
        default:
            return state
    }
}

export default reducer