import produce from "immer";

const initialState = {
  addedProducts: [],
  total: 0,
};
const cartReducer = (state = initialState, action) => {
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

    return {
      ...state,
      addedProducts: new_products,
      total: newTotal,
    };
  }
  //INSIDE MyCart COMPONENT
  if (action.type === "ADD_QUANTITY") {
    return produce(state, (draft) => {
      let addedProduct = draft.addedProducts.find(
        (product) => product.id === action.id
      );
      addedProduct.quantity += 1;
      draft.total = draft.addedProducts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
    });
  }
  if (action.type === "SUB_QUANTITY") {
    return produce(state, (draft) => {
      const productIndex = draft.addedProducts.findIndex(
        (product) => product.id === action.id
      );
      const addedProduct = draft.addedProducts[productIndex];

      if (addedProduct.quantity === 1) {
        draft.addedProducts.splice(productIndex, 1);
      } else {
        addedProduct.quantity -= 1;
      }

      draft.total = draft.addedProducts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
    });
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
  }

  if (action.type === "CLEAR_CART") {
    return initialState;
  }

  return state;
};

export default cartReducer;
