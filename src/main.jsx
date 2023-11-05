import React from 'react'
import ReactDOM from 'react-dom/client'

import {
 
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MyRouter from './Router/Router.jsx';
import Authprovider from './Firebase/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
    <RouterProvider router={MyRouter} ></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
