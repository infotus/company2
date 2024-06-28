import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Contact from "../src/components/Pages/Contact/Contact.jsx"
import Home from "../src/components/Pages/Home/Home.jsx"
import Applayout from './components/Applayout/Applayout.jsx'
import Projects from "../src/components/Pages/Projects/Projects.jsx" 
import NoeTalk from '../src/components/Pages/Noe-Talk/ProjectNoe.jsx'
 
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
        path: "projects",
        element: <Projects />,
      },
      {
        path: "noe-talk",
        element: <NoeTalk />,
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
