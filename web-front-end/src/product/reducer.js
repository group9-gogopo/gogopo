import {LOADDATA,CHANGEDATA} from './actionTypes'
const defaultState={
    // profileMsg:{},
    list:{},
    showList:[]
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:
            return{
                list:action.list,
                showList:action.showList
            }
        case CHANGEDATA:
            return{
                showList:action.value 
            }
        default:
            return state
    }
}

export default reducer