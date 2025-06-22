import { useShallow } from 'zustand/shallow'
import Header from '../../components/Layout/header/Header'
import Sidebar from '../../components/Layout/sidebar'
import OrdersBody from '../../components/orders/OrdersBody'
import { useOrderStore } from '../../store/orderStore'
import './css/order.css'
import { useEffect } from 'react'

const Orders = () => {
 



  // useShallow((state) => ({
  //     user: state.user,
  //     accessToken: state.accessToken,
  //     refreshToken: state.refreshToken,
  //   }))
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