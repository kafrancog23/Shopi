import Layout from "../../components/layout"
import Card from "../../components/card"
import ProductDetail from "../../components/productDetail/index"
import { useContext } from "react"
import { ShoppingCartContext } from "../../components/contextx"


function Home() {
    const context = useContext(ShoppingCartContext)
    const renderView = () => {
      if(context.filteredItems?.length > 0) {
        return context.filteredItems.map((item) => (
          <Card key={item.id} data={item} />
        ));
      }
      
      if(context.searchByTitle?.length > 0 || context.selectedCategory) {
        return <div className="flex items-center justify-center w-full text-2xl">No results found</div>;
      }
      return context.items?.map((item) => (
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