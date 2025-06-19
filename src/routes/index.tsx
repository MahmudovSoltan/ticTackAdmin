
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from '../pages/Login'
import { ROUTE } from '../constants/Routes'
// import Users from '../pages/Users'
// import Orders from '../pages/Orders'
// import Products from '../pages/Products'
// import Categories from '../pages/Categories'
// import Campaigns from '../pages/Campaigns'
// import NotFound from '../pages/404'
import { lazy, Suspense } from 'react'
import Loading from '../components/loading'

const Login =lazy(() => import('../pages/Login'))
const Users =lazy(() => import('../pages/Users'))
const Orders =lazy(() => import('../pages/Orders'))
const Products =lazy(() => import('../pages/Products'))
const Categories =lazy(() => import('../pages/Categories'))
const Campaigns =lazy(() => import('../pages/Campaigns'))
const NotFound = lazy(() => import('../pages/404'))
const MainRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path={ROUTE.CAMPAIGNS} element={<Campaigns />} />
                    <Route path={ROUTE.CATEGORIES} element={<Categories />} />
                    <Route path={ROUTE.PRODUCTS} element={<Products />} />
                    <Route path={ROUTE.ORDERS} element={<Orders />} />
                    <Route path={ROUTE.USERS} element={<Users />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MainRouter