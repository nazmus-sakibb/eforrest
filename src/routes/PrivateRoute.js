import React, { useContext } from 'react';
import UserContext, { AuthContext } from '../components/constexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;