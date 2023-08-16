import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const authentificated = useSelector(selectAuthentificated);
  return authentificated ? (
    <Container style={{ marginTop: '40px' }}>
      <h1 className="text-center">Welcome to your PhoneBook</h1>
    </Container>
  ) : (
    <Container>
      <h1 style={{ marginTop: '40px' }} className="text-center">
        Welcome to PhoneBook
      </h1>
      <h3 style={{ marginTop: '40px' }} className="text-center">
        Please, register and create your contact book
      </h3>
    </Container>
  );
};

export default HomePage;
