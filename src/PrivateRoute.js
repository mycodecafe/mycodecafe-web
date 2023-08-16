// PrivateRoute.js
import React from 'react';
import { Route, Navigate,  Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ element: Element, ...rest }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

