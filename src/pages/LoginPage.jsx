import { Login } from 'components/Login/Login';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/selectors';

const LoginPage = () => {
  const authentificated = useSelector(selectAuthentificated);

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
