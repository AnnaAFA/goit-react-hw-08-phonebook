import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

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

  return (
    <div>
      <h1>Login Into Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input
            name="userEmail"
            type="email"
            pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
            required
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            name="userPassword"
            type="password"
            pattern="^[a-zA-Z0-9!@#$%^&*\(\)\-_=+`~\[\]\{\}\|:<>\/?]+$"
            title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            required
            minLength={7}
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
