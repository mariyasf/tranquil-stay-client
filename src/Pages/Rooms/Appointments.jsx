import { FaCheckCircle, FaUsers } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdRoomService } from "react-icons/md";


const Appointments = () => {
    return (
        <div className="bg-[#f8f6f3] pb-20">
            <div className="text-center ">
                <h2 className="text-3xl font-Rancho  italic  text-center pt-20">make appointment</h2>
                <h2 className="text-8xl font-Rancho font-bold text-center pt-5">Book A Room</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-20 max-w-[1240px]
             mx-auto mt-10  ">

                <div className="flex-1 border rounded-lg border-[#c09d73] p-10 mx-5">

                    <form className="flex-1 bg-transparent mt-30 px-5 space-y-5 lg:space-y-20 items-center">
                        <div className="grid grid-cols-1 gap-5 ">
                            <div >
                                <div className="space-y-3">
                                    <label className="flex items-center gap-5">
                                        <FaCheckCircle /> <span className="font-bold">Check In Date</span>
                                    </label>
                                    <input className="p-4 border w-full" type="date" id="chackin2" name="date" />
                                </div>
                            </div>
                            <div >
                                <div className="space-y-3">
                                    <label className="flex items-center gap-5">
                                        <IoIosCloseCircleOutline />
                                        <span className="font-bold">Check Out Date</span>
                                    </label>
                                    <input className="p-4 border w-full" type="date" id="chackout2" name="date" />
                                </div>
                            </div>
                            <div >
                                <div className="space-y-3" >
                                    <label className="flex items-center gap-5">
                                        <FaUsers /> <span className="font-bold">Adults</span>
                                    </label>
                                    <select className="p-4 border w-full" name="adults" id="adu2">
                                        <option value="sports-massage">Adults</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div >
                                <div className="space-y-3">
                                    <label className="flex items-center gap-5">
                                        <MdRoomService /><span className="font-bold">Room</span>
                                    </label>
                                    <select className="p-4 border w-full" name="room" id="rm2">
                                        <option value="sports-massage">Room</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div >
                                <div className="space-y-3">
                                    <label className="flex items-center gap-5">
                                        <FaPersonWalkingLuggage /><span className="font-bold">Category</span>
                                    </label>
                                    <select className="p-4 border w-full" name="room" id="rm2">
                                        <option value="sports-massage">Room</option>
                                        <option value="1">Luxary Room</option>
                                        <option value="2">Presidential Room</option>
                                        <option value="3">Family Room</option>
                                        <option value="4">Premier Room</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div>

                            <input
                                className="font-Cormorrant btn border-none w-full
                                 bg-[#d8ad5d] hover:bg-[#937131] text-white text-xl"
                                type="submit" value="Book Table Now" />
                        </div>
                    </form>
                </div>
                <div className="flex-1">
                    <img src="/Images/rb.jpg" className="h-full w-full" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Appointments;