import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import { get_product } from "../actions/productAction";

// Endpoint!
const API = "http://localhost:4000/products";

class MainContainer extends React.Component {
  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((products) => this.props.get_product(products));
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <h2 className="center">Our Products</h2>
        <br></br>
        <div className="box">
          {this.props.products?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_product: (products) => {
      dispatch(get_product(products));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
