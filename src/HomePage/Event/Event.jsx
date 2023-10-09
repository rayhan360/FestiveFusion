import { useState, useEffect } from "react"
import SignleEvent from "./SignleEvent";

const Event = () => {
    const [eventCard, setEventCard] = useState([])

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setEventCard(data))
    }, [])
    return (
        <div id="event">
            <div className="my-10" data-aos="fade-top" data-aos-duration="1000">
                <h1 className="text-[#43ba7f] text-center text-5xl font-bold">Event We work on</h1>
                <p className="text-black font-semibold text-center tracking-widest mt-5">We don&apos;t just plan events; we create memories that last a lifetime.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="8000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:ml-10">
                {
                    eventCard.slice(0,6).map(card => <SignleEvent key={card.id} card={card}></SignleEvent>)
                }
            </div>
        </div>
    );
};

export default Event;