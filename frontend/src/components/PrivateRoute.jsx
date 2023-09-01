import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";

const PrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
    
    return userInfo ? <Outlet /> : <Navigate to="/login" replace />
    // replace will remove the past history
};

export default PrivateRoute;
