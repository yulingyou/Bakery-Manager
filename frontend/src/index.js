import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import AddItem from './Items/AddItem'
import Signup from './User/Signup';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import OrderForm from './OrderForm/orderForm';
import Confirmation from './Confirmation';
// import { Navigate } from "react-router-dom";
import LogInForm from './User/login';
import Profile from './User/profile';
import BakeryIndex from './User/bakeryIndex';
import Orders from './OrderForm/orders';

// const storage = localStorage.getItem('user')
// console.log('this is storage', storage)
console.log('this is user from Index', window.localStorage.getItem('user'))
const user = window.localStorage.getItem('user')

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
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
  },
  
  {
    path: '/addItem',
    element:  user === 'customer' ? <AddItem /> : <App />
    // element: <AddItem />
  },
  {
    path: '/signup',
    element: <Signup />
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