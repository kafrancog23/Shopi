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
import CheckoutSideMenu from '../../components/checkoutSideMenu'
import '../../index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/my-account', element: <Account/>},
    { path: '/my-order', element: <MyOrder/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/my-orders/last', element: <MyOrder/>},
    { path: '/my-orders/:id', element: <MyOrder/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/*', element: <NotFound/>},
    { path: '/clothes', element: <Home/>},
    { path: '/electronics', element: <Home/>},
    { path: '/furniture', element: <Home/>},
    { path: '/toys', element: <Home/>},
    { path: '/others', element: <Home/>},
  ])

  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider >
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;
