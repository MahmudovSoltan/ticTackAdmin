import React, { useEffect, useState } from "react";
import '../css/tables.css'
import { useOrderStore } from "../../../store/orderStore";
import type { OrderStatus } from "../../../types/order.types";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  type: string;
  img_url: string;
  category: {
    id: number;
    name: string;
    img_url: string;
    description: string;
  };
}

interface OrderItem {
  id: number;
  quantity: number;
  total_price: string;
  product: Product;
}

interface User {
  id: number;
  full_name: string;
  img_url: string;
}

interface Order {
  id: number;
  orderNumber: string;
  total: string;
  deliveryFee: string;
  paymentMethod: string;
  status: string;
  note: string;
  address: string;
  phone: string;
  createdAt: string;
  user: User;
  items: OrderItem[];
}

const statuses = [
  "PENDING",
  "CONFIRMED",
  "PREPARING",
  "READY",
  "DELIVERED",
  "CANCELLED",
];

const OrderTable = ({ orders }: { orders: Order[] }) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<{ [id: number]: string }>({});
  const { updateOrderStatus, fetchOrders } = useOrderStore()
  const toggleExpand = (id: number) => {
    setExpandedRow(prev => (prev === id ? null : id));

  };

  const handleStatusChange = (orderId: number, newStatus: OrderStatus) => {
    setSelectedStatus(prev => ({ ...prev, [orderId]: newStatus }));
    updateOrderStatus(orderId, newStatus)
  };

  console.log(selectedStatus);

  useEffect(() => {
    fetchOrders()
  }, [selectedStatus]);
  return (
    <div>
      <table className="products-table">
        <thead>
          <tr>
            <th>Order No</th>
            <th>Müştəri</th>
            <th>Telefon</th>
            <th>Ünvan</th>
            <th>Toplam</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map(order => (
            <React.Fragment key={order.id}>
              <tr>
                <td>{order?.orderNumber}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    {order?.user?.full_name}

                  </div>
                </td>
                <td>{order?.phone}</td>
                <td>{order?.address}</td>
                <td>{order?.total} ₼</td>
                <td>{order?.status}</td>
                <td>
                  <div>

                    <button onClick={() => toggleExpand(order?.id)}>Ətraflı</button>
                    <div style={{ display: "inline-block", marginLeft: 10, position: "relative" }}>
                      <select
                        value={selectedStatus[order?.id] || order?.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value as OrderStatus)}
                      >
                        {statuses?.map((status, i) => (
                          <option key={i} value={status}>{status?.toLocaleLowerCase()}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </td>
              </tr>

              {expandedRow === order.id && (
                <tr>
                  <td colSpan={7}>
                    <strong>Order Items:</strong>
                    <ul>
                      {order.items.map(item => (
                        <li key={item.id}>
                          {item.product.title} - {item.quantity} ədəd - {item.total_price} ₼
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
