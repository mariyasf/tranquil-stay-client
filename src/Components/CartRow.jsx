
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const CartRow = ({ booking, onDelete }) => {

    const axiosSecure = UseAxiosSecure();


    const {
        _id,
        email, name, availability,
        bookingId,
        checkIn,
        checkOut,
        child,
        adults, img,
        bookingCategory,
        bookingRoomTypes,
        bookingPricePerNight,
    } = booking
    const Imgicon = img[0];
    console.log(img)

    const handleDelete = async () => {
        try {
            const today = new Date();
            const cancellationDate = new Date(checkIn);
            cancellationDate.setDate(cancellationDate.getDate() - 1);

            if (today < cancellationDate) {
                const response = await axiosSecure
                    .delete(`/booking/${booking._id}`);
                if (response.status === 200) {
                    onDelete(booking._id);

                    Swal.fire({
                        title: "Cancel Booking!",
                        text: "Do you want to cancel this booking?",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, cancel it!"
                    }).then((result) => {
                        if (result.isConfirmed) {

                            Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
                        }
                    });

                }
            }
            else {
                Swal.fire({
                    title: "Cannot Cancel Booking",
                    text: "It's too late to cancel this booking. You can only cancel up to one day before the check-in date.",
                    icon: "error",
                });
            }

        } catch (error) {
            console.error("There was an error deleting the booking!", error);
        }
    }

    return (
        <tr>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <Link to={`/rooms/${bookingId}`}>
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-8 h-8 rounded-full"
                            src={img} alt="" />
                        <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{bookingRoomTypes}</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{bookingCategory}</p>
                        </div>
                    </div>
                </Link>
            </td>


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
                <Link to={`/update/${email}/${_id}`}>
                    <button>
                        <FaEdit />
                    </button>
                </Link>
            </td>
            <td className="px-4 py-4 text-2xl text-center 
                                             text-gray-300">
                <button onClick={handleDelete}>
                    <MdDelete />
                </button>
            </td>
            <td className="px-4 py-4 text-2xl text-center 
                                             text-gray-300">
                <Link to={`/feedback/${bookingId}`}>
                    <button>
                        <VscFeedback />
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default CartRow;