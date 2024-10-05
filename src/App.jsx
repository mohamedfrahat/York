import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Split from './Components/Split/Split'
import Window from './Components/Window/Window'
import SingleProduct from './Components/SingleProduct/SingleProduct'


export default function App() {

  let router = createBrowserRouter([{
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '/Split', element: <Split /> },
      { path: '/Window', element: <Window /> },
      { path: '/SingleProduct/:id', element: <SingleProduct /> },

     

    ]

  }])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
