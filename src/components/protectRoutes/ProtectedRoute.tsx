import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { ROUTE } from "../../constants/Routes";
import { useShallow } from "zustand/shallow";
import Loading from "../loading";

interface Props {
    children: ReactNode;
    requiredRole?: "ADMIN";
}

const ProtectedRoute = ({ children, requiredRole = "ADMIN" }: Props) => {
    const { user, accessToken, isInitialized } = useAuthStore(
        useShallow((state) => ({
            user: state.user,
            accessToken: state.accessToken,
            isInitialized: state.isInitialized,
        }))
    );


    if (!isInitialized) {
        return <Loading />;
    }
    if (!accessToken || !user) {
        return <Navigate to={ROUTE.LOGIN} replace />;
    }
    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to={ROUTE.LOGIN} replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
