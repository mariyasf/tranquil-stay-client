
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const Root = () => {
    return (
        <div className='bg-white '>
            {/* <div className="bg-[url('/Images/b.jpg')] bg-no-repeat bg-cover">
               
            </div> */}
            <Navbar />
            <Outlet />

            <Footer />
        </div>
    );
};

export default Root;