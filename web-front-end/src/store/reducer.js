import { combineReducers } from "redux";

import { reducer as changepwd } from "../changepwd/index";

import { reducer as product } from "../product/index";

import { reducer as profile } from "../profile/index";

import { reducer as detail } from "../detail/index";

import { reducer as shoppingCart } from "../shoppingCart/index";

const reducer = combineReducers({
  profile,
  product,
  changepwd,
  detail,
  shoppingCart,
});

export default reducer;
