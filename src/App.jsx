import { useState } from 'react'
// import './App.css'
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom"
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound Page/NotFound'


function App() {

  const router = createHashRouter([

    {
      path: "",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "portfolio",
          element: <Portfolio/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "*",
          element: <NotFound/>
        }
      ]
    }

  ])




  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
