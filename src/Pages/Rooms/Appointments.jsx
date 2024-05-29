import axios from "axios";
import { MdRoomService } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { Helmet } from "react-helmet";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const Appointments = () => {
    const booking = useLoaderData();
    const axiosSecure = UseAxiosSecure()
    // console.log(booking)

    const { user } = UseAuth()

    const {
        _id,
        email,
        checkIn,
        checkOut,
        child,
        adults, img,
        bookingRoomTypes
    } = booking

    const handleUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;

        const newCheckIn = form.checkIn.value;
        const newCheckOut = form.checkOut.value;
        const newAdults = parseInt(form.adults.value);
        const newChild = parseInt(form.child.value);

        const newUpdate = {
            newCheckIn,
            newCheckOut,
            newAdults,
            newChild
        }
        // console.log(newUpdate);

        try {
            const response = await axiosSecure
                .patch(`/booking/${_id}`, newUpdate);

            if (response.status === 200) {
                Swal.fire({
                    title: "Success!",
                    text: "Booking dates updated successfully!",
                    icon: "success",
                    confirmButtonText: "OK"
                });
            }
        }

        catch (error) {
            Swal.fire({
                title: "Error!",
                text: "There was an error updating the booking.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    };


    return (
        <div className="bg-[#f8f6f3] pb-20 pt-40">
            <Helmet>
                <title>Update Booking</title>
            </Helmet>

            <div className="text-center ">
                <h2 className="text-3xl font-Rancho  italic  text-center pt-20">Update Your Appointment</h2>
                <h2 className="text-8xl font-Rancho font-bold text-center pt-5">{bookingRoomTypes}</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-20 max-w-[1240px]
             mx-auto mt-10  ">

                <div className="flex-1 border rounded-lg border-[#c09d73] p-10 mx-5">

                    <form
                        onSubmit={handleUpdate}
                        className="flex-1 bg-transparent mt-30 px-5 space-y-5 lg:space-y-20 items-center">
                        <div className="grid grid-cols-1 gap-5 ">
                            <div >
                                <div className="space-y-3">
                                    <label className="flex items-center gap-5">
                                        <FaCheckCircle /> <span className="font-bold">Check In Date</span>
                                    </label>
                                    <input
                                        defaultValue={checkIn}
                                        // onChange={(e) => setNewCheckIn(e.target.value)}
                                        className="p-4 border w-full"
                                        type="date" id="chackin2" name="checkIn" />
                                </div>
                            </div>
                            <div >
                                <div className="space-y-3">
                                    <label className="flex items-center gap-5">
                                        <IoIosCloseCircleOutline />
                                        <span className="font-bold">Check Out Date</span>
                                    </label>
                                    <input className="p-4 border w-full"
                                        defaultValue={checkOut}
                                        // onChange={(e) => setNewCheckOut(e.target.value)}
                                        type="date" id="chackout2" name="checkOut" />
                                </div>
                            </div>
                            <div >
                                <div className="space-y-3" >
                                    <label className="flex items-center gap-5">
                                        <FaUsers /> <span className="font-bold">Child</span>
                                    </label>
                                    <select
                                        defaultValue={child}
                                        // onChange={(e) => setNewChild(e.target.value)}
                                        className="p-4 border w-full"
                                        name="child"
                                        id="adu2">

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
                                <div className="space-y-3">
                                    <label className="flex items-center gap-5">
                                        <MdRoomService /><span className="font-bold">Adults</span>
                                    </label>
                                    <select className="p-4 border w-full"
                                        name="adults"
                                        defaultValue={adults}
                                        // onChange={(e) => setNewAdults(e.target.value)}
                                        id="rm2">

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
                                type="submit" value="Update" />
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