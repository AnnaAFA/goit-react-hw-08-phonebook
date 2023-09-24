import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/selectors';

const RegisterPage = () => {
  const authenticated = useSelector(selectAuthenticated);

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
