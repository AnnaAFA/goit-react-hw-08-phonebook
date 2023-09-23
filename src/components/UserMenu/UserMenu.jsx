import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/auth/operations';
import { selectUserData } from 'redux/auth/selectors';

export const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const userEmail = userData ? userData.email : '';
  //   console.log(userData);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <div>
      <p>{userEmail}</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};
