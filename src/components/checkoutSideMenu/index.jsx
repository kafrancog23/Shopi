import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../contextx'
import OrderCard from '../OrderCard'
import { totalPrice } from '../utils'
import './index.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cart.filter(product => product.id !== id)
    context.setCart(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: context.cart,
      totalProducts: context.cart.length,
      totalPrice: totalPrice(context.cart)
    }


    context.setOrder([...context.order, orderToAdd])
    context.setCart([])
    context.setCount(0)
    context.setSearchByTitle(null);
    context.CloseCheckoutSideMenu()
  }

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi Orden</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.CloseCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cart?.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cart)}</span>
        </p>
        <Link to="/my-orders/last">
          <button className="bg-black py-3 text-white w-full rounded-lg" 
          onClick={() => {
            handleCheckout()
            context.CloseCheckoutSideMenu()}}
            >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu