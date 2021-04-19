import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, List } from "semantic-ui-react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const jwt = useSelector((state) => state.user.jwt);

  useEffect(() => {
    fetch("http://localhost:4000/orders", {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((res) => {
        setOrders(res);
      });
  }, []);

  return (
    <Container>
      <Grid celled id="receipt">
        <Grid.Row>
          <Grid.Column width={15}>
            <h5 class="order-order">Your Order History:</h5>
          </Grid.Column>
          <ul className="collection"></ul>
          <List>
            
          </List>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default OrderHistory;
