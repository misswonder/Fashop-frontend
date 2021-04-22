import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import {
  getProducts,
  sortProducts,
  filterProducts,
  resetProducts,
} from "../actions/productAction";

// Endpoint!
const API = "http://localhost:4000/products";

class MainContainer extends React.Component {
  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchTerms !== this.props.searchTerms) {
      this.fetchProducts();
    }
  }

  fetchProducts() {
    this.props.resetProducts();
    let endpoint = API;

    if (this.props.searchTerms) {
      endpoint = `${API}?q=${this.props.searchTerms}`;
    }

    fetch(endpoint)
      .then((res) => res.json())
      .then((products) => this.props.getProducts(products));
  }

  render() {
    return (
      <>
        <div className="sort-filter">
          <label>
            <strong>Sort by</strong>
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(event.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="sort-filter">
          <label>
            <strong>Filter Size</strong>
            <select
              className="form-control"
              value={this.props.size}
              onChange={(event) => {
                this.props.filterProducts(event.target.value);
              }}
            >
              <option value="">ALL</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </label>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <h2 className="center"><strong>Our Products</strong></h2>
          <br></br>
          <div className="box">
            {this.props.filteredProducts?.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredProducts: state.products.filteredItems,
    sort: state.products.sort,
    size: state.products.size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (products) => {
      dispatch(getProducts(products));
    },
  };
};

export default connect(mapStateToProps, {
  getProducts,
  filterProducts,
  sortProducts,
  resetProducts,
})(MainContainer);
