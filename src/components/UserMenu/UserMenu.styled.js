import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 20px auto;
  padding: 0;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 750px;
  }
`;

export const Greeting = styled.h2`
  text-decoration: none;
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  color: #161938;
`;

export const LogoutBtn = styled.button`
  font-family: 'Dancing Script', cursive;
  padding: 10px 20px;
  font-size: 28px;
  color: white;
  cursor: pointer;
  background: rgba(95, 103, 140, 0.47);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid white;
  &:hover {
    background: rgba(136, 147, 195, 0.47);
    color: #0e1232;
  }
`;
