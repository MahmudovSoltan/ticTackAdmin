import { useEffect, useState } from "react"
import Header from "../../components/Layout/header/Header"
import Sidebar from "../../components/Layout/sidebar"
import ProdutcsBody from "../../components/products/ProdutcsBody"
import "./css/product.css"
import type { Product } from "../../types/Types"
import { useProductStore } from "../../store/productStore"
const productst: [] = [
  {
    no: 1,
    date: "2025-06-19",
    desc: "Alma",
    content: "Qırmızı alma, təzə və şirin",
  },
  {
    no: 2,
    date: "2025-06-18",
    desc: "Pomidor",
    content: "Təbii yetişmiş pomidor, salatlar üçün",
  },
  {
    no: 3,
    date: "2025-06-17",
    desc: "Xiyar",
    content: "Uzun xiyar, sərin və təzə",
  },
  {
    no: 4,
    date: "2025-06-16",
    desc: "Banan",
    content: "Rəngli sarı banan, enerjili qəlyanaltı",
  },
  {
    no: 5,
    date: "2025-06-15",
    desc: "Kök",
    content: "Təzə kök, şirəli və sağlam",
  },
];


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
        <ProdutcsBody products={products} />
      </div>
    </div>
  )
}

export default Products