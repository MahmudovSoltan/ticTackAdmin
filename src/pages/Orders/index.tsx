import Header from '../../components/Layout/header/Header'
import Sidebar from '../../components/Layout/sidebar'
import OrdersBody from '../../components/orders/OrdersBody'
import './css/order.css'

const Orders = () => {
  return (
   <div className="">
      <Header />
      <div className="order_content container">
        <Sidebar />
        <OrdersBody />
      </div>
    </div>
  )
}

export default Orders