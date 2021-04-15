import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

export default createStore(
  rootReducer,
  JSON.parse(localStorage.getItem("store") || "{}"),
  compose(
    applyMiddleware((store) => (next) => (action) => {
      next(action);
      localStorage.setItem("store", JSON.stringify(store.getState()));
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
