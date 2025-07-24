import { useEffect, useState } from "react";
import OrderTable from "../tables/ordersTable";

import Pagination from "../pagination/pagination";
import { useShallow } from "zustand/shallow";
import { useOrderStore } from "../../store/orderStore";
import { getOrederSatistic } from "../../services/orders";

type İOrderStstusType = {
  TOTAL: number,
  DELIVERED: number,
  PENDING: number,
  PREPARING: number,
  TOTAL_REVENUE: number
}
const OrdersBody = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState<İOrderStstusType | null>(null)

  const { orders, fetchOrders } = useOrderStore(
    useShallow((state) => ({
      orders: state.orders,
      fetchOrders: state.fetchOrders
    }))
  )




  const itemsPerPage = 4;
  const offset = currentPage * itemsPerPage;
  const currentItems = orders.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(orders.length / itemsPerPage);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };


  useEffect(() => {
    fetchOrders()
    const getOrderData = async () => {
      const response = await getOrederSatistic()
      setData(response)
    }
    getOrderData()
  }, []);


  return (
    <div className="orders-body">
      <p>Orders</p>
      <div className="stats-container">
        <div className="stat-card total">
          <p className="label">Total Orders</p>
          <h3 className="value">{data?.TOTAL ?? '...'}</h3>
        </div>
        <div className="stat-card delivered">
          <p className="label">Delivered</p>
          <h3 className="value">{data?.DELIVERED ?? '...'}</h3>
        </div>
        <div className="stat-card pending">
          <p className="label">Pending</p>
          <h3 className="value">{data?.PENDING ?? '...'}</h3>
        </div>
        <div className="stat-card preparing">
          <p className="label">Preparing</p>
          <h3 className="value">{data?.PREPARING ?? '...'}</h3>
        </div>
        <div className="stat-card revenue">
          <p className="label">Total Revenue</p>
          <h3 className="value">${data?.TOTAL_REVENUE?.toLocaleString() ?? '...'}</h3>
        </div>
      </div>

      <div className="order_table_container">
        <OrderTable orders={currentItems} onStatusChange={fetchOrders} />
      </div>
      <Pagination onPageChange={handlePageChange} pageCount={pageCount} forcePage={currentPage} />
    </div>
  );
};

export default OrdersBody;
