import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLogin from "./Components/MainLogin"
import './index.css'
import AfterLogin from './Components/Afterlogin';
import Newac from './Components/Newac';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLogin />,
  },
  {
    path:"afterlogin",
    element:<AfterLogin/>
  },
  {
    path:"newac",
    element:<Newac/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
