import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const VerifySession: React.FC = () => {
  const { user } = useAuth();

  const location = useLocation();

  return user ? <Navigate to="/dashboard" state={location} /> : <Outlet />;
};

export default VerifySession;
