import Marquee from 'react-fast-marquee';
import CustomerFeedbackCard from '../../Components/CustomerFeedbackCard';
import { useEffect, useState } from 'react';

const Feedbacks = () => {
    const url = `${import.meta.env.VITE_API_URL}/feedback`;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
            });
    }, [url]);


    return (
        <div>
            <div className='text-center my-10'>
                <h2 className="text-3xl font-Rancho  italic  text-center pt-20">What they say</h2>

                <h2 className=' text-8xl font-Rancho font-bold'>Customer Reviews</h2>
            </div>

            <Marquee className='py-10'>
                {
                    reviews.map(feed =>
                        <CustomerFeedbackCard key={feed.id} feed={feed}>

                        </CustomerFeedbackCard>
                    )
                }
            </Marquee>

        </div>
    );
};

export default Feedbacks;