import {LOADDATA} from './actionTypes'
const defaultState={

}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:
            return{
                // list:action.list,
                // showList:action.showList
            }
        default:
            return state
    }
}

export {reducer} 