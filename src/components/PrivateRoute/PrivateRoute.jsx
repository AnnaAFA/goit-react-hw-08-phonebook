import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
