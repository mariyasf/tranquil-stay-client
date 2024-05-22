import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Address from "../Address/Address";


const Contact = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-10 justify-between mb-10
         max-w-[1240px] mx-auto mt-40 p-10 lg:p-20 rounded-xl bg-[#f8f6f3]">
                <div className="flex-1 font-Cormorrant space-y-5">
                    <div className="space-y-5">
                        <h4 className=" text-[#c09d73] text-2xl w-[120px] border-b border-b-[#c09d73]">Contact us</h4>
                        <h1 className="text-5xl font-bold">Contact With Us</h1>
                        <p className="text-xl lg:text-3xl">
                            At Tranquil Stay, your satisfaction is our top priority. Whether you have questions, feedback, or need assistance, our team is dedicated to providing you with the support you need. Reach out to us through any of the methods below, and we’ll be happy to assist you.
                        </p>
                    </div>
                    <div className="flex items-center gap-5 pt-5">
                        <div  >
                            <FaPhoneAlt
                                className="text-[#c09d73] text-2xl" />
                        </div>
                        <div >
                            <h4 className="font-bold text-xl">Call Us Now</h4>
                            <p className="font-Poppins">+980 123 (4567) 890</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 border-y-2 py-10">
                        <div >
                            <MdEmail className="text-[#c09d73] text-2xl" />
                        </div>
                        <div  >
                            <h4 className="font-bold text-xl">Sent Email</h4>
                            <p className="font-Poppins">example@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <FaLocationDot className="text-[#c09d73] text-2xl" />
                        </div>
                        <div  >
                            <h4 className="font-bold text-xl">Our Locations</h4>
                            <p className="font-Poppins">New elephant Road, Dhanmondi<br />Dhaka - 1212</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-black p-10 text-white">
                    <form>
                        <div className="font-Cormorrant space-y-5">
                            <div >
                                <h4 className="text-center text-xl lg:text-3xl uppercase">Get In Touch</h4>
                            </div>
                            <div >
                                <input
                                    className="bg-transparent text-xl text-white border boder-white p-5 w-full"
                                    type="text" name="Name" placeholder="Your Name" required />
                            </div>
                            <div >
                                <input
                                    className="bg-transparent text-xl text-white border boder-white p-5 w-full"
                                    type="email" name="Email" placeholder="Enter Your Email" required />
                            </div>
                            <div >
                                <select
                                    className="bg-transparent text-xl text-white border boder-white p-5 w-full"
                                    name="Subject" id="Subject">
                                    <option value="select">Select Subject</option>
                                    <option value="luxury-hotel">Luxury Hotel</option>
                                    <option value="room">Room</option>
                                    <option value="hotel">Hotel</option>
                                </select>
                            </div>
                            <div >
                                <textarea
                                    className="bg-transparent text-xl text-white border boder-white p-5 w-full"
                                    name="Message" id="Message" placeholder="Write Message"></textarea>
                            </div>
                            <div >
                                <button className="btn w-full bg-[#d8ad5d] hover:bg-[#c09d73] border-none text-white text-xl" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                    <div id="status"></div>
                </div>
            </div>
            <Address />

        </>
    );
};

export default Contact;