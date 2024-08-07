import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App';
import Cadastro from './pages/Cadastro';
import Salas from './salas';

import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider, Route  } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/register',
    element: <Cadastro />
  },
  {
    path: '/rooms',
    element: <Salas />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#730007'
      },
    }}>
    <RouterProvider router={router}/>
    </ConfigProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();