import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Checkbox, Container, Grid } from "semantic-ui-react";

class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = (e) => {
    if (e.target.checked) {
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
            <Grid.Column width={15}><strong>Total: ${this.props.total}</strong></Grid.Column>
            <Grid.Column width={15}>
              <Button color="black">Checkout</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedProducts: state.addedProducts,
    total: state.total,
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

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
