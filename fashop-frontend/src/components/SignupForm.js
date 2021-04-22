import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch } from "react-redux";

const BASE_URL = "http://127.0.0.1:4000/api/v1";

function SignupForm({ login }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();

    let reqObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          name: name,
          age: age,
          email: email,
          password: password,
        },
      }),
    };

    fetch(`${BASE_URL}/signup`, reqObj)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((data) => {
        login(data);
      });

    e.target.reset();
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={signUp} autocomplete='off'>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="age"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  );
}

export default SignupForm;
