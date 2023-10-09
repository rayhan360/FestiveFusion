
import { useEffect } from "react";
import Event from "./Event/Event";
import Banner from "./banner";
import Gallery from "./Gallery/Gallery";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    useEffect(()=> {
      window.scrollTo(0,0)
    },[])
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <Event></Event>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;