import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    // const finalUserData = {
    //   name,
    //   email,
    //   password,
    // };
    // dispatch
    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
    // console.log(finalUserData);
  };

  return (
    <div>
      <h1>Register Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="userName" type="text" required minLength={2} />
        </label>
        <label>
          <p>Email:</p>
          <input name="userEmail" type="email" required />
        </label>
        <label>
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
