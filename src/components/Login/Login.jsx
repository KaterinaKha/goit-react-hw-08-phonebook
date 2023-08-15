import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(loginUserThunk({ email, password }));
    form.reset();
  };

  return (
    <Container style={{ marginTop: '40px' }}>
      <Card style={{ padding: '20px' }}>
        <Card.Title className="text-center">Login Into Your Account</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="userEmail"
              type="email"
              required
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="userPassword"
              type="password"
              required
              minLength={8}
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Log In
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
