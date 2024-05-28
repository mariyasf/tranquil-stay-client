
import UseAuth from "../../Hooks/UseAuth";
import { useEffect, useState } from "react";
import CartRow from "../../Components/CartRow";
import { Helmet } from "react-helmet";


const MyCart = () => {
    const { user, loding } = UseAuth();

    const [mybooking, setMyBooking] = useState([]);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/booking/${user?.email}`)
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                const sortedBookings = data.sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));

                setMyBooking(sortedBookings);
            })

    }, [user])

    if (loding) {
        return <div className="text-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }


    const handleDelete = (id) => {
        setMyBooking(mybooking.filter(booking => booking._id !== id));
    };




    return (
        <div >
            <Helmet>
                <title>My Cart</title>
            </Helmet>

            <section className="container px-4 lg:px-0  max-w-[1240px] mx-auto pb-10">
                <div className="flex flex-col">
                    <div className="overflow-x-auto ">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200
                              md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200
                                 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">

                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">
                                                Check In
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">
                                                Check Out
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">
                                                People
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">
                                                Offers
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">
                                                Rate
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">
                                                Update
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">
                                                Delete
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">
                                                Feedback
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            mybooking.map(booking =>
                                                <CartRow
                                                    key={booking._id}
                                                    onDelete={handleDelete}

                                                    booking={booking} />
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                 
            </section>
        </div>
    );
};

export default MyCart;