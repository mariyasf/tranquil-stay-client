
import CustomerFeedbackCard from '../../Components/CustomerFeedbackCard';
import { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Feedbacks = ({ feedUrl }) => {
    const { loding } = UseAuth()
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch(feedUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
            });
    }, [feedUrl]);

    // console.log(reviews)
    if (loding) {
        return <div className="text-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }



    return (
        <div className=' mx-auto  my-10'>
            {
                reviews.length > 0 ?
                    <>
                        <div className='text-center  my-10'>
                            <h2 className="text-xl lg:text-3xl font-Rancho  italic  text-center pt-20">What they say</h2>

                            <h2 className='text-3xl lg:text-8xl font-Rancho font-bold'>Customer Reviews: {reviews.length}</h2>
                        </div>

                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >


                            {
                                reviews.map(feed =>
                                    <SwiperSlide key={feed._id}>
                                        <CustomerFeedbackCard
                                            feedUrl={feedUrl}
                                            feed={feed}>
                                        </CustomerFeedbackCard>
                                    </SwiperSlide>
                                )
                            }

                        </Swiper>
                    </>
                    :
                    <>
                        <h2 className='text-3xl lg:text-8xl font-Rancho
                         font-bold text-center'>No Reviews</h2>

                    </>
            }



        </div>
    );
};

export default Feedbacks;