import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/auth/operations';
import { selectUserData } from 'redux/auth/selectors';
import { BtnLogout, EmailStyle, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const userEmail = userData ? userData.email : '';

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <Wrapper>
      <EmailStyle>{userEmail}</EmailStyle>
      <BtnLogout type="button" onClick={handleLogOut}>
        Log Out
      </BtnLogout>
    </Wrapper>
  );
};
