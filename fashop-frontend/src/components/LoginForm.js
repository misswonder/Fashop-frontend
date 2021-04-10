import React from "react";
import { Button, Form, Segment, Divider, Grid } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { useState } from "react";

const BASE_URL = "http://127.0.0.1:4000/api/v1";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const Login = (e) => {
    e.preventDefault();

    let reqObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    };

    fetch(`${BASE_URL}/login`, reqObj)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        dispatch({
          type: "LOGIN",
          payload: data,
        });
      })
      .catch(() => {
        setError("Invalid email or password");
      });

    // e.target.reset();
    // setEmail("");
    // setPassword("");

  };

  return (
    <div class="ui compact segment">
      <Segment placeholder size="medium">
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form className="login" onSubmit={Login}>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error}
              <Button content="Login" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button content="Sign up" icon="signup" size="big" />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  );
}
export default LoginForm;
