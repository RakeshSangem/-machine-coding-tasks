import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Todolist from './todolist/Todolist.jsx';
import Counter from './counter/Counter.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/counter', element: <Counter /> },
  { path: '/todolist', element: <Todolist /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
