import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Dancing Script', cursive;
  font-size: 28px;
  color: white;
  &.active {
    color: #fa8072;
  }
`;
