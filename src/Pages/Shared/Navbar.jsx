import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png';
import '../../index.css'
import UseAuth from "../../Hooks/UseAuth";
import profile from '/Images/user.png'

const Navbar = () => {
    const { user, logOut } = UseAuth();



    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    function isValidURL(url) {
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlPattern.test(url);
    }

    const navLinks = <>
        <li> <NavLink to={'/'}>Home</NavLink> </li>
        <li> <NavLink to={'/aboutUs'}>About</NavLink> </li>
        <li> <NavLink to={'/contactUs'}>Contact</NavLink> </li>
        <li> <NavLink to={'/feedback'}>Feedback</NavLink> </li>
        <li> <NavLink to={'/rooms'}>Rooms</NavLink> </li>
        <li> <NavLink to={'/myBookings'}>My Bookings</NavLink> </li>

    </>
    return (

        <div className="">
            <div className="bg-[#000e0e]   navbar     text-white lg:px-20 fixed  w-full top-0  z-10
            font-Poppins py-10 border-b-[#c09d73] border-b-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000e0e] rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-xl">
                        <img src={logo} className="w-10 h-10" alt="" />
                        <span className="text-[#c09d73]">Tranquil Stay</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <button className="btn border-none bg-[#c09d73] hover:bg-[#86653d] text-white">Login</button> */}
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    {/* Profile image */}
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >

                                        <div className="w-10 rounded-full">
                                            <img alt="Profile"
                                                src={user && isValidURL(user.photoURL) ? user.photoURL : profile} />
                                        </div>

                                    </div>

                                    <ul tabIndex={0}
                                        className="dropdown-content z-[1] text-white
                                             menu p-2 shadow bg-[#000e0e] rounded-box w-52">
                                        <li>
                                            <NavLink to={'/profile'}>
                                                {user?.displayName || 'Profile'}
                                            </NavLink>
                                        </li>

                                        <li>
                                            <a onClick={handleSignOut}>Logout</a>
                                        </li>
                                    </ul>

                                </div>
                            </>
                            :
                            <div >
                                <Link to={'/login'} className="mr-4">
                                    <button className="btn bg-[#c09d73] hover:bg-[#86653d] text-white">Login</button>
                                </Link>
                            </div >
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;