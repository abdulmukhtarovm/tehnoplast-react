import React from 'react'
// import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
const Partners = () => {
    return (
        <div className="partners mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h2 className="main-title">Наши партнёры</h2>
                    </div>

                </div>

            </div>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                loop={true}
                spaceBetween={0}
                grabCursor={true}

                breakpoints={{
                    1200: {
                      slidesPerView: 6,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    0: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}

                modules={[Autoplay, FreeMode]}
                className="mySwiper d-flex align-items-center"
            >
                <SwiperSlide> <img className='w-100' src="/img/Frame 1.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 2.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 3.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 4.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 5.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 6.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 7.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 8.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 9.png" alt="" /></SwiperSlide>

                <SwiperSlide> <img className='w-100' src="/img/Frame 10.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 11.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 12.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 13.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 14.png" alt="" /></SwiperSlide>
                {/* <SwiperSlide> <img className='w-100' src="/img/Frame 15.png" alt="" /></SwiperSlide> */}
                <SwiperSlide> <img className='w-100' src="/img/Frame 16.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 17.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 18.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 19.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 20.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 21.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 22.png" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-100' src="/img/Frame 23.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Partners