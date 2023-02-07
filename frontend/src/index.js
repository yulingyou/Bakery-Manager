import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import OrderForm from './orderForm';
<<<<<<< HEAD
import Confirmation from './confirmation';
=======
// import { Navigate } from "react-router-dom";

import LogInForm from './login';
>>>>>>> origin/main

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
    path: '/orderform',
    element: <OrderForm />
  },
  {
<<<<<<< HEAD
    path: '/confirmation',
    element: <Confirmation />
=======
    path: '/login',
    element: <LogInForm />
>>>>>>> origin/main
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);