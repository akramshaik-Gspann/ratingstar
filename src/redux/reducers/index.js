import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  orderDetails: orderDetailsReducer
});
export default reducers;
