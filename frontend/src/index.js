import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import AddItem from './AddItem'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import OrderForm from './orderForm';
import Confirmation from './Confirmation';
// import { Navigate } from "react-router-dom";

import LogInForm from './login';
import Login from './login';
import Profile from './profile';
import BakeryIndex from './bakeryIndex';
import Orders from './orders';

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
    path: '/addItem',
    element: <AddItem />
  },

  {
    path: '/Confirmation',
    element: <Confirmation />
  },
   { path: '/login',
    element: <LogInForm />
  {
    path: '/addItem',
    element: <AddItem />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/bakeryindex',
    element: <BakeryIndex/>
  },
  {
    path: '/orders',
    element: <Orders/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);