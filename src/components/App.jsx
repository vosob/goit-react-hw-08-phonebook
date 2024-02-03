import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../src/redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { selectFetchingCurrentUser } from '../redux/auth/selectors';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const FormRegister = lazy(() => import('../pages/Register/Register'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectFetchingCurrentUser);
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !isFetchingCurrentUser && (
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <FormRegister />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute redirectRoute={'/contact'} restricted>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    )
  );
};
