import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';

const HomePage = () => {
  const authentificated = useSelector(selectAuthentificated);
  return authentificated ? (
    <h1>Welcome to your PhoneBook</h1>
  ) : (
    <>
      <h1>Welcome to PhoneBook</h1>
      <h1>Please, register and create your contact book</h1>
    </>
  );
};

export default HomePage;
