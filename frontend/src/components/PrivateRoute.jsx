// react router
import { Navigate, Outlet } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    
    const { userInfo } = useSelector((state) => state.auth);

    return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;