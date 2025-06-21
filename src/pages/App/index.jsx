import { useState, useContext } from 'react'
import { useRoutes, HashRouter, Navigate } from 'react-router-dom'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Account from '../Account'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import ForgotPassword from '../ForgotPassword'
import ResetPassword from '../ResetPassword'
import { ShoppingCartProvider } from '../../components/contextx'
import { ShopProvider, ShopContext } from '../../Context'
import CheckoutSideMenu from '../../components/checkoutSideMenu'
import '../../index.css'

const ProtectedRoute = ({ children }) => {
  const authContext = useContext(ShopContext)
  
  if (!authContext.account?.email) {
    return <Navigate to="/sign-in" />
  }

  return children
}

const AppRoutes = () => {
  let routes = useRoutes([
    { 
      path: '/', 
      element: (
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/my-account', 
      element: (
        <ProtectedRoute>
          <Account/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/my-order', 
      element: (
        <ProtectedRoute>
          <MyOrder/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/my-orders', 
      element: (
        <ProtectedRoute>
          <MyOrders/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/my-orders/last', 
      element: (
        <ProtectedRoute>
          <MyOrder/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/my-orders/:id', 
      element: (
        <ProtectedRoute>
          <MyOrder/>
        </ProtectedRoute>
      )
    },
    { path: '/sign-in', element: <SignIn/>},
    { path: '/sign-up', element: <SignUp/>},
    { path: '/forgot-password', element: <ForgotPassword/>},
    { path: '/reset-password', element: <ResetPassword/>},
    { path: '*', element: <NotFound/>},
    { 
      path: '/clothes', 
      element: (
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/electronics', 
      element: (
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/furniture', 
      element: (
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/toys', 
      element: (
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      )
    },
    { 
      path: '/others', 
      element: (
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      )
    },
  ])

  return routes;
}

const App = () => {
  return (
    <ShopProvider>
      <ShoppingCartProvider>
        <HashRouter>
          <AppRoutes />
          <CheckoutSideMenu />
        </HashRouter>
      </ShoppingCartProvider>
    </ShopProvider>
  )
}

export default App;
