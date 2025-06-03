import { useContext } from 'react'
import { ShoppingCartContext } from '../../components/contextx'
import Layout from '../../components/layout'
import OrderCard from '../../components/OrderCard'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last' || index === '' || index === 'Shopi') {
    index = Math.max(0, (context.order?.length || 1) - 1);
  } else {
    index = parseInt(index) || 0;
  }

  return (
    <Layout>
      <div className="flex w-80 items-center">
        <Link to="/my-orders" className="flex items-center gap-24 pb-3">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          <h1 className="font-medium text-xl">My Order</h1>
        </Link>
      </div>
      <div className='flex flex-col w-80'>
        {context.order?.[index]?.products?.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  )
}

export default MyOrder