import {
  SELECT_ALL_SHOP,
  GET_USERS_CART,
  TOGGLE_SHOP,
  NO_All_SELECT,
  All_SELECT,
} from "./actionTypes";
import { get } from "@u/http";

export function loadDataSync(list) {
  return {
    type: GET_USERS_CART,
    list,
  };
}

export function loadDataAsync(userid) {
  return async (dispatch) => {
    let result = await get("http://localhost:4400/api/shoppingcartquery", {
      userid,
    });
    dispatch(loadDataSync(result.shoppingCartList));
  };
}

// 购物车选中或不选中

export function checkShopNumber(id) {
  return { type: TOGGLE_SHOP, id };
}

// 购物车全选或取消全选

export function noAllSelect() {
  return { type: NO_All_SELECT, list: [] };
}
export function allSelect(list){
  return { type: NO_All_SELECT, list }
}
