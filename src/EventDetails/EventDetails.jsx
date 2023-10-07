import { useLoaderData, useParams } from "react-router-dom"

const EventDetails = () => {
    const event = useLoaderData()

    const { id } = useParams()
    const idInt = parseInt(id)

    const findData = event.find(data => data.id === idInt)
    const {name, img} = findData
    

    return (
        <div>
            <img className="h-screen w-screen" src={img} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default EventDetails;