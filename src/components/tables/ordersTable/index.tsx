import React, { useState } from "react";
import '../css/tables.css'
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

  const toggleExpand = (id: number) => {
    setExpandedRow(prev => (prev === id ? null : id));
  };

  const handleStatusChange = (orderId: number, newStatus: string) => {
    setSelectedStatus(prev => ({ ...prev, [orderId]: newStatus }));
  };

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
          {orders.map(order => (
            <React.Fragment key={order.id}>
              <tr>
                <td>{order.orderNumber}</td>
                <td>
                  <img
                    src={order.user.img_url}
                    alt={order.user.full_name}
                    style={{ width: 30, height: 30, borderRadius: "50%", marginRight: 8 }}
                  />
                  {order.user.full_name}
                </td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.total} ₼</td>
                <td>{selectedStatus[order.id] || order.status}</td>
                <td>
                  <button onClick={() => toggleExpand(order.id)}>Ətraflı</button>
                  <div style={{ display: "inline-block", marginLeft: 10, position: "relative" }}>
                    <select
                      value={selectedStatus[order.id] || order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                      {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
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
