import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { Button } from "semantic-ui-react";

const Product = ({ addToCart, product }) => {

  return (
    <div className="card" key={product.id}>
      <div className="card-image">
        <img src={product.image} alt={product.name} />
        <span className="card-title">{product.name}</span>
        <br></br>
        <br></br>
        <div className="card-content">
          <p>{product.description}</p>
          <p>
            <b>Color: {product.color}</b>
          </p>
          <p>
            <b>Size: {product.size}</b>
          </p>
          <p>
            <b>Price: ${product.price}</b>
          </p>
        </div>
        <br></br>
        <div
          to="/"
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            addToCart(product);
          }}
        >
          <Button color="black">Add to Cart</Button>
        </div>
      </div>
      <br></br>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
