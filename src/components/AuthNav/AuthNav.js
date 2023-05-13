import { Link, Section } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Section>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Section>
  );
};
