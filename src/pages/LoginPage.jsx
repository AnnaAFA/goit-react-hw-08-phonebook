import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUserThunk } from 'redux/auth/operations';
import { selectAuthenticated } from 'redux/auth/selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
    // console.log(finalUserData);
  };

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Login Into Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input name="userEmail" type="email" required />
        </label>
        <label>
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
