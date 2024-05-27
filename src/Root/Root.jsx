
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../Pages/LoadingSpinner/LoadingSpinner';


const Root = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

    return (
        <>
             
            {
                loading ?
                    <LoadingSpinner loading={loading} />
                    :
                    <div className='bg-white '>

                        <Navbar />
                        <Outlet />

                        <Footer />
                    </div>
            }
        </>
    );
};

export default Root;