import { useEffect, useState } from "react"
import Header from "../../components/Layout/header/Header"
import Sidebar from "../../components/Layout/sidebar"
import ProdutcsBody from "../../components/products/ProdutcsBody"
import "./css/product.css"
import { useProductStore } from "../../store/productStore"



const Products = () => {


  const {
    products,
    fetchAllProducts
    // assuming this is the function to open the modal
  } = useProductStore();
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      await fetchAllProducts()
      setLoading(false)
    }
    getProducts()
  }, [])
  return (
    <div className="">
      <Header />
      <div className="content container">
        <Sidebar />
        <ProdutcsBody products={products ?? []} loading={loading} />
      </div>
    </div>
  )
}

export default Products