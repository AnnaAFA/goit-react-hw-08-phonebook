// import { AuthNav } from 'components/AuthNav/AuthNav';
import { Layout } from 'components/Layout/Layout';
import { Loader } from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUserThunk } from 'redux/auth/operations';
import {
  selectAuthenticated,
  selectIsRefreshing,
  selectToken,
} from 'redux/auth/selectors';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authenticated = useSelector(selectAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (!token || authenticated) return;

    dispatch(refreshUserThunk());
  }, [authenticated, dispatch, token]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="" element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
