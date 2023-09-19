import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import CardImage from '../../img/Imagew.png'
import CardImage2 from '../../img/Imagef.png'
import CardImage3 from '../../img/ImageN.png'
import './Blog.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from '../../Contexts/ThemeContext'



export const Blog = () => {
    const { purpleMode, togglePurpleMode } = useTheme()

    return (
        <div id="blog-id" className="blog">
            <div className="container">
                <div className='text-start pt-5 pb-3'>
                    <h2 className='headline'>Blog</h2>
                    <p style={{ color: purpleMode ? "#fff" : "" }} data-aos="fade-right" data-aos-duration="600"
                        data-aos-easing="ease-in-out" className="sub-headline mt-3">Here is the some of recent blog posts about my work and activities.
                        Each of them reflects my focus on user-centered design and my commitment to excellence in user experience.
                    </p></div>

                <Swiper

                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                    style={{
                        "--swiper-pagination-color": "#FFBA08",
                        "--swiper-pagination-bullet-inactive-color": "gray",
                        "--swiper-pagination-bullet-inactive-opacity": "1",

                    }}
                    breakpoints={{
                        767: { slidesPerView: 3 },
                        500: { slidesPerView: 2, spaceBetween: 30 },
                        0: { slidesPerView: 1 },

                    }}

                >
                    <SwiperSlide>
                        <img data-aos="fade-right" data-aos-duration="600"
                            data-aos-easing="ease-in-out" className='swiper-img' src={CardImage} alt="img" />
                        <p style={{ color: purpleMode ? "#fff" : "" }}
                            data-aos-easing="ease-in-out" className='blog-post'>Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity.  </p>

                    </SwiperSlide>

                    <SwiperSlide>
                        <img data-aos="fade-right" data-aos-duration="600"
                            data-aos-easing="ease-in-out" className='swiper-img' src={CardImage2} alt="img" />
                        <p style={{ color: purpleMode ? "#fff" : "" }} data-aos="fade-right" data-aos-duration="600"
                            data-aos-easing="ease-in-out" className='blog-post'>Designed a user-friendly travel booking app that enables users to effortlessly plan and book their dream vacations. </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img data-aos="fade-right" data-aos-duration="600"
                            data-aos-easing="ease-in-out" className='swiper-img' src={CardImage3} alt="img" />
                        <p style={{ color: purpleMode ? "#fff" : "" }} className='blog-post' data-aos="fade-right" data-aos-duration="600"
                            data-aos-easing="ease-in-out">Developed an intuitive online streaming app that brings entertainment to users' fingertips.  </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='swiper-img' src={CardImage} alt="img" />
                        <p style={{ color: purpleMode ? "#fff" : "" }} className='blog-post'>Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity.  </p>  </SwiperSlide>

                </Swiper>


            </div>
        </div>


    )

}
