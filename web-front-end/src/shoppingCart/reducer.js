import {
    GET_USERS_CART,
    TOGGLE_SHOP,
    NO_All_SELECT,
    All_SELECT

} from './actionTypes'

const  defaultState = {
    list: [],
    selectList:[]
}

const reducer = (state = defaultState ,action ) => {
    switch(action.type){
        case GET_USERS_CART:
            return {
                ...state,
                list:action.list
            }
       
        
        case TOGGLE_SHOP:  // 选中或取消选中商品
            let listData=[...state.selectList]
            if(listData.indexOf(action.id)===-1){
                 listData = [action.id,...state.selectList];
            }else{
                listData.splice(listData.indexOf(action.id),1)
            }
            return{
                ...state,
                selectList:listData
            }


        case NO_All_SELECT:
            return{
                ...state,
                selectList:action.list
            }
        
        case All_SELECT:
            return{
                ...state,
                selectList:action.list
            }
        default:
            return state
    } 
}

export default reducer