
import axios from 'axios';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const CartRow = ({ booking }) => {



    const { email, name, availability,
        bookingId,
        checkIn,
        checkOut,
        child,
        adults, img,
        bookingCategory,
        bookingRoomTypes,
        bookingPricePerNight,
    } = booking


    return (
        <tr>
            <Link to={`/rooms/${bookingId}`}>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-8 h-8 rounded-full"
                            src={img[0]} alt="" />
                        <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{bookingRoomTypes}</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{bookingCategory}</p>
                        </div>
                    </div>
                </td>
            </Link>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 
            whitespace-nowrap">
                {checkIn}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 
            whitespace-nowrap">
                {checkOut}
            </td>


            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <div>
                        <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Adult: {adults}, Child: {child}</h2>
                    </div>
                </div>
            </td>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                Null
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {bookingPricePerNight}/Per Night
            </td>

            <td className="px-4 py-4 text-2xl text-center 
                                             text-gray-300">
                <button>
                    <FaEdit />
                </button>
            </td>
            <td className="px-4 py-4 text-2xl text-center 
                                             text-gray-300">
                <button>
                    <MdDelete />
                </button>
            </td>
            <td className="px-4 py-4 text-2xl text-center 
                                             text-gray-300">
                <button>
                    <VscFeedback />
                </button>
            </td>
        </tr>
    );
};

export default CartRow;