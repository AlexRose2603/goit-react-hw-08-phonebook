import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoggedInNavigation = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin: 20px auto 0;
  padding: 15px;
  width: 800px;
  background: rgba(230, 206, 234, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(230, 206, 234, 0.3);
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
`;
export const Original = styled(NavLink)`
  text-decoration: none;
  margin-right: auto;
  color: white;
  &.active {
    color: #fa8072;
  }
`;
export const PrivateLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: #fa8072;
  }
`;
