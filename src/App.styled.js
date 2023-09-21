import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  color: #fff;
  padding: 10px 15px;
  margin: 10px 0px 0px 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: darkblue;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;

  &.active {
    background-color: white;
    color: black;
    border-color: black;
  }
`;
