import { Outlet } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Footer from "../Footer/Footer";
const MainLayout = () => {

    useEffect(() => {
        AOS.init({
          duration: 800, 
          easing: 'ease-in-out',
        });
      }, []);

    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;