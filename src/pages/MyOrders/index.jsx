import Layout from "../../components/layout"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../components/contextx"
import OrdersCard  from "../../components/OrdersCards/OrdersCard"

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
          { 
            context.order?.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                  key={order.id}
                  totalProducts={order.totalProducts}
                  totalPrice={order.totalPrice}
                  date={order.date}
                />
              </Link>
            ))
          }
      </Layout>
    )
  }

  export default MyOrders