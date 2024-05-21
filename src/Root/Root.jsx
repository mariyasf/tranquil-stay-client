
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Error/Shared/Navbar';
import Footer from '../Pages/Error/Shared/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;