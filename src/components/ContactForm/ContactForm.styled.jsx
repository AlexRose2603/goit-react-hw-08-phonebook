import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
`;
export const Number = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NameField = styled.label`
  font-size: 30px;
  color: #5c6290;
  font-family: 'Dancing Script', cursive;
`;

export const NameInput = styled.input`
  padding: 10px;
  border-radius: 1rem;
  background: #e8e8e8;
  box-shadow: 2px 2px 7px #c5c5c5, -2px -2px 7px #6e8dbf;
  transition: 0.3s;
  border-width: 0;

  &:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 10px 10px 30px #c5c5c5, inset -10px -10px 30px #6e8dbf;
    transition: 0.3s;
  }
`;

export const NumberField = styled.label`
  font-size: 30px;
  color: #5c6290;
  font-family: 'Dancing Script', cursive;
`;

export const NumberInput = styled.input`
  border: none;
  padding: 10px;
  border-radius: 1rem;
  background: #e8e8e8;
  box-shadow: 2px 2px 10px #c5c5c5, -2px -2px 10px #6e8dbf;
  transition: 0.3s;

  &:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 10px 10px 30px #c5c5c5, inset -10px -10px 30px #6e8dbf;
    transition: 0.3s;
  }
`;

export const Button = styled.button`
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
  border: 1px solid white;
  &:hover {
    background: rgba(136, 147, 195, 0.47);
    color: #0e1232;
  }
`;
