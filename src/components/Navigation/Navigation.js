import { useAuth } from 'redux/auth/useAuth';
import { LoggedInNavigation, Original, PrivateLink } from './Navigation.styled';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <LoggedInNavigation>
      <Original to="/">Home</Original>
      {isLoggedIn && <PrivateLink to="/contacts">Contacts</PrivateLink>}
    </LoggedInNavigation>
  );
};
