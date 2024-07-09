import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Contact from "../src/components/Pages/Contact/Contact.jsx"
import Home from "../src/components/Pages/Home/Home.jsx"
import Applayout from './components/Applayout/Applayout.jsx'
import ProjectNoe from './components/Pages/Noe-Talk/ProjectNoe.jsx'
import About from './components/Pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/noe-talk",
        element: <ProjectNoe />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
