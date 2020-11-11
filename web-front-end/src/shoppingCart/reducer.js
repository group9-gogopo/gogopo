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
    list: [
        {
            id:'111',
            name:'水果礼盒',
            price:'100',
            image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2798791900,2905206626&fm=26&gp=0.jpg",
            count:1,
            checked:false,
        },
        {
            id:'222',
            name:'爆炸礼盒',
            price:'1000',
            image:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2168837044,3088852065&fm=26&gp=0.jpg',
            count:1,
            checked:false,
        },
        {
            id:'333',
            name:'食品礼盒',
            price:'800',
            image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3860799277,769615190&fm=26&gp=0.jpg',
            count:1,
            checked:false,
        }
    ],
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
        case TOGGLE_SHOP:  // 选中或取消选中商品
            let select = state.list.filter(item => {
            if(action.id === item.id) {
                item.checked = !item.checked;
                }
                return item
            });
            return {
                list:select
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