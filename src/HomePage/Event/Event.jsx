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
        <div>
            <div className="my-10">
                <h1 className="text-[#43ba7f] text-center text-5xl font-bold">Event We work on</h1>
                <p className="text-black font-semibold text-center tracking-widest mt-5">We don&apos;t just plan events; we create memories that last a lifetime.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-10">
                {
                    eventCard.map(card => <SignleEvent key={card.id} card={card}></SignleEvent>)
                }
            </div>
        </div>
    );
};

export default Event;