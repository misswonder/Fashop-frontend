export const getProducts = (products) => {
  return { type: "GET_PRODUCT", products: products };
};

export const resetProducts = () => {
  return { type: "RESET_PRODUCTS" };
}

export const sortProducts = (sort) => {
  return {
    type: "SORT_PRODUCTS_BY_PRICE",
    payload: {
      sort: sort,
    },
  };
};

export const filterProducts = (size) => {
  return {
    type: "FILTER_PRODUCTS_BY_SIZE",
    payload: {
      size: size,
    },
  };
};
