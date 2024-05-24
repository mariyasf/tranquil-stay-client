import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loding } = UseAuth();
    const location = useLocation();
    // console.log(location.pathname);

    if (loding)
        return <span className="loading loading-spinner loading-lg text-center"></span>

    if (user)
        return children;

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRouter;