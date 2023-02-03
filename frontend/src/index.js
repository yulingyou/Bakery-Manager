import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Login from './login';
import Profile from './profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/ABC',
    element: <h2>THIS IS AN EXAMPLE</h2>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/profile',
    element: <Profile/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
