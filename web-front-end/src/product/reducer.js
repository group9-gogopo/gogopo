import {LOADDATA} from './actionTypes'
const defaultState={
    // profileMsg:{},
    list:{},
    showList:[]
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:
            console.log('成功到reducer这里了',action)
            return{
                list:action.list,
                showList:action.showList
            }
        default:
            return state
    }
}

export default reducer