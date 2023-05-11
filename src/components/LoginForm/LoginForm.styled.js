import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 500px;
  margin-top: 100px;
  border: 2px solid white;
  background: rgba(179, 139, 181, 0.28);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);
  border: 1px solid rgba(179, 139, 181, 0.3);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 30px;
  color: white;
  font-family: 'Dancing Script', cursive;
`;

export const Input = styled.input`
  padding: 10px;
  width: 200px;
  margin-bottom: 15px;
  background: rgba(207, 209, 218, 0.47);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid white;
  outline: #8893c378;
`;

export const Btn = styled.button`
  font-family: 'Dancing Script', cursive;
  padding: 10px 20px;
  font-size: 28px;
  color: white;
  margin-top: 40px;
  cursor: pointer;
  background: rgba(95, 103, 140, 0.47);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid white;
  &:hover {
    background: rgba(136, 147, 195, 0.47);
  }
`;
