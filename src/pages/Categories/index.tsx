import CategoriesBody from "../../components/categories/CategoriesBody";
import Header from "../../components/Layout/header/Header"
import Sidebar from "../../components/Layout/sidebar"
import './css/categories.css'


const Categories = () => {
  return (
    <div>
       <Header />
      <div className="categories_content container">
        <Sidebar />
       <CategoriesBody/>
      </div>
    </div>
  )
}

export default Categories