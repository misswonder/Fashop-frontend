export const getProducts = (products) => {
  return { type: "GET_PRODUCT", products: products };
};

export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: "SORT_PRODUCTS_BY_PRICE",
    payload: {
      sort: sort,
      items: products,
    },
  });
};


export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: "FILTER_PRODUCTS_BY_SIZE",
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
              (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
            ),
    },
  });
};