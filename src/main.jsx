import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './media.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
