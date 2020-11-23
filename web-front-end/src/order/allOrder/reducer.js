import {LOADDATA} from './actionTypes'
const defaultState={
    orderList:[]
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:
            return{
                orderList:action.list
            }
        default:
            return state
    }
}

export {reducer} 