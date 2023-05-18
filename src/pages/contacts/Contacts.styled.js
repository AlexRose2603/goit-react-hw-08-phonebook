import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 15px;
  }
`;
export const Title = styled.h1`
  letter-spacing: 1.3px;
  font-size: 36px;
  color: white;
  font-family: 'Dancing Script', cursive;
`;

export const Section = styled.h2`
  color: white;
  font-size: 38px;
  font-family: 'Dancing Script', cursive;
`;

export const Total = styled.div`
  border: 2px solid white;
  font-family: 'Dancing Script', cursive;
  margin: 30px auto;
  padding: 15px 20px;
  width: 300px;
  font-size: 28px;
  text-align: center;
  background: rgba(73, 164, 135, 0.43);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.4px);
  -webkit-backdrop-filter: blur(4.4px);
  border: 1px solid rgba(73, 164, 135, 0.3);
`;
