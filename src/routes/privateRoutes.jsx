import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/lib/context/auth';
import WithErrorBoundary from '@/lib/hoc/errorBoundary';

const PrivateRoute = ({children}) => {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const RouteWrapper = ({ component: Component, ...props }) => {
    return (
      <PrivateRoute>
        <Component {...props} />
      </PrivateRoute>
    );
  };

export default WithErrorBoundary(RouteWrapper);