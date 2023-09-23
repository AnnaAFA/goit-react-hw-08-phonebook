import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthenticated, selectIsRefreshing } from 'redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authenticated = useSelector(selectAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);

  // return authenticated ? children : <Navigate to={redirectTo} />;
  const shouldRedirect = !authenticated && !isRefreshing;

  // return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  return shouldRedirect ? <Navigate to={'/login'} replace /> : <Outlet />;
};

export default PrivateRoute;
