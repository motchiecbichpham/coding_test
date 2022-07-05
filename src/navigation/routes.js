import React from 'react';
import DashboardPage from '../pages/dashboard/DashboardPage';
import LoginPage from '../pages/auth/LoginPage';

export const mainRoutes = [
  {name: 'Login', component: LoginPage},
  {name: 'Dashboard', component: DashboardPage},
];
