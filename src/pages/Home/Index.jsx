import Layout from "../../components/layout"
import Card from "../../components/card"
import ProductDetail from "../../components/productDetail/index"
import { useContext } from "react"
import { Navigate } from 'react-router-dom'
import { ShoppingCartContext } from "../../components/contextx"
import { ShopContext } from "../../Context"


function Home() {
    const context = useContext(ShoppingCartContext)
    const authContext = useContext(ShopContext)

    if (!authContext.account?.email) {
        return <Navigate to="/sign-in" />
    }

    const renderView = () => {
      if (!context.items) {
        return (
          <div className="flex items-center justify-center w-full text-2xl">
            Loading products...
          </div>
        );
      }

      const itemsToRender = context.filteredItems || context.items;
      
      if (itemsToRender.length === 0) {
        if (context.searchByTitle || context.selectedCategory) {
          return (
            <div className="flex items-center justify-center w-full text-2xl">
              No results found
            </div>
          );
        } else {
          return (
            <div className="flex items-center justify-center w-full text-2xl">
              No products available
            </div>
          );
        }
      }

      return itemsToRender.map((item) => (
        <Card key={item.id} data={item} />
      ));
    }
    
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6">
          <h1 className="font-medium text-xl">Home</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search" 
          className="w-80 mb-6 rounded-lg border border-black p-2 focus:outline-none"
          onChange={(e) => {
            context.setSearchByTitle(e.target.value);
          }}
        />
        <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg mx-auto">
          {renderView()}
        </div>
        <ProductDetail/>
      </Layout>
    )
  }
  export default Home