import {LOADDATA,CHANGESHOW, PASSDATA} from './actionCreateTypes'
const defaultState = {
    list:[],
    isShow:false,
    data:{}
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
        case PASSDATA:
            return{
                ...state,
                data:action.data
            }
        default:
            return state
    }
}
export default reducer