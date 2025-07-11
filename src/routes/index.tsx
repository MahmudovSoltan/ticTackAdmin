import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTE } from '../constants/Routes'
import { lazy, Suspense, useEffect } from 'react'
import Loading from '../components/loading'
import ProtectedRoute from '../components/protectRoutes/ProtectedRoute'
import { useAuthStore } from '../store/authStore'

const Login = lazy(() => import('../pages/Login'))
const Users = lazy(() => import('../pages/Users'))
const Orders = lazy(() => import('../pages/Orders'))
const Products = lazy(() => import('../pages/Products'))
const Categories = lazy(() => import('../pages/Categories'))
const Campaigns = lazy(() => import('../pages/Campaigns'))
const NotFound = lazy(() => import('../pages/404'))

const MainRouter = () => {
    useEffect(() => {
        useAuthStore.getState().initializeTokens();
    }, []);
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route index element={<Login />} />
                    <Route
                        path={ROUTE.CAMPAIGNS}
                        element={
                            <ProtectedRoute>
                                <Campaigns />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={ROUTE.CATEGORIES}
                        element={
                            <ProtectedRoute>
                                <Categories />
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path={ROUTE.PRODUCTS}
                        element={
                            <ProtectedRoute>
                                <Products />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={ROUTE.ORDERS}
                        element={
                            <ProtectedRoute>
                                <Orders />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={ROUTE.USERS}
                        element={
                            <ProtectedRoute>
                                <Users />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MainRouter
