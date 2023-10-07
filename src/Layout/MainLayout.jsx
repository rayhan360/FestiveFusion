import { Outlet } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
const MainLayout = () => {
    
    useEffect(() => {
        AOS.init({
          duration: 800, 
          easing: 'ease-in-out',
          once: true,
        });
      }, []);

    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;