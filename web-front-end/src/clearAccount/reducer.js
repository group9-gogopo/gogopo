import {LOADDATA,CHANGESHOW} from './actionCreateTypes'
const defaultState = {
    list:[],
    isShow:false
}

const reducer = (state = defaultState,action)=>{
    switch(action.type){
        case LOADDATA: 
            return {
                ...state,
                list:action.list
            }
        case CHANGESHOW:
            return{
                ...state,
                isShow:action.show
            }
        default:
            return state
    }
}
export default reducer