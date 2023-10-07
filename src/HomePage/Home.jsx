import Navbar from "../Navbar/Navbar";
import Event from "./Event/Event";
import Banner from "./banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Event></Event>
        </div>
    );
};

export default Home;