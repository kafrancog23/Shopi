import { useState } from 'react'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Account from '../Account'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import '../../index.css'

function App() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-8 bg-red-100">
        Bienvenido a Shopi
      </h1>
      <Home/>
      <Account/>
      <MyOrder/>
      <MyOrders/>
      <SignIn/>
      <NotFound/>
    </div>
  )
}
export default App
