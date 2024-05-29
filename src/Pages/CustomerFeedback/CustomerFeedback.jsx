import Swal from "sweetalert2";
import Address from "../Address/Address";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CustomerFeedback = () => {
    const { user, loding } = UseAuth();

    const { bookingId } = useParams();

    const [rating, setRating] = useState(1);
    // console.log(bookingId)

    if (loding) {
        return <div className="text-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const message = form.message.value;
        const title = form.title.value;
        const timestamp = new Date();
        const imgUrl = user.photoURL;

        const newFeed = {
            name,
            message,
            title,
            rating,
            timestamp,
            imgUrl,
            bookingId
        }

        // console.log(newFeed)



        fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFeed)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        icon: "success",
                        title: "Sccess",
                        text: 'Feedback Added successfully',
                        confirmButtonText: 'Ok'
                    });
                }
            })

    };


    return (
        <div>
            <Helmet>
                <title>Customer Feedback</title>
            </Helmet>
            <div className='text-center mt-40 mb-10 space-y-5'>
                <h2 className='text-[#d8ad5d] font-Rancho font-bold text-4xl'>
                    Customer Feedback
                </h2>

            </div>
            <div className="card mb-10 lg:card-side bg-[#f8f6f3] lg:h-[550px]   mt-10 mx-5 lg:mx-20">
                <figure>
                    <img src="/Images/r2.jpg"
                        className='h-[450px] lg:h-full w-full lg:w-[550px]'
                        alt="Album" />
                </figure>

                <div className="card-body mx-10">
                    <form onSubmit={handleSubmit}
                        className="p-4 rounded-lg text-black font-Poppins">

                        <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                            <input type="text"
                                id="name" name="name"
                                defaultValue={user?.displayName}
                                disabled

                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
                        </div>

                        <div className="flex flex-col lg:flex-row gap-5 justify-between">
                            <div className="mb-4">
                                <label htmlFor="title" className="block font-semibold mb-1">Title</label>
                                <input type="text"
                                    id="title" name="title"
                                    placeholder="Title"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="rat-ing" className="block font-semibold mb-1">Rating</label>

                                {
                                    [1, 2, 3, 4, 5].map(num => (
                                        <div
                                            className={`btn rounded-full px-5 border-2 border-black
                                            
                                            ${rating >= num ? 'bg-orange-400' : null}`}
                                            key={num}
                                            onClick={(e) => {
                                                console.log(num)
                                                setRating(num)
                                            }

                                            }>{num}</div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block font-semibold mb-1">Message</label>
                            <textarea id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
                        </div>


                        <div className='flex justify-end'>
                            <input
                                className="btn w-full bg-[#d8ad5d] text-white "
                                type="submit"
                                value="Submit" />
                        </div>
                    </form>
                </div>
            </div >
            <Address />
        </div >


    );
};

export default CustomerFeedback;