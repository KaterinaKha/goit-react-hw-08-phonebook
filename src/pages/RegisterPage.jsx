import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/selectors';

const RegisterPage = () => {
  const authentificated = useSelector(selectAuthentificated);

  if (authentificated) return <Navigate to="/contacts" />;
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
