import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";

function SignupForm() {
  const Signup = () => {
    const dispatch = useDispatch();

    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter a Name"
              onChange={(e) =>
                dispatch({
                  type: "SET_NAME_INPUT",
                  text: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              placeholder="Enter a Age"
              onChange={(event) => this.setState({ age: event.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter an Email"
              onChange={(e) =>
                dispatch({
                  type: "SET_EMAIL_INPUT",
                  text: e.target.value,
                })
              }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Enter a Password"
              onChange={(e) =>
                dispatch({
                  type: "SET_PASSWORD_INPUT",
                  password: e.target.value,
                })
              }
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    );
  };
}
export default SignupForm;