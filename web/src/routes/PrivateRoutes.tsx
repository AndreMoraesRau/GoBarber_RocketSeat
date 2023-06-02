import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const PrivateRoutes: React.FC = () => {
  const { user } = useAuth();

  const location = useLocation();

  return user ? <Outlet /> : <Navigate to="/" state={location} />;
};

export default PrivateRoutes;
