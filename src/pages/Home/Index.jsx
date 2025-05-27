import Layout from "../../components/layout"
import Card from "../../components/card"
import {useState, useEffect} from "react"


function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(error => console.log(error))
    }, [])

    return (
      <Layout>
          Home
          <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg mx-auto">
          {
            items ?.map((item) => {
              return (
                <Card key={item.id} data={item} />
              )
            })
          }
          </div>
      </Layout>
    )
  }
  export default Home