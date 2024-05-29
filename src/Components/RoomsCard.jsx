import { Link } from "react-router-dom";
import UseAnimation from "../Hooks/UseAnimation";
import { useEffect, useState } from "react";


const RoomsCard = ({ room }) => {
    UseAnimation()
    const {
        _id,
        availability,
        description,
        category,
        roomTypes,
        pricePerNight,
        roomSize,
        roomImages
    } = room || {};
    const img = roomImages ? roomImages[0] : "";


    return (
        <div
            className="border-2  border-[#c09d73] rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full h-64 bg-gray-300 bg-center bg-cover 
                rounded-lg  "
                    style={{ backgroundImage: `url(${img})` }}

                >
                    {
                        availability === true ?
                            <Link to={`/rooms/${_id}`}>
                                <div className="card-end rounded-lg bg-black hover:bg-[#c09d73] text-white block">
                                    <h2 className="text-center p-5 font-Cormorrant text-2xl">View Details</h2>
                                </div>
                            </Link>
                            :
                            <Link to={`/rooms/${_id}`}>
                                <div className="card-end bg-green-700 hover:bg-green-900 text-white block">
                                    <h2 className="text-center p-5 font-Cormorrant text-2xl">Already Booking</h2>
                                </div>
                            </Link>


                    }


                </div>

                <div className="w-2/3 md:w-64 lg:w-56 -mt-10 overflow-hidden bg-white rounded-lg 
                shadow-lg  dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center
                     text-[#c09d73] uppercase dark:text-white">
                        {roomTypes}
                    </h3>

                    <div className="flex items-center justify-between px-3 py-2
                     bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                            ${pricePerNight}/Night
                        </span>
                        <button className="p-3 text-xs font-semibold text-white uppercase
                         transition-colors duration-300 transform bg-[#c09d73] rounded
                          hover:bg-[#8f6a3d] ">Book Now</button>
                    </div>
                </div>

            </div>

            <div className="font-Cormorrant mt-10 px-10">
                <p className="text-[#c09d73] text-2xl uppercase">{category}</p>
                <p className="font-Poppins pb-10">{roomSize}/Rooms</p>
            </div>
        </div>
    );
};

export default RoomsCard;