import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import UseAnimation from '../../Hooks/UseAnimation';

const Address = () => {
    UseAnimation();

    return (
        <div>
            <div className='bg-[#d8ad5d] py-20 w-full'
                data-aos="zoom-out"
                data-aos-offset="500"
            >
                <iframe
                    className='w-full'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.2182662306!2d91.65422317734475!3d22.3576296099941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1716388662876!5m2!1sen!2sbd"

                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


            <div>

                <div
                    className='bg-[#011515] text-white flex flex-col lg:flex-row gap-10 px-10'>
                    <div  data-aos="zoom-out"
                        className='p-5 bg-[#000e0e] shadow-xl'>
                        <h2 className='font-Cormorrant text-5xl font-bold'>Contact Info</h2>
                        <div className="flex items-center gap-5 pt-5 font-Cormorrant">

                            <div>
                                <FaPhoneAlt
                                    className="text-[#c09d73] text-2xl" />
                            </div>
                            <div >
                                <p className="font-Poppins">+980 123 (4567) 890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 py-10">
                            <div >
                                <MdEmail className="text-[#c09d73] text-2xl" />
                            </div>
                            <div  >
                                <p className="font-Poppins">example@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <FaLocationDot className="text-[#c09d73] text-2xl" />
                            </div>
                            <div  >
                                <p className="font-Poppins">New elephant Road, Dhanmondi<br />Dhaka - 1212</p>
                            </div>
                        </div>
                        <div className='flex gap-5 text-4xl py-10 mt-5 justify-center border-t-2'>
                            <FaFacebook className='hover:text-[#d8ad5d]' />
                            <FaInstagramSquare className='hover:text-[#d8ad5d]' />
                            <FaLinkedin className='hover:text-[#d8ad5d]' />
                        </div>
                    </div>
                    <div data-aos="zoom-out" className='flex-1 pt-10'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  font-Cormorrant p-5'>
                            <div>
                                <h2 className=' text-white text-2xl uppercase pb-10'>Useful Links</h2>

                                <ul className='menu menu-dropdown-toggle'>
                                    <li> <NavLink className={"text-2xl"} to={'/aboutUs'}>About</NavLink> </li>
                                    <li> <NavLink className={"text-2xl"} to={'/contactUs'}>Contact</NavLink> </li>
                                    <li> <NavLink className={"text-2xl"} to={'/rooms'}>Rooms</NavLink> </li>

                                </ul >
                            </div>

                            <div>
                                <h2 className=' text-white text-2xl uppercase pb-10'>Gallery</h2>

                                <div className='grid grid-cols-3 gap-2'>
                                    <img className='w-32 h-32' src="/Images/g1.jpg" alt="" />
                                    <img className='w-32 h-32' src="/Images/g2.jpg" alt="" />
                                    <img className='w-32 h-32' src="/Images/g3.jpg" alt="" />
                                    <img className='w-32 h-32' src="/Images/g4.jpg" alt="" />
                                    <img className='w-32 h-32' src="/Images/g5.jpg" alt="" />
                                    <img className='w-32 h-32' src="/Images/g6.jpg" alt="" />
                                </div>

                            </div>
                            <div>
                                <h2 className=' text-white text-2xl uppercase'>NEWSLETTER</h2>
                                <p className='text-white pb-5'>Subscribe our Newsletter</p>
                                <form className='space-y-5'>
                                    <input className='p-4 w-full rounded-lg' placeholder='Email' type="email" name="email" id="" />
                                    <input className='w-full btn border-none bg-[#d8ad5d] text-white text-xl' type="submit" value="Subscribe Now" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
