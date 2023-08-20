import { Outlet, useLocation, Navigate } from "react-router-dom";
import { projectAuth } from "../firebase/config";
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    // keep the previous navigation stack
    <Navigate to="/authentication" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;