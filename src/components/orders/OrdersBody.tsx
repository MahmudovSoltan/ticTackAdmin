import { useEffect, useState } from "react";
import OrderTable from "../tables/ordersTable";

import Pagination from "../pagination/pagination";
import { useShallow } from "zustand/shallow";
import { useOrderStore } from "../../store/orderStore";


const OrdersBody = () => {
  const [currentPage, setCurrentPage] = useState(0);


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
  }, []);
  return (
    <div className="orders-body">
      <p>Orders</p>
      <div className="order_table_container">
        <OrderTable orders={currentItems} onStatusChange={fetchOrders} />
      </div>
      <Pagination onPageChange={handlePageChange} pageCount={pageCount} forcePage={currentPage} />
    </div>
  );
};

export default OrdersBody;
