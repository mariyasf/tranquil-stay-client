import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles/styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SwipperImg = ({ roomImages }) => {
    // console.log(roomImages);

    return (
        <div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    roomImages.map((img, i) =>
                        <SwiperSlide key={i}>
                            <img

                                src={img} alt="" />
                        </SwiperSlide>
                    )

                }

            </Swiper>
        </div>
    );
};

export default SwipperImg;