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

  render() {
    return (
      <Container>
        <Grid celled id="recipecontainer">
          <Grid.Row>
            <Grid.Column width={15}>
              <Checkbox label="Shipping(+$6)" onChange={this.handleChecked} />
            </Grid.Column>
            <Grid.Column width={15}>
              <strong>Total: ${this.props.total.toFixed(2)}</strong>
            </Grid.Column>
            <Grid.Column width={15}>
              <Button
                color="black"
                onClick={() => {
                  alert ("Thank you for your order!");
                }}
              >
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
