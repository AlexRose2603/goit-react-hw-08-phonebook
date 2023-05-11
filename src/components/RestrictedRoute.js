import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
