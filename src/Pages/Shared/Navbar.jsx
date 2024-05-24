import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png';
import '../../index.css'
import UseAuth from "../../Hooks/UseAuth";
import profile from '/Images/user.png'
import { useEffect, useState } from "react";
import UseTheme from "../../Hooks/UseTheme";

const Navbar = () => {
    const { user, logOut } = UseAuth();

    const [theme, setTheme] = UseTheme();

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else setTheme('light');
    }

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
                                                src={
                                                    user &&
                                                        isValidURL(user.photoURL) ?
                                                        user.photoURL : profile
                                                } />
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
                                <label className="cursor-pointer grid place-items-center pl-5">
                                    <input
                                        onChange={handleToggle}
                                        type="checkbox"
                                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                </label>
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