import {
    SELECT_ALL_SHOP,
    GET_USERS_CART,
    TOGGLE_SHOP,

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


        case SELECT_ALL_SHOP:
            console.log(action.seleStatus)
            if(action.seleStatus === 'SELECTED_S') {
               let newList = state.list.map(item => {
                  item.checked= true;
                  return newList
                });
              }
              if(action.seleStatus === 'CANCEL_S') {
                let newList = state.list.map(item => {
                  item.checked = false;
                  return newList
                });
              }
              return {
                list:state.list
              }
        default:
            return state
    } 
}

export default reducer