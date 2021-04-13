import {
  addToCart,
  removeItem,
  subtractQuantity,
  addQuantity,
} from "../actions/cartAction";

const cartReducer = (
  state = {
    addedProducts: [],
    total: 0,
  },
  action
) => {
  //INSIDE MainContainer COMPONENT
  if (action.type === "ADD_TO_CART") {
    //check if the action id exists in the addedItems
    let existedProduct = state.addedProducts.find(
      (product) => action.product.id === product.id
    );
    if (existedProduct) {
      existedProduct.quantity += 1;
      return {
        ...state,
        total: state.total + action.product.price,
      };
    } else {
      //calculating the total
      let newTotal = state.total + action.product.price;

      return {
        ...state,
        addedProducts: [
          ...state.addedProducts,
          {
            ...action.product,
            quantity: 1,
          },
        ],
        total: newTotal,
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let productToRemove = state.addedProducts.find(
      (product) => action.id === product.id
    );
    let new_products = state.addedProducts.filter(
      (product) => action.id !== product.id
    );

    //calculating the total
    let newTotal =
      state.total - productToRemove.price * productToRemove.quantity;
    // console.log(productToRemove);
    return {
      ...state,
      addedProducts: new_products,
      total: newTotal,
    };
  }
  //INSIDE MyCart COMPONENT
  if (action.type === "ADD_QUANTITY") {
    let addedProduct = state.products.find(
      (product) => product.id === product.id
    );
    addedProduct.quantity += 1;
    let newTotal = state.total + addedProduct.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === "SUB_QUANTITY") {
    let addedProduct = state.products.find(
      (product) => product.id === product.id
    );
    //if the qt == 0 then it should be removed
    if (addedProduct.quantity === 1) {
      let new_products = state.addedProducts.filter(
        (product) => product.id !== action.id
      );
      let newTotal = state.total - addedProduct.price;
      return {
        ...state,
        addedProducts: new_products,
        total: newTotal,
      };
    } else {
      addedProduct.quantity -= 1;
      let newTotal = state.total - addedProduct.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === "ADD_SHIPPING") {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }

  return state;
};

export default cartReducer;
