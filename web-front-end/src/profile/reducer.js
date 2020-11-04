import {LOADDATA} from './actionTypes'
const defaultState={
    // profileMsg:{},
    list:[]
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:
            console.log('成功到reducer这里了',action)
            return{
                // profileMsg:action.profileMsg,
                list:action.list
            }
        default:
            return state
    }
}

export default reducer