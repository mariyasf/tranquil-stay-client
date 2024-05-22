import { FaCar, FaSwimmingPool, FaWineBottle } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { IoRestaurant } from "react-icons/io5";
import { MdMeetingRoom, MdOutlineHealthAndSafety, MdOutlineLocalLaundryService } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className='pt-40 max-w-[1240px] mx-auto bg-transparent'>
            <div className="flex flex-col lg:flex-row gap-5">
                <img src="/Images/b.jpg" alt="" />
                <div className="space-y-5">
                    <h2 className="font-Poppins text-xl italic text-[#d8ad5d]">
                        LUXURY HOTEL
                    </h2>
                    <h2 className="font-Poppins font-bold text-5xl">
                        LUXURY BEST HOTEL IN THE CITY
                    </h2>
                    <p className="text-2xl font-Cormorrant">
                        Welcome to our luxurious hotel, where sophistication, impeccable service, and unparalleled comfort await you. From the moment you step into our grand lobby, you'll be immersed in an atmosphere of opulence and refined elegance.

                    </p>
                    <p className="text-2xl font-Cormorrant pb-5">
                        As you enter our establishment, you will be greeted by a captivating ambiance that exudes both sophistication and tranquility, setting the stage for an unforgettable stay.
                    </p>

                    <Link to={"/rooms"}>
                        <button className="btn bg-[#d8ad5d] text-white text-xl">Choos Rooms</button></Link>

                </div>
            </div>

            <div className="mt-5 mb-20 bg-[#f8f6f3] p-10 rounded-xl">
                <div>
                    <h2 className="text-center text-5xl font-bold
                     font-Cormorrant pb-5 mb-10 w-[500px] mx-auto border-b-2 border-b-[#d8ad5d]">HOTEL’S FACILITIES</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-5">
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <IoRestaurant className="text-8xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Restaurant</h2>
                            <p className="font-Poppins">
                                From the moment you walk through our doors, you'll be welcomed into a world where culinary artistry meets unparalleled service and elegant surroundings.
                            </p>

                        </div>
                    </div>
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <FaSwimmingPool className="text-8xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Swimming Pool</h2>
                            <p className="font-Poppins">
                                Designed to offer both tranquility and enjoyment, our pool area is the perfect place to unwind and soak up the sun.
                            </p>

                        </div>
                    </div>
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <IoMdFitness className="text-8xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Fitness Area</h2>
                            <p className="font-Poppins">
                                Stay active and maintain your fitness routine while traveling with our state-of-the-art fitness area.
                            </p>

                        </div>
                    </div>
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <FaWineBottle className="text-8xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Mini Bar</h2>
                            <p className="font-Poppins">
                                Whether you're unwinding after a long day or enjoying a quiet evening in, our mini bar offers a delightful array of refreshments to enhance your stay.
                            </p>

                        </div>
                    </div>
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <MdMeetingRoom className="text-8xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Meeting Room</h2>
                            <p className="font-Poppins">
                                Designed to cater to all your professional needs, our meeting facilities offer a seamless blend of functionality, modern technology, and elegant design.
                            </p>

                        </div>
                    </div>
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <MdOutlineLocalLaundryService className="text-5xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Laundry Service</h2>
                            <p className="font-Poppins">
                                Enjoy the convenience and peace of mind provided by our professional laundry service.
                            </p>

                        </div>
                    </div>
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <PiTelevisionSimple className="text-8xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Satelite TV</h2>
                            <p className="font-Poppins">
                                Experience the ultimate in-room convenience with our well-stocked mini bar, designed to provide you with a selection of premium beverages and snacks right at your fingertips.
                            </p>

                        </div>
                    </div>
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <MdOutlineHealthAndSafety className="text-8xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Safe Box</h2>
                            <p className="font-Poppins">
                                Experience the ultimate in-room convenience with our well-stocked mini bar, designed to provide you with a selection of premium beverages and snacks right at your fingertips.
                            </p>

                        </div>
                    </div>
                    <div className=" flex gap-5 p-5 rounded-xl border border-[#c09d73]">
                        <FaCar className="text-8xl text-[#d8ad5d] font-bold" />
                        <div>
                            <h2 className="font-Cormorrant font-bold text-3xl">Parking Area</h2>
                            <p className="font-Poppins">
                                Experience the ultimate in-room convenience with our well-stocked mini bar, designed to provide you with a selection of premium beverages and snacks right at your fingertips.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AboutUs;