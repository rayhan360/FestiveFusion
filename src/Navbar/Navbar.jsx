import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="flex justify-between py-6 items-center lg:absolute lg:z-20 lg:gap-[700px] lg:ml-32">
            <div className="">
                <h1 className="lg:text-white text-3xl">Festive<span className="text-[#43ba7f]">Fusion</span></h1>
            </div>
            <div className="">
                <div className="md:hidden text-2xl mr-8 mt-5" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                    }
                </div>
                <nav className={`absolute bg-white z-50 lg:bg-transparent md:block md:static px-5 ${open ? 'right-1' : '-right-72'} ${open ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <ul className="flex flex-col md:flex-row gap-5 lg:text-white">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog">blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                        <Link to="/login">
                            <button
                                className="bg-[#43ba7f] text-white px-5 py-2 rounded-md"
                                type="button"
                                data-ripple-light="true"
                            >
                                Log in
                            </button>
                        </Link>
                    </div>

                </nav>
            </div>

        </div>
    );
};

export default Navbar;