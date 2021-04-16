import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";
import {
  getProducts,
  sortProducts,
  filterProducts,
} from "../actions/productAction";

// Endpoint!
const API = "http://localhost:4000/products";

class MainContainer extends React.Component {
  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((products) => this.props.getProducts(products));
  }

  render() {
    return (
      <>
        <div className="form-container">
          <div className="sort-form">
            <label>
              <strong>Sort by</strong>
              <select
                className="form-control"
                value={this.props.sort}
                onChange={(event) => {
                  this.props.sortProducts(
                    this.props.filteredProducts,
                    event.target.value
                  );
                }}
              >
                <option value="">Select</option>
                <option value="lowestprice">Lowest to highest</option>
                <option value="highestprice">Highest to lowest</option>
              </select>
            </label>
          </div>
          <div className="filter-form">
            <label>
              <strong>Filter Size</strong>
              <select
                className="form-control"
                value={this.props.size}
                onChange={(event) => {
                  this.props.filterProducts(
                    this.props.products,
                    event.target.value
                  );
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
        </div>
        <div> 
        <SearchBar />
        </div>
        <div className="container">
          <h2 className="center">Our Products</h2>
          <br></br>
          <div className="box">
            {this.props.products?.map((product) => {
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
    products: state.products,
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
})(MainContainer);
