import { UserLink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <>
      <UserLink to="/register">Registration</UserLink>
      <UserLink to="/login">Log in</UserLink>
    </>
  );
};
