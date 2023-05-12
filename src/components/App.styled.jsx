import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
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
`;
export const Original = styled(Link)`
  text-decoration: none;
  margin-right: auto;
  font-family: 'Dancing Script', cursive;
  font-size: 28px;
  color: white;
`;
export const UserLink = styled(Link)`
  text-decoration: none;
  font-family: 'Dancing Script', cursive;
  font-size: 28px;
  color: white;
`;
