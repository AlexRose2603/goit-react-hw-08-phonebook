import styled from '@emotion/styled';

export const Container = styled.div`
  margin: auto;
  width: 350px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
  min-height: 300px;
`;

export const Name = styled.p`
  margin-left: 15px;
  color: white;
`;
export const Number = styled.p`
  color: white;
`;
export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  background: rgba(73, 164, 135, 0.43);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.4px);
  -webkit-backdrop-filter: blur(4.4px);
  border: 1px solid rgba(73, 164, 135, 0.3);
`;

export const DeleteBtn = styled.button`
  border-width: 0;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  background: rgba(136, 147, 195, 0.47);
  cursor: pointer;
  border: 1px solid white;
  &:hover,
  &:focus {
    background: #d4bfd1;
  }
`;
