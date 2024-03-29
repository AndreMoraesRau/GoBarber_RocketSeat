import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import PrivateRoutes from './PrivateRoutes';
import VerifySession from './VerifySession';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route element={<VerifySession />}>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Route>

    <Route element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);

export default AppRoutes;
