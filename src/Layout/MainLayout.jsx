import { Outlet } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const MainLayout = () => {

    useEffect(() => {
        AOS.init({
          duration: 800, 
          easing: 'ease-in-out',
        });
      }, []);

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;