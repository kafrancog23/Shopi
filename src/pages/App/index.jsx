import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Account from '../Account'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../components/navbar'
import { ShoppingCartProvider } from '../../components/contextx'
import '../../index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/my-account', element: <Account/>},
    { path: '/my-order', element: <MyOrder/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/*', element: <NotFound/>},
  ])

  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider >
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;
