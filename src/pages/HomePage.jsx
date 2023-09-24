import { Home, Title } from 'components/UserMenu/UserMenu.styled';
import React from 'react';
import { BsTelephonePlus } from 'react-icons/bs';

const HomePage = () => {
  return (
    <Home>
      <Title>
        Welcome to PhoneBook <BsTelephonePlus />
      </Title>
    </Home>
  );
};

export default HomePage;
