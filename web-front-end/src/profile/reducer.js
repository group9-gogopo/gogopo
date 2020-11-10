import {LOADDATA,CHANGESHOW} from './actionTypes'
const defaultState={
    // profileMsg:{},
    list:[],
    addShow:0
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:
            return{
                // profileMsg:action.profileMsg,
                ...state,
                list:action.list
            }
        case CHANGESHOW:
            return{
                ...state,
                addShow:action.id
            }
        default:
            return state
    }
}

export default reducer