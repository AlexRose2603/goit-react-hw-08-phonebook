import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/auth/useAuth';
import { Wrapper, Greeting, LogoutBtn } from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Greeting>Welcome, {user.name}</Greeting>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogoutBtn>
    </Wrapper>
  );
};
