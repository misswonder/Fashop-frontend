import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../actions/cartAction";
import { connect } from "react-redux";
import Recipe from "./Recipe";
import { Button, Container, Grid, List } from "semantic-ui-react";

class MyCart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedProducts = this.props.products.length ? (
      this.props.products.map((product) => {
        return (
          <Container>
            <List className="collection-item avatar" key={product.id}>
              <div className="product-img">
                <img
                  src={product.image}
                  alt={product.image}
                  className="item-img"
                />
              </div>

              <div className="product-desc">
                <span className="title">{product.title}</span>
                <p>{product.desc}</p>
                <p>
                  <b>Price: ${product.price}</b>
                </p>
                <p>
                  <b>Quantity: {product.quantity}</b>
                </p>
                <div className="add-remove">
                  <Link to="/mycart">
                    <i
                      className="caret square up"
                      onClick={() => {
                        this.handleAddQuantity(product.id);
                      }}
                    >
                      arrow_drop_up
                    </i>
                  </Link>
                  <Link to="/mycart">
                    <i
                      className="caret square down"
                      onClick={() => {
                        this.handleSubtractQuantity(product.id);
                      }}
                    >
                      arrow_drop_down
                    </i>
                  </Link>
                </div>
                <br></br>
                <Button
                  color="black"
                  onClick={() => {
                    this.handleRemove(product.id);
                  }}
                >
                  Remove
                </Button>
              </div>
            </List>
          </Container>
        );
      })
    ) : (
      <p className="none">
        <strong>Nothing.</strong>
      </p>
    );

    return (
      <Container>
        <Grid celled id="recipe">
          <Grid.Row>
            <Grid.Column width={15}>
              <h5 class="order">You have ordered:</h5>
            </Grid.Column>
            <ul className="collection">{addedProducts}</ul>
          </Grid.Row>
        </Grid>
        <Recipe />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.carts.addedProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
