import "swiper/css";
import "swiper/css/navigation";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';



const Banner = () => {
    const setting = {
        modules: [Navigation, Autoplay],
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }


    }

    return (
        <>
            <Swiper {...setting} navigation={true}  >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slider1} className='h-screen w-screen' alt="" />
                        <div className="hero h-full absolute left-0 top-0 bg-black bg-opacity-80" >
                            <div className="hero-content text-center mb-36">
                                <div className="flex flex-col h-[60vh] justify-center">
                                    <h1 className="text-2xl md:text-5xl text-white font-bold">Welcome to <span className="text-[#43ba7f]">FestiveFusion</span>: Your Cultural Celebration Expert</h1>
                                    <div className='mt-10'>
                                        <p className=" text-gray-200">At FestiveFusion, we specialize in crafting unforgettable cultural celebrations that blend tradition and innovation. Let us bring your cultural dreams to life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slider2} className='h-screen w-screen' alt="" />
                        <div className="hero h-full absolute left-0 top-0 bg-black bg-opacity-80" >
                            <div className="hero-content text-center mb-36">
                                <div className="flex flex-col h-[60vh] justify-center">
                                    <h1 className="text-2xl md:text-5xl text-white font-bold">Expert <span className="text-[#43ba7f]">Cultural Event</span> Planning or Customized Cultural Experiences</h1>
                                    <div className='mt-10'>
                                        <p className=" text-gray-200">Discover the expertise of FestiveFusion - your trusted partner for expert cultural event planning and personalized cultural experiences. Tailored to your unique vision.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slider3} className='h-screen w-screen' alt="" />
                        <div className="hero h-full absolute left-0 top-0 bg-black bg-opacity-80" >
                            <div className="hero-content text-center mb-36">
                                <div className="flex flex-col h-[60vh] justify-center">
                                    <h1 className="text-2xl md:text-5xl text-white font-bold">Celebrating Culture: Experts in <span className="text-[#43ba7f]">Memorable Events</span></h1>
                                    <div className='mt-10'>
                                        <p className=" text-gray-200">We are passionate about celebrating culture and creating lasting memories. With years of experience, we&apos;re your go-to experts for extraordinary cultural events.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
