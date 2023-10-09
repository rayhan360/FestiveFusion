import { useEffect, useState } from "react";
import banner from "../assets/slider-2.jpg"
import SingleCard from "./SingleCard";
import { FaCheckCircle } from "react-icons/fa";
import toast from 'react-hot-toast';
const FestivalSecret = () => {
    const [eventCard, setEventCard] = useState([])
    // Function to handle subscription form submission
    const handleSubscribe = (e) => {
        e.preventDefault();
        toast.success("your ticket booking has bee successful! check your email");
        e.target.reset()
    };

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setEventCard(data))
    }, [])

    return (
        <section className="">
            {/* Background Image */}
            <div className='relative h-screen'>
                <img src={banner} className='h-screen w-screen' alt="" />
                <div className="hero h-full absolute left-0 top-0 bg-black bg-opacity-80" >
                    <div className="hero-content text-center mb-36">
                        <div className="flex flex-col h-[60vh] justify-center space-y-5 mt-10">
                            <h1 data-aos="fade-right" className="text-2xl md:text-3xl text-white font-bold">&quot;Step into a World of Enchantment and Celebration!
                                Join Us for a Spectacular Festival Experience Like No Other&quot;</h1>
                            <p data-aos="fade-left" className="text-gray-200">Get Ready to: <br />
                                ✨ Immerse Yourself in Mesmerizing Performances <br />
                                ✨ Indulge in Delectable Culinary Delights <br />
                                ✨ Discover Hidden Treasures at Our Artisan Market <br />
                                ✨ Dance Under the Starry Skies to Live Music <br />
                                ✨ Create Unforgettable Memories with Loved Ones</p>
                            <div data-aos="fade-left" className='mt-10'>
                                <p className=" text-gray-200">Don&apos;t Miss Out on the Festival of a Lifetime!
                                    Book Your Tickets Now and Be Part of the Magic ✨🎉</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* event card */}
            <div>
                <div className="my-10" data-aos="fade-top" data-aos-duration="1000">
                    <h1 className="text-[#43ba7f] text-center text-5xl font-bold">We are going to organize the next event</h1>
                    <p className="text-black font-semibold text-center tracking-widest mt-5">We don&apos;t just plan events; we create memories that last a lifetime.</p>
                </div>
                <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:ml-10">
                    {
                        eventCard.slice(6, 9).map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                    }
                </div>
            </div>

            {/* pricing */}

            <div data-aos="fade-up" className="bg-gray-100 py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-[#43ba7f] font-semibold text-center mb-10">
                        our next event Festival Ticket Pricing Category
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Standard Package */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Standard Package</h3>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Access to Festival Area
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Food and Drinks Included
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Live Music Performances
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Festival Merchandise
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    General Seating
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Festival Guided Tours
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Souvenir Photos
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Access to Art and Craft Exhibitions
                                </li>
                                {/* Add more features */}
                            </ul>
                            <div className="mt-6 text-center">
                                <span className="text-2xl font-semibold text-green-500">$19</span>
                                <span className="text-gray-600 ml-2">per person</span>
                            </div>
                            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
                                Select
                            </button>
                        </div>

                        {/* Premium Package */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Premium Package</h3>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Access to Festival Area
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    VIP Lounge Access
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Premium Seating
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Exclusive Festival Workshops
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Private Meet and Greet with Artists

                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Complimentary Festival T-shirt

                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Fast-Track Entry

                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Gourmet Dining Experience
                                    Festival Swag Bag
                                </li>


                            </ul>
                            <div className="mt-6 text-center">
                                <span className="text-2xl font-semibold text-green-500">$29</span>
                                <span className="text-gray-600 ml-2">per person</span>
                            </div>
                            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
                                Select
                            </button>
                        </div>

                        {/* VIP Package */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800">VIP Package</h3>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Exclusive VIP Access

                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    VIP Lounge & Dining

                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Private Festival Concert

                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Luxury Accommodation

                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Personal Festival Concierge


                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    VIP Parking


                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Festival After-Party Pass


                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle>
                                    Customized Festival Experience
                                </li>
                            </ul>
                            <div className="mt-6 text-center">
                                <span className="text-2xl font-semibold text-green-500">$49</span>
                                <span className="text-gray-600 ml-2">per person</span>
                            </div>
                            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* booking */}
            <section className="bg-gray-100">
                <form onSubmit={handleSubscribe} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 mx-auto max-w-3xl">
                    <h3 className="text-3xl font-bold text-center mb-6">Confirm Your Ticker</h3>
                    <div className="mb-4 flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-4">
                            <input
                                className="appearance-none block w-full bg-white text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-white text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-4">
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Your Event?</option>
                                <option>Christmas Celebration</option>
                                <option>New Year&apos;s Eve (31st Night)</option>
                                <option>Cultural Fest</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Select Your Event?</option>
                                    <option>Christmas Celebration</option>
                                    <option>New Year&apos;s Eve (31st Night)</option>
                                    <option>Cultural Fest</option>
                                </select>
                        </div>
                    </div>

                    <textarea
                        className="appearance-none block w-full bg-white text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name=""
                        placeholder="Message"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn bg-[#43ba7f] text-white px-5 py-2 rounded-md mt-4 hover:bg-[#3eaf76]"
                        required
                    />
                </form>
            </section>



        </section >
    );
};

export default FestivalSecret;
