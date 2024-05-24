import { useLoaderData } from "react-router-dom";
import BannerCard from "../Pages/Shared/BannerCard";
import SwipperImg from "./SwipperImg";
import { FaPersonWalkingLuggage, FaRightFromBracket } from "react-icons/fa6";
import { MdRoomService } from "react-icons/md";
import { FaArrowCircleLeft, FaArrowCircleRight, FaCheckCircle, FaUsers } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const RoomDetails = () => {
    const room = useLoaderData();
    const {
        _id,
        description,
        category,
        roomTypes,
        pricePerNight,
        roomSize,
        roomImages
    } = room || {}


    return (
        <div>
            <BannerCard title={"ROOM DETAILS"} />
            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1240px] mx-auto gap-10 my-10">
                <div className="col-span-2 font-Cormorrant ">
                    <div>
                        <SwipperImg roomImages={roomImages} />
                    </div>
                    <div className="mx-10 lg:mx-0  space-y-5 ">
                        <h2 className="text-[#c09d73] text-2xl uppercase">{category}</h2>
                        <h2 className="text-5xl font-bold">{roomTypes}</h2>
                        <p className="text-2xl">{description}</p>
                    </div>

                    <div className="flex gap-5 justify-between mx-10 lg:mx-0 mt-5">
                        <div className="space-y-2">
                            <h2 className="flex gap-4 font-bold text-3xl items-center">
                                <FaArrowCircleRight />
                                <span >Check In</span></h2>

                            <p className="text-xl">

                                Check-in from 9:00 AM - anytime
                            </p >
                            <p className="text-xl">

                                Early check-in subject to availability</p>


                        </div>
                        <div className="space-y-2">
                            <h2 className="flex gap-4 font-bold text-3xl items-center ">
                                <FaArrowCircleLeft />  Check Out
                            </h2>

                            <p className="text-xl">Check-out before noon</p>

                            <p className="text-xl">Check-out from 9:00 AM - anytime</p>
                        </div>
                    </div>


                </div>
                <div>
                    <div className="flex-1 border rounded-lg border-[#c09d73] p-10 ">

                        <form className="flex-1 bg-transparent space-y-5 lg:space-y-20 items-center">
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


                            </div>
                            <div>

                                <input
                                    className="font-Cormorrant btn border-none w-full
                                 bg-[#d8ad5d] hover:bg-[#937131] text-white text-xl"
                                    type="submit" value="Book Table Now" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoomDetails;