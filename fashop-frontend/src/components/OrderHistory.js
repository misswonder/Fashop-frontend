import React from "react";
import { Container, Grid, List } from "semantic-ui-react";

const OrderHistory = () => {
  return (
    <Container>
      <Grid celled id="receipt">
        <Grid.Row>
          <Grid.Column width={15}>
            <h5 class="order-order">Your Order History:</h5>
          </Grid.Column>
          <ul className="collection"></ul>
          <List></List>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default OrderHistory;
