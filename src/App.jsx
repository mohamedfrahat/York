import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Split from './Components/Split/Split'
import Window from './Components/Window/Window'
import SingleProduct from './Components/SingleProduct/SingleProduct'
import FreeStand from './Components/FreeStand/FreeStand'
import DuctedSplit from './Components/DuctedSplit/DuctedSplit'
import Packaged from './Components/Packaged/Packaged'
import AirCurtains from './Components/AirCurtains/AirCurtains'


export default function App() {

  let router = createBrowserRouter([{
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '/Split', element: <Split /> },
      { path: '/Window', element: <Window /> },
      { path: '/FreeStand', element: <FreeStand /> },
      { path: '/DuctedSplit', element: <DuctedSplit /> },
      { path: '/Packaged', element: <Packaged /> },
      { path: '/AirCurtains', element: <AirCurtains /> },
      { path: '/SingleProduct/:id', element: <SingleProduct /> },

     

    ]

  }])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
