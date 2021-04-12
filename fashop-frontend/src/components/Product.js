import React from "react";

const Product = ({ product }) => {
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
          <b>Price: {product.price}$</b>
        </p>
      </div>
      <br></br>
      <div
          to="/"
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            this.handleClick(product.id);
          }}
        >
          <button class="ui black button">Add to Cart</button>
          {/* <button class="ui grey button">Add to Cart</button> */}
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Product;
