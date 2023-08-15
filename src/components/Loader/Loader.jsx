import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => {
  return (
    <>
      <Spinner variant="info" animation="grow" size="sm" />
      <Spinner variant="info" animation="grow" />
      <Spinner variant="info" animation="grow" size="sm" />
    </>
  );
};

export default Loader;
