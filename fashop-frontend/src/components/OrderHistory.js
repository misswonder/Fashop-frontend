import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, List, Header } from "semantic-ui-react";
import { format } from "date-fns";

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
        console.log(setOrders);
      });
  }, []);

  return (
    <Container>
      <br></br>
      <br></br>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2" textAlign="center">
              Your Order History:
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br></br>
      <br></br>
      <Container>
        <ul className="collection">
          {orders.map((order) => {
            let ordered_at = order.ordered_at;
            let order_items = order.order_items;
            if (order.length === 0) {
              return (
                <h4>
                  <strong>You have no Order History</strong>
                </h4>
              );
            }
            return (
              <List key={order.id}>
                {order_items.map((item) => {
                  return (
                    <div className="order-item">
                      <img
                        src={item.product.image}
                        alt={item.product.image}
                        className="order-item-img"
                      />
                      <div>
                        <span>
                          <h4>Product: {item.product.name}</h4>
                        </span>
                        <div>
                          <br></br>
                          <p>
                            <b>Price: {item.price}</b>
                          </p>

                          <p>
                            <b>Quantity: {item.quantity}</b>
                          </p>
                          <p>
                            <b>Subtotal: {item.subtotal}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <br></br>
                <p>
                  <b> Total: {order.total.toFixed(2)} </b>
                </p>
                <p>
                  <b>
                    {" "}
                    Ordered_at: {format(
                      new Date(ordered_at),
                      "MM/dd/yyyy"
                    )}{" "}
                  </b>
                </p>{" "}
                <br></br>
                <br></br>
              </List>
            );
          })}
        </ul>
      </Container>
    </Container>
  );
};

export default OrderHistory;
