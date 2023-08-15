import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/selectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authentificated = useSelector(selectAuthentificated);
  return authentificated ? children : <Navigate to={redirectTo} />;
};
