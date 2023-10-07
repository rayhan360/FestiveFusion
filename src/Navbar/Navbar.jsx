import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="flex justify-between py-6 items-center">
            <div className="">
                <h1 className="text-black text-3xl">Festive<span className="text-orange-600">Fusion</span></h1>
            </div>
            <div className="">
                <div className="md:hidden text-2xl mr-8 mt-5" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                    }
                </div>
                <nav className={`absolute bg-white lg:bg-transparent md:block z-50 md:static px-5 ${open ? 'right-1' : '-right-72'} ${open ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <ul className="flex flex-col md:flex-row gap-5">
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
                        <button
                            className="bg-orange-600 text-white px-5 py-2 rounded-md"
                            type="button"
                            data-ripple-light="true"
                        >
                            <span>Log In</span>
                        </button>
                    </div>

                </nav>
            </div>

        </div>
    );
};

export default Navbar;