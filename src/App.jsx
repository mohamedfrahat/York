import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';

// Lazy load components
const Split = lazy(() => import('./Components/Split/Split'));
const Window = lazy(() => import('./Components/Window/Window'));
const SingleProduct = lazy(() => import('./Components/SingleProduct/SingleProduct'));
const FreeStand = lazy(() => import('./Components/FreeStand/FreeStand'));
const DuctedSplit = lazy(() => import('./Components/DuctedSplit/DuctedSplit'));
const Packaged = lazy(() => import('./Components/Packaged/Packaged'));
const AirCurtains = lazy(() => import('./Components/AirCurtains/AirCurtains'));

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
      { path: '/Cart', element: <Cart /> },
      { path: '/Wishlist', element: <Wishlist /> },
      { path: '/SingleProduct/:id', element: <SingleProduct /> },
    ]
  }]);

  return (
    <div>
      <Suspense >
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </div>
  );
}
