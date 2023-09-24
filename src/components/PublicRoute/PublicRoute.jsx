import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/selectors';

export default function PublicRoute() {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? <Navigate to={'/contacts'} replace /> : <Outlet />;
}
