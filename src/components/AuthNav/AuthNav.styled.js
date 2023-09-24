import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  margin: 10px 0px 0px 10px;
  border-radius: 50px;
  background-color: white;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;

  &.active {
    background-color: #8b59e7;
    color: white;
    border-color: black;
  }
  &:hover {
    background-color: rgb(30, 144, 255);
    color: white;
    border-color: black;
  }
`;
