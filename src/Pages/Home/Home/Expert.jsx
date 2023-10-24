import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function Expert() {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('meet.json')
            .then((res) => res.json())
            .then((data) => setExperts(data));
    }, []);

    return (
        <div className='p-4 lg:p-28 mt-10'>
            <h1 className='text-center text-red-600 font-extrabold text-4xl lg:text-8xl mb-10 mt-10 '>Meet Our Team</h1>
            <Swiper
                spaceBetween={30}
                speed={1000}
                parallax={true}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"            
                breakpoints={{   
                    640: {
                        slidesPerView: 1,
                    },
                    641: {
                        slidesPerView: 3,
                    },
                }}
            >
                {experts.map((expert, index) => (
                    <div key={index} className="mb-16">
                        <SwiperSlide>
                            <div className="card card-compact w-96 bg-base-100">
                                <figure>
                                    <img src={expert.image} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{expert.name}</h2>
                                    <p className='text-2xl font-bold mb-10'>{expert.position}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
}
