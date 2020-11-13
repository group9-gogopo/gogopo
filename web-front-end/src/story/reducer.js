import {LOADDATA} from './actionTypes'
const defaultState={
    showList:[]
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:

            return{
                showList:action.showList
            }
        default:
            return state
    }
}

export default reducer