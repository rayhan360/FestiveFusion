
import { useEffect } from "react";
import Event from "./Event/Event";
import Banner from "./banner";


const Home = () => {
    useEffect(()=> {
      window.scrollTo(0,0)
    },[])
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <Event></Event>
        </div>
    );
};

export default Home;