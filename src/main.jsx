import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Todolist from './todolist/Todolist.jsx';
import Counter from './counter/Counter.jsx';
import Debounce from './debounce/Debounce.jsx';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/todolist',
    element: <Todolist />,
  },
  {
    path: '/debounce',
    element: <Debounce />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
