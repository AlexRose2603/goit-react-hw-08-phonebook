import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { HomePage } from 'pages/home/Home';
import { LoginPage } from 'pages/login/Login';
import { RegisterPage } from 'pages/register/Register';
import { Contacts } from 'pages/contacts/Contacts';
import { Navigation, Original, UserLink } from './App.styled';
import { useAuth } from 'redux/auth/useAuth';
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Navigation>
        <Original to="/">Home</Original>
        <UserLink to="/register">Registration</UserLink>
        <UserLink to="/login">Login </UserLink>
      </Navigation>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Routes>
      )}
    </>
  );
};
