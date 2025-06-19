import Header from "../../components/Layout/header/Header"
import Sidebar from "../../components/Layout/sidebar"
import "./css/product.css"
const Products = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
      </div>
    </div>
  )
}

export default Products