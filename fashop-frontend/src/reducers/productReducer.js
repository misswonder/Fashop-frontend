const initState = { products: [], filteredItems: [], size: "", sort: "" };

const productReducer = (state=initState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return action.products;
      case "SORT_PRODUCTS_BY_PRICE":
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
      case "FILTER_PRODUCTS_BY_SIZE":
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    default:
      return state;
  }
};

export default productReducer;
