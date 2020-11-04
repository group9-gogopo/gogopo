import {
    SELECT_ALL_SHOP,
    GET_USERS_CART,
    TOGGLE_SHOP,
    ADD_SHOP,
    SUB_SHOP,
    REMOVE_SHOP
} from './actionTypes'


export  function loadDataSync () {
    return{
        type:GET_USERS_CART,
    }
}   

// 异步获取用户购物车数据

// export function getUserCarData(userId) {

//     let statements = `SELECT * FROM userCart WHERE user_id = '${userId}'`;
  
//     return (dispatch) => {
  
//       wantShopData({ statements }).then(data => {
  
//         dispatch(asyncUserCartData(data));
  
//       });
  
//     }
  
//   }
  
   
  
  // 购物车选中或不选中
  
  export function checkShopNumber(type, id) {
  
    return { type: TOGGLE_SHOP, id };
  
  }
  
   
  
  // 购物车全选或取消全选
  
  export function operationAllShop(seleStatus) {
  
    return { type: SELECT_ALL_SHOP, seleStatus };
  
  }
  
   
  
  // 购物车加商品
  
  export function userAddShop(id) {
  
    return { type: ADD_SHOP, id }
  
  }
  
   
  
  // 购物车减商品
  
  export function userSubShop(id) {
  
    return { type: SUB_SHOP, id }
  
  }
  
   
  
  // 删除商品
  
  export function removeCartShop(id) {
  
    return { type: REMOVE_SHOP, id }
  
  }

  