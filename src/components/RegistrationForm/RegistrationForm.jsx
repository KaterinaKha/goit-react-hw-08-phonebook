import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(registerUserThunk({ name, email, password }));
    form.reset();
  };

  return (
    <Container style={{ marginTop: '40px' }}>
      <Card style={{ padding: '20px' }}>
        <Card.Title className="text-center">Register Your Account</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              required
              placeholder="Name"
            />
          </Form.Group>

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
              placeholder="Password"
              minLength={8}
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
