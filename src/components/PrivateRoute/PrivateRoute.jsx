import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthenticated, selectIsRefreshing } from 'redux/auth/selectors';

export default function PrivateRoute() {
  const authenticated = useSelector(selectAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !authenticated && !isRefreshing;

  return shouldRedirect ? <Navigate to={'/login'} replace /> : <Outlet />;
}
