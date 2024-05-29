import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAnimation from "../../Hooks/UseAnimation";

const Banner = () => {
    UseAnimation();

    return (
        <div className="">
            <div

                className="custom-bg relative min-h-screen max-h-full  
            bg-cover bg-center flex flex-col items-center">

                <div className="text-center text-white py-20 space-y-10"
                    

                >
                    <p className="flex justify-center gap-2 text-center text-[#eca753]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </p>
                    <h4 className="text-white font-Cormorrant text-3xl lg:text-3xl border-b-2
                 border-b-[#c09d73] w-[200px] mx-auto italic">Welcome to our</h4>
                    <h2 className="text-3xl lg:text-8xl font-Poppins font-bold">Tranquil <span className="text-[#eca753]">Stay</span></h2>

                    <p className="px-5 lg:w-[940px] mx-auto font-Cormorrant font-bold  text-xl lg:text-3xl">
                        Tranquil Stay is a serene and luxurious hotel dedicated to providing our guests with an
                        unparalleled experience of relaxation and comfort.
                    </p>
                    <Link to={"/aboutUs"}>
                        <button className="btn  btn-outline   border-white border-2 text-white font-bold
                 hover:bg-[#eca753] hover:border-none text-xl">Learn More</button>

                    </Link>
                </div>
                <div className="pb-10 lg:pb-0 lg:absolute   bottom-0 top-[600px]">
                    <form action="">
                        <div className=" bg-black border-t-4 border-t-[#d8ad5d] p-5
                flex flex-col lg:flex-row justify-evenly items-center gap-5">

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 text-white justify-between">
                                <div className="border-r p-5  ">
                                    <p className="font-Cormorrant text-xl">Check In</p>
                                    <input className="rounded-md bg-[#d8ad5d] p-5 w-full text-xl  text-[#000e0e]"
                                        type="date" required />

                                </div>
                                <div className="border-r p-5  ">
                                    <p className="font-Cormorrant text-xl">Check Out</p>
                                    <input className="rounded-md bg-[#d8ad5d] p-5 w-full text-xl  text-[#000e0e]"
                                        type="date" required />

                                </div>
                                <div className="border-r p-5  ">
                                    <p className="font-Cormorrant text-xl">Rooms</p>
                                    <select id="rooms" name="rooms"
                                        className="bg-[#d8ad5d] mt-1 block w-full   py-5 text-[#000e0e]
                                 border-gray-300 focus:outline-none text-xl
                                  rounded-md">
                                        <option>1 room</option>
                                        <option>2 rooms</option>
                                        <option>3 rooms</option>
                                        <option>4 rooms</option>
                                        <option>5 rooms</option>
                                    </select>

                                </div>
                                <div className="border-r p-5  ">
                                    <p className="font-Cormorrant text-xl">Guests</p>
                                    <select id="rooms" name="rooms"
                                        className="bg-[#d8ad5d] mt-1 block w-full   py-5 text-[#000e0e]
                                 border-gray-300 focus:outline-none text-xl
                                  rounded-md">
                                        <option>01 Adult, 0 Child</option>
                                        <option>02 Adult, 0 Child</option>
                                        <option>02 Adult, 1 Child</option>
                                        <option>02 Adult, 2 Child</option>
                                    </select>

                                </div>

                            </div>

                            <div>
                                <input className="font-Cormorrant btn border-none bg-[#d8ad5d] hover:bg-[#937131] text-white text-xl" type="button" value="Book Now" />

                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>



    );
};

export default Banner;