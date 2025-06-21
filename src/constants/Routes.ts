export const ROUTE = {
  LOGIN: "/",
  CAMPAIGNS: "/campaigns",
  PRODUCTS: "/products",
  USERS: "/users",
  ORDERS: "/orders",
  CATEGORIES: "/categories",
};


export const routeList = [
  {
    name: "Sifarişlər",
    path: ROUTE.ORDERS
  },
  {
    name: "Kampaniyalar",
    path: ROUTE.CAMPAIGNS
  },
  {
    name: "Məhsullar",
    path: ROUTE.PRODUCTS
  },
  {
    name: "İstifadəçilər",
    path: ROUTE.USERS
  },
  {
    name: "Kateqoriyalar",
    path: ROUTE.CATEGORIES
  },
  {
    name: "Not Found",
    path: "/404"
  }
];