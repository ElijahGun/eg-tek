import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import { Root } from './root';
import ProductHero from './components/product-hero/product-hero';
import { ErrorPage } from './components/error-page/error-page';
import Laptops from './routes/laptops/laptops';
import SignIn from './components/sign-in/sign-in';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductHero />,
        errorElement: <ErrorPage />
      },
      {
        path: 'shop',
        element: <div>this is the shop page</div>
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'cart',
        element: <h1>buy everything!</h1>
      },
      {
        path: 'laptops',
        element: <Laptops />,
        children: [
          {
            path: 'macbook',
            element: <h1>macbook all the way!</h1>
          }
        ]
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
