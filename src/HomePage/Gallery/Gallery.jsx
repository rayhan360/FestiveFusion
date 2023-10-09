import gallery1 from "../../assets/gallery/galley!.jpg"
import gallery2 from "../../assets/gallery/gallery2.jpeg"
import gallery3 from "../../assets/gallery/galley3.jpeg"
import gallery4 from "../../assets/gallery/galley4.jpg"
import gallery5 from "../../assets/gallery/gallery5.jpg"
import gallery6 from "../../assets/gallery/gallery6.png"
import { FaHeart, FaShareAlt, FaRegEye } from "react-icons/fa";
const Gallery = () => {
    return (
        <div className="mb-10">
            <div className="my-10" data-aos="fade-top" data-aos-duration="1000">
                <h1 className="text-[#43ba7f] text-center text-5xl font-bold">Our Photo Gallery</h1>
                <p className="text-black font-semibold text-center tracking-widest mt-5">Photos of Our Previous Gallery</p>
            </div>
            <div className="box-container md:max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="group relative">
                    <div className="box relative">
                        <img src={gallery1} alt="" className="w-screen h-64" />
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                            <h3 className="text-white text-lg font-semibold mb-2">Photos of Events</h3>
                            <div className="icons text-2xl text-white flex">
                                <p href="" className="mr-2"><FaHeart /></p>
                                <p href="" className="mr-2"><FaShareAlt /></p>
                                <p href=""><FaRegEye /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <div className="box relative">
                        <img src={gallery2} alt="" className="w-screen h-64" />
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                            <h3 className="text-white text-lg font-semibold mb-2">Photos of Events</h3>
                            <div className="icons text-2xl text-white flex">
                                <p href="" className="mr-2"><FaHeart /></p>
                                <p href="" className="mr-2"><FaShareAlt /></p>
                                <p href=""><FaRegEye /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <div className="box relative">
                        <img src={gallery5} alt="" className="w-screen h-64" />
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                            <h3 className="text-white text-lg font-semibold mb-2">Photos of Events</h3>
                            <div className="icons text-2xl text-white flex">
                                <p href="" className="mr-2"><FaHeart /></p>
                                <p href="" className="mr-2"><FaShareAlt /></p>
                                <p href=""><FaRegEye /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <div className="box relative">
                        <img src={gallery6} alt="" className="w-screen h-64" />
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                            <h3 className="text-white text-lg font-semibold mb-2">Photos of Events</h3>
                            <div className="icons text-2xl text-white flex">
                                <p href="" className="mr-2"><FaHeart /></p>
                                <p href="" className="mr-2"><FaShareAlt /></p>
                                <p href=""><FaRegEye /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative md:col-span-2">
                    <div className="box relative">
                        <img src={gallery3} alt="" className="w-screen h-64" />
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                            <h3 className="text-white text-lg font-semibold mb-2">Photos of Events</h3>
                            <div className="icons text-2xl text-white flex">
                                <p href="" className="mr-2"><FaHeart /></p>
                                <p href="" className="mr-2"><FaShareAlt /></p>
                                <p href=""><FaRegEye /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative md:col-span-2">
                    <div className="box relative">
                        <img src={gallery4} alt="" className="w-screen h-64" />
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                            <h3 className="text-white text-lg font-semibold mb-2">Photos of Events</h3>
                            <div className="icons text-2xl text-white flex">
                                <p href="" className="mr-2"><FaHeart /></p>
                                <p href="" className="mr-2"><FaShareAlt /></p>
                                <p href=""><FaRegEye /></p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Gallery;