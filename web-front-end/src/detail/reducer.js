import { DETAILDATA } from "./actionTypes";

const defaultState={
    list:[],
    count:1
}

const reducer =(state=defaultState,action)=>{
    switch (action.type){
        case DETAILDATA:
            return{
                ...state,
                list:action.list
            }
        default:
            return state;    
    }
}

export default reducer