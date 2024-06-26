import { useLoaderData } from "react-router-dom";
import BannerCard from "../Pages/Shared/BannerCard";
import SwipperImg from "./SwipperImg";
import { FaMattressPillow } from "react-icons/fa6";
import { MdBreakfastDining, MdCoffeeMaker, MdOutlinePool, MdRoomService } from "react-icons/md";
import { FaArrowCircleLeft, FaArrowCircleRight, FaCheck, FaCheckCircle, FaUsers, FaWifi } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import UseAnimation from "../Hooks/UseAnimation";
import Feedbacks from "../Pages/CustomerFeedback/Feedbacks";
import { Helmet } from "react-helmet";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const RoomDetails = () => {
    UseAnimation()
    const { user, loding } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const room = useLoaderData();

    const {
        _id,
        description,
        availability,
        category,
        roomTypes,
        pricePerNight,
        roomSize,
        roomImages,
        specialOffers
    } = room || {}

    if (loding) {
        return <div className="text-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const bookingId = _id;
        const checkIn = form.checkIn.value;
        const checkOut = form.checkOut.value;
        const adults = parseInt(form.adults.value);
        const child = parseInt(form.child.value)
        const img = roomImages[0];
        const bookingCategory = category;
        const bookingRoomTypes = roomTypes;
        const bookingPricePerNight = parseInt(pricePerNight);
        const email = user?.email
        const name = user?.displayName
        const availability = false;

        const today = new Date().toISOString().split("T")[0];

        if (checkIn < today) {
            alert("Check-in date cannot be before today.");
            return;
        }

        if (checkOut < checkIn) {
            alert("Check-out date must be on or after the check-in date.");
            return;
        }

        const booking = {
            email, name, availability,
            bookingId,
            checkIn,
            checkOut,
            child,
            adults, img,
            bookingCategory,
            bookingRoomTypes,
            bookingPricePerNight,
        }

        console.table(booking)

        try {
            const { data } = await axiosSecure.post(
                `/booking`,
                booking)

            // console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Do you want to confirm the booking?",
                    showCancelButton: true,
                    confirmButtonText: "Confirm",
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire("Confirm!", "", "success");
                        }
                    });
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <Helmet>
                <title>Room-details</title>
            </Helmet>
            <BannerCard
                path={"home/rooms/room-details"}
                title={"ROOM DETAILS"} />
            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1240px] mx-auto  gap-5 mb-10">
                <div className="col-span-2 font-Cormorrant ">
                    <div>
                        <SwipperImg roomImages={roomImages} />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <h2 className="text-[#d8ad5d] text-2xl uppercase mt-10 mx-10 lg:mx-0">{category}</h2>
                        {
                            availability === true ?

                                <div className="card-end rounded-lg mx-10 lg:mx-0  bg-green-200  text-green-950 font-bold block">
                                    <h2 className="text-center p-5 font-Cormorrant text-2xl">Available</h2>
                                </div>
                                :
                                <div className="card-end bg-red-100 mx-10 lg:mx-0 text-red-950 font-bold block">
                                    <h2 className="text-center p-5 font-Cormorrant text-2xl">Already Booking</h2>
                                </div>



                        }
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 font-bold text-2xl  border-y-2 py-5 my-5 mx-10 lg:mx-0">
                        <h2 className="">Price: <span className="font-Poppins text-xl bg-green-500 ">{pricePerNight}/Per Night</span></h2>
                        <h2>Size: <span className="font-Poppins text-xl">{roomSize}</span> /Room</h2>
                        <h2>Special Offers: <span className="font-Poppins text-xl px-4">{specialOffers}</span></h2>
                    </div>

                    <div className="mx-10 lg:mx-0  space-y-5 ">
                        <h2 className="text-5xl font-bold">{roomTypes}</h2>
                        <p  className="text-2xl">{description}</p>
                    </div>

                    <div  className="flex flex-col lg:flex-row gap-5 justify-between mx-10 lg:mx-0 mt-5">
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



                    <div  className="space-y-4 mt-5 mx-10 lg:mx-0">
                        <h2 className="font-bold text-3xl">Childreen & Extra Beds</h2>
                        <p className="text-2xl">
                            For a hotel or accommodation service, providing features related to children and extra beds is essential to cater to the needs of families and larger groups.
                        </p>
                        <ul className="space-y-5 text-2xl">
                            <li className="flex items-center gap-5"> <FaCheck /> Rooms can accommodate 2-5 people.</li>
                            <li className="flex items-center gap-5"><FaCheck /> Cribs and high chairs provided on request.</li>
                            <li className="flex items-center gap-5"><FaCheck />Equipped with multiple beds.</li>
                            <li className="flex items-center gap-5"><FaCheck /> Rooms include childproofing measures like socket covers and corner guards. </li>
                            <li className="flex items-center gap-5"><FaCheck /> Check with the reservation desk for age-related policies and charges for extra beds.
                            </li>
                        </ul>

                    </div>


                </div>
                <div className="px-10">
                    <div className="flex-1 w-full border rounded-lg border-[#c09d73] mt-5 p-10">

                        <form
                            onSubmit={handleSubmit}
                            className="flex-1 bg-transparent space-y-5 lg:space-y-20 items-center">
                            <div className="grid grid-cols-1 gap-5 ">
                                <div >
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-5">
                                            <FaCheckCircle /> <span className="font-bold">Check In Date</span>
                                        </label>
                                        <input className="p-4 border w-full"
                                            type="date" id="chackin2" required
                                            name="checkIn" />
                                    </div>
                                </div>
                                <div >
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-5">
                                            <IoIosCloseCircleOutline />
                                            <span className="font-bold">Check Out Date</span>
                                        </label>
                                        <input
                                            className="p-4 border w-full"
                                            type="date" required
                                            id="chackout2"
                                            name="checkOut" />
                                    </div>
                                </div>
                                <div >
                                    <div className="space-y-3" >
                                        <label className="flex items-center gap-5">
                                            <FaUsers /> <span className="font-bold">Child</span>
                                        </label>
                                        <select className="p-4 border w-full" required name="child" id="ch2">

                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div >
                                    <div className="space-y-3" >
                                        <label className="flex items-center gap-5">
                                            <FaUsers /> <span className="font-bold">Adults</span>
                                        </label>
                                        <select className="p-4 border w-full" required
                                            name="adults" id="adu2">

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
                                {
                                    availability === true ?

                                        <input
                                            className="font-Cormorrant btn border-none w-full
                                 bg-[#d8ad5d] hover:bg-[#937131] text-white text-xl"
                                            type="submit" value="Book Now" />
                                        :
                                        <input
                                            disabled
                                            className="font-Cormorrant btn border-none w-full
                                 bg-[#d8ad5d] hover:bg-[#937131] text-white text-xl"
                                            type="submit" value="Already Booked" />
                                }


                            </div>
                        </form>
                    </div>

                    <div className="font-Cormorrant">
                        <h2 className="text-3xl font-bold my-10">
                            ROOM FACILITIES
                        </h2>
                        <ul className="space-y-5 text-2xl">
                            <li className="flex items-center gap-5">
                                <PiTelevisionSimpleFill className="text-[#d8ad5d]" /> 48" HD TV with more than 60 channels
                            </li>
                            <li className="flex items-center gap-5">
                                <MdCoffeeMaker className="text-[#d8ad5d]" /> Coffee and tea makers</li>
                            <li className="flex items-center gap-5">
                                <FaMattressPillow className="text-[#d8ad5d]" />High comfortable mattress bed</li>
                            <li className="flex items-center gap-5">
                                <FaWifi className="text-[#d8ad5d]" /> Free WIFI internet connection</li>
                            <li className="flex items-center gap-5">
                                <MdOutlinePool className="text-[#d8ad5d]" /> Swiming Pools</li>
                            <li className="flex items-center gap-5">
                                <MdBreakfastDining className="text-[#d8ad5d]" /> Free Breakfast</li>
                            <li className="flex items-center gap-5">
                                <CgGym className="text-[#d8ad5d]" /> Gym facilities</li>

                        </ul>
                    </div>
                </div>

            </div>

            <Feedbacks feedUrl={`${import.meta.env.VITE_API_URL}/feedback/${_id}`} />
        </div>
    );
};

export default RoomDetails;