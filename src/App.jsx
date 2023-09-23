// import { AuthNav } from 'components/AuthNav/AuthNav';
import { Layout } from 'components/Layout/Layout';
// import { Loader } from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUserThunk } from 'redux/auth/operations';
import { selectAuthenticated, selectToken } from 'redux/auth/selectors';

// const HomePage = lazy(() => import('./pages/HomePage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authenticated = useSelector(selectAuthenticated);

  useEffect(() => {
    if (!token || authenticated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authenticated]);

  // const handleLogOut = () => {
  //   dispatch(logoutUserThunk());
  // };

  return (
    <div>
      {/* <header> */}
      {/* <nav> */}
      {/* <NavLink to="/">Home</NavLink> */}
      {/* {authenticated ? ( */}
      {/* <> */}
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
      {/* <button onClick={handleLogOut}>Log Out</button> */}
      {/* </> */}
      {/* ) : ( */}
      {/* <> */}
      {/* <AuthNav /> */}
      {/* </> */}
      {/* )} */}
      {/* </nav> */}
      {/* </header> */}
      {/* <main> */}
      {/* <Suspense fallback={<Loader />}> */}
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {/* </Suspense>
      </main> */}
    </div>
  );
};
