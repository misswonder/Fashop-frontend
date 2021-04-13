import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartAction";

function Product({ addToCart, product }) {
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
            addToCart();
          }}
        >
          <button class="ui black button">Add to Cart</button>
        </div>
      </div>
      <br></br>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
