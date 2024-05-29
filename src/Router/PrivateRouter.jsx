import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loding } = UseAuth();
    const location = useLocation();
    // console.log(location.pathname);

    
    if (user)
        return children;

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRouter;