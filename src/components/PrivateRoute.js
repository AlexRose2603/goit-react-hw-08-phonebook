import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
