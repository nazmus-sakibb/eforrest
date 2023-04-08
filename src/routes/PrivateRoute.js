import React, { useContext } from 'react';
import { AuthContext } from '../components/constexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        console.log('yes loading found');
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;