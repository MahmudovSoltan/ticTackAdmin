import { useEffect } from "react"
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
  console.log(products);
  useEffect(() => {
    fetchAllProducts()
  }, [])
  return (
    <div className="">
      <Header />
      <div className="content container">
        <Sidebar />
        <ProdutcsBody products={products ?? []} />
      </div>
    </div>
  )
}

export default Products