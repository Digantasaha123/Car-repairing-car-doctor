import person1 from "../assets/person3.jpeg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import {  FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Rating from "react-rating";


export default function Testemonial() {
    const rating = 4.5;
  return (
    <div className='p-8 lg:pl-48 lg:pr-48'>
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>  

      <div className=' bg-gray-200 rounded-2xl  w-full text-center p-16 bg-base-700 relative shadow-2xl'>
      <div className="flex justify-between ">
      <div>
                            <FaQuoteLeft className='text-5xl text-[#ff3811]' />

                        </div>
                            <img className='w-[50px] h-[50px]  rounded-full' src={person1} alt="" />
                            <div>
                            <FaQuoteRight className='text-5xl text-[#ff3811]' />

                        </div>

                        </div>
                   <div className=" mx-auto">
                   <div className=''>
                        
                        <div className="">
                            <p className='font-bold text-xl text-center mt-5'>Awlad Hossain</p>
                            <p className='text-[#737373]font-bold'>Businessman</p>
                        </div>
                        <div className="ml-[30%] lg:ml-[45%]">
                        <div className='flex items-center gap-2 text-center'>
                            <Rating
                                emptySymbol={<span className="text-[#D3D3D3]  text-xl md:text-2xl">&#9733;</span>}
                                fullSymbol={<span className="text-[#FF912C] text-xl md:text-2xl">&#9733;</span>}
                                initialRating={rating}
                                readonly
                            />
                            <p className="text-[#FF912C]  font-bold">{rating.toFixed(1)}</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#737373] p-20 text-2xl'>
                            I have had the pleasure of working with this company for several years now, and I couldnot be happier with their services. From the moment I engaged with their team, I knew I was in good hands. They are not just a vendor; they are a partner who genuinely care about my business success.
                        </p>
                        
                    </div>
                   </div>

                </div>
      </SwiperSlide>
      <SwiperSlide>  

      <div className=' bg-gray-200 rounded-2xl  w-full text-center p-16 bg-base-700 relative shadow-xl'>
      <div className="flex justify-between ">
      <div>
                            <FaQuoteLeft className='text-5xl text-[#ff3811]' />

                        </div>
                            <img className='w-[50px] h-[50px]  rounded-full' src={person1} alt="" />
                            <div>
                            <FaQuoteRight className='text-5xl text-[#ff3811]' />

                        </div>

                        </div>
                   <div className=" mx-auto">
                   <div className=''>
                        
                        <div className="">
                            <p className='font-bold text-xl text-center mt-5'>Awlad Hossain</p>
                            <p className='text-[#737373]font-bold'>Businessman</p>
                        </div>
                        <div className="ml-[30%] lg:ml-[45%]">
                        <div className='flex items-center gap-2 text-center'>
                            <Rating
                                emptySymbol={<span className="text-[#D3D3D3]  text-xl md:text-2xl">&#9733;</span>}
                                fullSymbol={<span className="text-[#FF912C] text-xl md:text-2xl">&#9733;</span>}
                                initialRating={rating}
                                readonly
                            />
                            <p className="text-[#FF912C]  font-bold">{rating.toFixed(1)}</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#737373] p-20 text-2xl'>
                            I have had the pleasure of working with this company for several years now, and I couldnot be happier with their services. From the moment I engaged with their team, I knew I was in good hands. They are not just a vendor; they are a partner who genuinely care about my business success.
                        </p>
                        
                    </div>
                   </div>

                </div>
      </SwiperSlide>
      <SwiperSlide>  

      <div className=' bg-gray-200 rounded-2xl w-full text-center p-16 bg-base-700 relative shadow-xl'>
      <div className="flex justify-between ">
      <div>
                            <FaQuoteLeft className='text-5xl text-[#ff3811]' />

                        </div>
                            <img className='w-[50px] h-[50px]  rounded-full' src={person1} alt="" />
                            <div>
                            <FaQuoteRight className='text-5xl text-[#ff3811]' />

                        </div>

                        </div>
                   <div className=" mx-auto">
                   <div className=''>
                        
                        <div className="">
                            <p className='font-bold text-xl text-center mt-5'>Awlad Hossain</p>
                            <p className='text-[#737373]font-bold'>Businessman</p>
                        </div>
                        <div className="ml-[30%] lg:ml-[45%]">
                        <div className='flex items-center gap-2 text-center'>
                            <Rating
                                emptySymbol={<span className="text-[#D3D3D3]  text-xl md:text-2xl">&#9733;</span>}
                                fullSymbol={<span className="text-[#FF912C] text-xl md:text-2xl">&#9733;</span>}
                                initialRating={rating}
                                readonly
                            />
                            <p className="text-[#FF912C]  font-bold">{rating.toFixed(1)}</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#737373] p-20 text-2xl'>
                            I have had the pleasure of working with this company for several years now, and I couldnot be happier with their services. From the moment I engaged with their team, I knew I was in good hands. They are not just a vendor; they are a partner who genuinely care about my business success.
                        </p>
                        
                    </div>
                   </div>

                </div>
      </SwiperSlide>
      <SwiperSlide>  

      <div className='bg-gray-200 rounded-2xl w-full text-center p-16 bg-base-700 relative shadow-xl'>
      <div className="flex justify-between ">
      <div>
                            <FaQuoteLeft className='text-5xl text-[#ff3811]' />

                        </div>
                            <img className='w-[50px] h-[50px]  rounded-full' src={person1} alt="" />
                            <div>
                            <FaQuoteRight className='text-5xl text-[#ff3811]' />

                        </div>

                        </div>
                   <div className=" mx-auto">
                   <div className=''>
                        
                        <div className="">
                            <p className='font-bold text-xl text-center mt-5'>Awlad Hossain</p>
                            <p className='text-[#737373]font-bold'>Businessman</p>
                        </div>
                        <div className="ml-[30%] lg:ml-[45%]">
                        <div className='flex items-center gap-2 text-center'>
                            <Rating
                                emptySymbol={<span className="text-[#D3D3D3]  text-xl md:text-2xl">&#9733;</span>}
                                fullSymbol={<span className="text-[#FF912C] text-xl md:text-2xl">&#9733;</span>}
                                initialRating={rating}
                                readonly
                            />
                            <p className="text-[#FF912C]  font-bold">{rating.toFixed(1)}</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#737373] p-20 text-2xl'>
                            I have had the pleasure of working with this company for several years now, and I couldnot be happier with their services. From the moment I engaged with their team, I knew I was in good hands. They are not just a vendor; they are a partner who genuinely care about my business success.
                        </p>
                        
                    </div>
                   </div>

                </div>
      </SwiperSlide>
      <SwiperSlide>  

      <div className='bg-gray-200 rounded-2xl w-full text-center p-16 bg-base-700 relative shadow-xl'>
      <div className="flex justify-between ">
      <div>
                            <FaQuoteLeft className='text-5xl text-[#ff3811]' />

                        </div>
                            <img className='w-[50px] h-[50px]  rounded-full' src={person1} alt="" />
                            <div>
                            <FaQuoteRight className='text-5xl text-[#ff3811]' />

                        </div>

                        </div>
                   <div className=" mx-auto">
                   <div className=''>
                        
                        <div className="">
                            <p className='font-bold text-xl text-center mt-5'>Awlad Hossain</p>
                            <p className='text-[#737373]font-bold'>Businessman</p>
                        </div>
                        <div className="ml-[30%] lg:ml-[45%]">
                        <div className='flex items-center gap-2 text-center'>
                            <Rating
                                emptySymbol={<span className="text-[#D3D3D3]  text-xl md:text-2xl">&#9733;</span>}
                                fullSymbol={<span className="text-[#FF912C] text-xl md:text-2xl">&#9733;</span>}
                                initialRating={rating}
                                readonly
                            />
                            <p className="text-[#FF912C]  font-bold">{rating.toFixed(1)}</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#737373] p-20 text-2xl'>
                            I have had the pleasure of working with this company for several years now, and I couldnot be happier with their services. From the moment I engaged with their team, I knew I was in good hands. They are not just a vendor; they are a partner who genuinely care about my business success.
                        </p>
                        
                    </div>
                   </div>

                </div>
      </SwiperSlide>
      
      
    </Swiper>
  </div>
  )
}
