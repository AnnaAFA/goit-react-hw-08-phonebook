import { StyledNavLink } from 'App.styled';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { logoutUserThunk, refreshUserThunk } from 'redux/auth/operations';
import { selectAuthenticated, selectToken } from 'redux/auth/selectors';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authenticated = useSelector(selectAuthenticated);

  useEffect(() => {
    if (!token || authenticated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authenticated]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authenticated ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback="Loading...">
          {/* <Loader /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};