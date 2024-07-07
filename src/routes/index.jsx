import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RouteWrapper from './privateRoutes';

const publicRoutes = [
  {
    path: '/',
    element: <h1>Home page...</h1>,
  },
  {
    path: '/login',
    element: <h1>Login page...</h1>,
  },
];

const Profile = () => {
  return (
    <React.Fragment>
      <h1>Profile page...</h1>
    </React.Fragment>
  );
}

const Dashboard = () => {
  return (
    <React.Fragment>
      <h1>Dashboard page...</h1>
    </React.Fragment>
  );
}

const privateRoutes = [
    {
      path: '/dashboard',
      element: <RouteWrapper component={Dashboard} />,
    },
    {
      path: '/profile',
      element: <RouteWrapper component={Profile} />,
    },
    {
      path: '/settings',
      element: <RouteWrapper component={<h1>Settings page...</h1>} />,
    },
  ];

const router = createBrowserRouter([...publicRoutes,...privateRoutes]);

export default router;