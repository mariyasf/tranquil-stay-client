
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Error/Shared/Navbar';
import Footer from '../Pages/Error/Shared/Footer';

const Root = () => {
    return (
        <div >
            <div className="bg-[url('/Images/b.jpg')] bg-no-repeat bg-cover">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;