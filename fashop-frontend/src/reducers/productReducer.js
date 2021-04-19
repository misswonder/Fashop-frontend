import produce from "immer";

const initState = { products: [], filteredItems: [], size: "", sort: "" };

const filterProducts = (products, filter) => {
  if (!filter) {
    return products;
  }

  return products.filter((product) => product.size === filter.toUpperCase());
};

const sortProducts = (products, sort) => {
  if (!sort) {
    return products;
  }

  return products.sort((a, b) =>
    sort === "lowestprice"
      ? a.price > b.price
        ? 1
        : -1
      : a.price < b.price
      ? 1
      : -1
  );
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return produce(state, (draft) => {
        draft.products = action.products;
        draft.filteredItems = sortProducts(
          filterProducts(draft.products, draft.size),
          draft.sort
        );
      });
    case "RESET_PRODUCTS":
      return initState;
    case "SORT_PRODUCTS_BY_PRICE":
      return produce(state, (draft) => {
        draft.sort = action.payload.sort;
        draft.filteredItems = sortProducts(
          filterProducts(draft.products, draft.size),
          draft.sort
        );
      });
    case "FILTER_PRODUCTS_BY_SIZE":
      return produce(state, (draft) => {
        draft.size = action.payload.size;
        draft.filteredItems = sortProducts(
          filterProducts(draft.products, draft.size),
          draft.sort
        );
      });
    default:
      return state;
  }
};

export default productReducer;
