import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  carts: cartReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
