import { useState } from "react";
import TableHeader from "../../ui/tableHeader";
import OrderTable from "../tables/ordersTable";
import type { Product } from "../../types/Types";
import Pagination from "../pagination/pagination";
const orders = [
  {
    id: 1,
    orderNumber: "ORD-20250613-630",
    total: "18.89",
    deliveryFee: "0.00",
    paymentMethod: "CARD",
    status: "PENDING",
    note: "Lorem ipsum",
    address: "Aga Neymatulla",
    phone: "+994103193897",
    createdAt: "2025-06-13T07:35:41.867Z",
    updatedAt: "2025-06-13T07:35:41.867Z",
    user: {
      id: 3,
      full_name: "John Doe",
      img_url: "https://avatars.githubusercontent.com/u/61918721?v=4?s=400",
    },
    items: [
      {
        id: 1,
        quantity: 1,
        total_price: "12.90",
        product: {
          id: 5,
          title: "Producty-2 Icki",
          img_url: "",
          description: "Lorem ipsum",
          price: "12.90",
          type: "litre",
          created_at: "2025-06-13T04:54:05.529Z",
          category: {
            id: 1,
            name: "Elektronika",
            img_url:
              "https://www.tiktak.az/cdn-cgi/image/width=600,height=400,quality=80,format=auto/https://www.tiktak.az/media/catalog/category/elektronika.jpg",
            description:
              "Smartfonlar, laptoplar, televizorlar ve daha fazlasi.",
            created_at: "2025-06-12T05:37:56.753Z",
          },
        },
      },
    ],
  },
  {
    id: 2,
    orderNumber: "ORD-20250614-777",
    total: "29.50",
    deliveryFee: "2.00",
    paymentMethod: "CASH",
    status: "CONFIRMED",
    note: "Təcili çatdırılma",
    address: "Xətai, Babək pr.",
    phone: "+994502223344",
    createdAt: "2025-06-14T09:25:00.000Z",
    updatedAt: "2025-06-14T10:00:00.000Z",
    user: {
      id: 4,
      full_name: "Aysel Hüseynova",
      img_url: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    items: [
      {
        id: 2,
        quantity: 2,
        total_price: "20.00",
        product: {
          id: 6,
          title: "Smartfon Redmi",
          img_url: "",
          description: "Yeni nəsil smartfon",
          price: "10.00",
          type: "ədəd",
          created_at: "2025-06-13T08:00:00.000Z",
          category: {
            id: 1,
            name: "Elektronika",
            img_url:
              "https://www.tiktak.az/media/catalog/category/elektronika.jpg",
            description: "Elektron məhsullar",
            created_at: "2025-06-12T05:37:56.753Z",
          },
        },
      },
    ],
  },
];

const OrdersBody = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
   const offset = currentPage * itemsPerPage;
  const currentItems = orders.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(orders.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="orders-body">
       <p>Orders</p>
      <OrderTable orders={currentItems}  />
      <Pagination onPageChange={handlePageChange} pageCount={pageCount} forcePage={currentPage}/>
    </div>
  );
};

export default OrdersBody;
