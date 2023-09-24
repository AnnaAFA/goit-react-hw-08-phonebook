import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/auth/operations';
import {
  BtnStyle,
  InputStyle,
  StyledForm,
  Text,
  Wrap,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };
  return (
    <Wrap>
      <Text>Register Your Account</Text>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <InputStyle
            name="userName"
            type="text"
            pattern="^[^\d]+$"
            title="Name must contain only letters, apostrophes, hyphens and indents"
            required
            minLength={2}
          />
        </label>
        <label>
          <p>Email:</p>
          <InputStyle
            name="userEmail"
            type="email"
            pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
            required
          />
        </label>
        <label>
          <p>Password:</p>
          <InputStyle
            name="userPassword"
            type="password"
            pattern="^[a-zA-Z0-9!@#$%^&*\(\)\-_=+`~\[\]\{\}\|:<>\/?]+$"
            title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            required
            minLength={7}
          />
        </label>
        <BtnStyle type="submit">Sign Up</BtnStyle>
      </StyledForm>
    </Wrap>
  );
};
