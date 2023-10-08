import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./EventDetails.css"
const EventDetails = () => {
    const event = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const [selected, setSelected] = useState(null);

    const findData = event.find((data) => data.id === idInt);
    const { img, banner, long_description, services_offered, standard_service, custom_service, premium_service, price, price2 } = findData;
    // console.log(standard_service);
    useEffect(() => {
        setSelected("Standard");
    }, []);

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    return (
        <div>
            <img className="w-screen" src={banner} alt="" />
            <div className="my-10 md:flex md:max-w-7xl mx-auto">
                <div className="md:w-1/2">
                    <h1 className="text-5xl text-black font-bold mb-5">Description:</h1>
                    <p className="text-sm md:text-base text-black font-serif tracking-wider">
                        {long_description}
                    </p>
                    <div className="mt-5">
                        <p className="text-4xl text-black font-bold mb-5 ">
                            Service we are offered:
                        </p>
                        <p className="text-black text-lg font-medium">click of the package of your choice-</p>
                        <div className="flex justify-between text-2xl font-semibold mb-5">
                            <button
                                className={`${selected === "Standard" ? "selected-button" : ""} bg-white shadow-lg px-2 py-3 rounded-md`}
                                onClick={() => setSelected("Standard")}
                            >
                                Standard
                            </button>
                            <button
                                className={`${selected === "Premium" ? "selected-button" : ""} bg-white shadow-lg px-2 py-3 rounded-md`}
                                onClick={() => setSelected("Premium")}
                            >
                                Premium
                            </button>
                            <button
                                className={`${selected === "Custom" ? "selected-button" : ""} bg-white shadow-lg px-2 py-3 rounded-md`}
                                onClick={() => setSelected("Custom")}
                            >
                                Custom
                            </button>
                        </div>

                        {selected === "Standard" && (
                            <div>
                                <p className="text-lg mb-2">{standard_service}</p>
                                {services_offered.slice(0, 5).map((service, idx) => (
                                    <li key={idx}>{service}</li>
                                ))}
                                <p className="text-md mt-3 bg-orange-600 text-white btn btn-accent">Standard Price : {price}$</p>
                            </div>
                        )}

                        {selected === "Premium" && (
                            <div>
                                <p className="text-lg mb-2">{premium_service}</p>
                                {services_offered.map((service, idx) => (
                                    <li key={idx}>{service}</li>
                                ))}
                                 <p className="text-md mt-3 bg-orange-600 text-white btn btn-accent">Premium Price : {price2}$</p>
                            </div>
                        )}

                        {selected === "Custom" && (
                            <div>
                                <p className="text-lg">
                                {custom_service}
                            </p>
                            <p className="text-md mt-3 bg-orange-600 text-white btn btn-accent">Custom Price : customer specific needs and preferences</p>
                            </div>
                            
                        )}
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img className="h-96" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
