import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuth } = useSelector((state) => state.auth.isLoggedIn);
  return isAuth ? <Navigate to="/" /> : <Navigate to="/login" />;
};

export default PrivateRoute;
