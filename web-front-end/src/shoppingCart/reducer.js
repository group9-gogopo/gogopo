import {
    SELECT_ALL_SHOP,
    GET_USERS_CART,
    TOGGLE_SHOP,
    ADD_SHOP,
    SUB_SHOP,
    REMOVE_SHOP
} from './actionTypes'

import shoppingCartData from './data'
const  defaultState = {
    list: []
}

const reducer = (state = defaultState ,action ) => {
    switch(action.type){
        case GET_USERS_CART:
            return {
                list:shoppingCartData
            }
        case ADD_SHOP:
            
            let newData = state.list.filter((value)=>{
                if(value.id===action.id){
                    value.count++
                }
                return value
            })
           return {
               list:newData
           };
        case SUB_SHOP:
            let newData1 = state.list.filter(item => {
                if(item.count < 1){
                    return;
                }else if(item.id === action.id){
                    item.count--
                }
                return item
            })
            return{
                list:newData1
            }
        case REMOVE_SHOP:
            let removeShop = state.list.filter(value => {
                if(value.id !== action.id){
                    return value
                }
            })
            return{
                list:removeShop
            }
        default:
            return state
    } 
}

export default reducer