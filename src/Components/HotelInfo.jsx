import { useEffect, useState } from "react";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const HotelInfo = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        console.log(document.title)
        if (document.title === 'Home') {
            setIsVisible(true);

        } else {
            setIsVisible(false);
        }

    }, []);

    return (
        <div id="conditional-div" className={isVisible ? "" : "hidden"}>
            <div className="font-Poppins flex bg-base-100">
                <div className="flex gap-5 p-5 items-center bg-slate-500">
                    <div className="bg-black p-2 rounded-full">
                        <FaPhoneAlt className="text-white text-2xl" />
                    </div>
                    <span className="text-white">Quick Support for call +88 0123456789</span>
                </div>
                <div className="flex-1 flex justify-end gap-5 items-center bg-stone-300">
                    <div className="flex gap-5 items-center border-r-2 border-r-orange-300 pr-4">
                        <div className="bg-black p-2 rounded-full">
                            <FaLocationDot className="text-white text-2xl" />
                        </div>
                        <span>123 Art Avenue Sector 5, San Francisco California, USA</span>
                    </div>
                    <div className="flex gap-5 items-center pr-10">
                        <div className="bg-black p-2 rounded-full">
                            <BiSolidMessageAltDetail className="text-white text-2xl" />
                        </div>
                        <span>arteasehub@gmial.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelInfo;