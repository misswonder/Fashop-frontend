import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Checkbox, Container, Grid } from "semantic-ui-react";

class Receipt extends Component {
  handleChecked = (_, { checked }) => {
    if (checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  checkout = () => {
    if (!this.props.user) {
      alert("Please login before checking out!");
      return;
    }

    const body = {
      order: {
        products: this.props.addedProducts.map(({ id, quantity }) => ({
          id,
          quantity,
        })),
      },
    };

    fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        authorization: `Bearer ${this.props.user.jwt}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(() => {
        alert("Thank you for your order!");
        this.props.clearCart();
      })
      .catch(() => {
        alert("Sorry there was an issue processing your oder");
      });
  };

  render() {
    return (
      <Container>
        <Grid celled id="recipecontainer">
          <Grid.Row>
            <Grid.Column width={15}>
              <Checkbox label="2-Day Shipping(+$6)" onChange={this.handleChecked} />
            </Grid.Column>
            <Grid.Column width={15}>
              <strong>Total: ${this.props.total.toFixed(2)}</strong>
            </Grid.Column>
            <Grid.Column width={15}>
              <Button color="black" onClick={this.checkout}>
                Checkout
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedProducts: state.cart.addedProducts,
    total: state.cart.total,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
    clearCart: () => {
      dispatch({ type: "CLEAR_CART" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);

