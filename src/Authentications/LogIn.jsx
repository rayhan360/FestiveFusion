import { Link, useLocation, useNavigate } from "react-router-dom"
import gif from "../assets/login.gif"
import "./authentication.css"
import SocialAuth from "./SocialAuth";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState()
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("User Login Successful")
                e.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.code);
                if (error.code === 'auth/wrong-password') {
                    toast.error('Incorrect password. Please try again.');
                } else if (error.code === 'auth/user-not-found') {
                    toast.error('User not found. Please check your email.');
                } else if (error.code === 'auth/invalid-login-credentials') {
                    toast.error('Invalid email or password. Please double-check your email and password.');
                } else {
                    toast.error('please provide valid password and email');
                }
            })
    }

    return (
        <div className="bg-set" >
            <div className="flex justify-center">
                <div className="mt-20 flex flex-col bg-white p-10 rounded-xl bg-clip-border text-gray-700 shadow-none">
                    <div className="flex justify-center">
                        <img src={gif} alt="" />
                    </div>
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Sign In
                    </h4>
                    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Enter your details to Login.
                    </p>
                    <form onSubmit={handleLogIn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input

                                    type="email"
                                    name="email"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#43ba7f] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "

                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#43ba7f] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#43ba7f] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#43ba7f] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>


                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#43ba7f] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-3 cursor-pointer">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#43ba7f] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#43ba7f] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#43ba7f] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>

                            <div className="form-control flex">
                                <div className="inline-flex items-center">
                                    <div className="mt-4">
                                        <input type="checkbox" name="terms" id="terms" />
                                        <label className="ml-2 " htmlFor="terms">Remember Me</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-[#43ba7f] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#43ba7f]/20 transition-all hover:shadow-lg hover:shadow-[#43ba7f]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Sign In
                        </button>
                    </form>

                    <SocialAuth></SocialAuth>
                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Do not have an account?
                        <Link to="/registration"
                            className="font-medium text-[#43ba7f] transition-colors hover:text-blue-700"
                            href="#"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>

            </div>
            <Toaster></Toaster>

        </div>
    );
};

export default LogIn;