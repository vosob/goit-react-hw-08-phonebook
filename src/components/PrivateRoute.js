import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthToken } from '../../src/redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectAuthToken);

  return token ? children : <Navigate to="/login" />;
};
