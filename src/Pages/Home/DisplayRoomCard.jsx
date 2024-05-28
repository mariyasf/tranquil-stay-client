import { IoIosBed } from "react-icons/io";
import { Link } from "react-router-dom";

const DisplayRoomCard = () => {
    return (
        <div className="py-10 mt-10">
            <div className="flex flex-col lg:flex-row gap-5 max-w-[1240px] mx-auto px-10 lg:px-0 font-Cormorrant">

                <div className="w-full lg:max-w-sm overflow-hidden bg-[#F4F2F5] rounded-lg 
                shadow-lg  ">
                    <img className="object-cover object-center w-full h-56"
                        src="/Images/luxury.jpg" alt="avatar" />

                    <div className="flex items-center px-6 py-3 bg-[#eca753] text-white">
                        <IoIosBed className="text-white" />

                        <h1 className="mx-3 text-xl font-bold ">Luxury</h1>
                    </div>

                    <div className="px-6 py-4">


                        <p className="py-2 text-black ">
                            Revel in opulence with lavish furnishings, exquisite design, and unparalleled comfort, exuding sophistication and exclusivity.
                        </p>


                    </div>
                    <div className="card-end px-6   py-4  w-full">
                        <Link to="/rooms">
                            <button className="btn border-none text-xl text-white bg-[#eca753] w-full">Explore More</button>
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:max-w-sm overflow-hidden bg-[#F4F2F5] rounded-lg shadow-lg ">
                    <img className="object-cover object-center w-full h-56"
                        src="/Images/Presidential.jpg" alt="avatar" />

                    <div className="flex items-center px-6 py-3 bg-[#eca753] ">
                        <IoIosBed className="text-white" />

                        <h1 className="mx-3 text-xl font-bold text-white">Presidential</h1>
                    </div>

                    <div className="px-6 py-4">


                        <p className="py-2 text-black ">
                            An esteemed space offering expansive layouts, premium amenities, and unparalleled service, designed for the ultimate VIP experience.
                        </p>




                    </div>

                    <div className="card-end px-6   py-4  w-full">
                        <Link to="/rooms">
                            <button className="btn border-none text-xl text-white bg-[#eca753] w-full">Explore More</button>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:max-w-sm overflow-hidden bg-[#F4F2F5] rounded-lg shadow-lg ">
                    <img className="object-cover object-center w-full h-56"
                        src="/Images/Family.jpg" alt="avatar" />

                    <div className="flex items-center px-6 py-3 bg-[#eca753]">
                        <IoIosBed className="text-white" />

                        <h1 className="mx-3 text-xl font-bold text-white">Family</h1>
                    </div>

                    <div className="px-6 py-4">


                        <p className="py-2 text-black ">
                            Spacious and inviting, these accommo. cater to families with comfortable living areas, kid-friendly amenities, and a homely atmosphere for all ages.
                        </p>


                    </div>

                    <div className="card-end px-6   py-4  w-full">
                        <Link to="/rooms">
                            <button className="btn border-none text-xl text-white bg-[#eca753] w-full">Explore More</button>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:max-w-sm overflow-hidden bg-[#F4F2F5] rounded-lg shadow-lg ">
                    <img className="object-cover object-center w-full h-56"
                        src="/Images/Premier.jpg" alt="avatar" />

                    <div className="flex items-center px-6 py-3 bg-[#eca753] ">
                        <IoIosBed className="text-white" />

                        <h1 className="mx-3 text-xl font-bold text-white">Premier</h1>
                    </div>

                    <div className="px-6 py-4">


                        <p className="py-2 text-black ">
                            Top-tier accommo. featuring prime views,  , and superior amenities, providing a premium experience with meticulous attention to detail.</p>

                    </div>
                    <div className="card-end px-6   py-4  w-full">
                        <Link to="/rooms">
                            <button className="btn border-none text-xl text-white bg-[#eca753] w-full">Explore More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayRoomCard;