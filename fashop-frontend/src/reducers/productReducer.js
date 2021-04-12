const productReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return action.products;
    default:
      return state;
  }
};

export default productReducer;
