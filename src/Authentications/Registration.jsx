/* eslint-disable no-useless-escape */
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import signUp from "../assets/signup.gif"
import "./authentication.css"
import SocialAuth from "./SocialAuth";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from "firebase/auth";
const Registration = () => {
    const [showPassword, setShowPassword] = useState(false)

    // context
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleRegistration = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        // console.log(name, photo, email, password, terms);

        // validation
        if (password.length < 6) {
            toast.error("password should at least 6 character or longer").
                return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("your password at least one uppercase character")
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            console.log("Your password should contain at least one special character");
            toast.error("Your password should contain at least one special character");
            return;
        }
        else if (!terms) {
            toast.error("please accept our terms and condition")
            return
        }



        createUser(email, password)
            .then(result => {
                console.log(result.user)
                // swal("Login Successful", "Welcome back!", "success");
                toast.success("user log in successful")
                e.target.reset;
                
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                navigate(location?.state ? location.state : "/")
                window.location.reload()
            })
            .catch(error => {
                console.log(error.message)
                if(error.code === "auth/email-already-in-use"){
                    toast.error("email already in use")
                }
            })


    }

    return (
        <div>
            <div className="bg-set" >
                <div className="flex justify-center">
                    <div className="mt-20 flex flex-col bg-white p-10 rounded-xl bg-clip-border text-gray-700 shadow-none">
                        <div className="flex justify-center">
                            <img src={signUp} alt="" />
                        </div>
                        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Sign Up
                        </h4>
                        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Enter your details to Register.
                        </p>
                        <form onSubmit={handleRegistration} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input

                                        type="text"
                                        name="name"
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#43ba7f] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        required

                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#43ba7f] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#43ba7f] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#43ba7f] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Name
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input

                                        type="text"
                                        name="photo"
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#43ba7f] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#43ba7f] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#43ba7f] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#43ba7f] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Photo URL
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input

                                        type="email"
                                        name="email"
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#43ba7f] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        required

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
                                        required
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
                            </div>
                            <div className="inline-flex items-center">
                                <div className="mt-4">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className="ml-2" htmlFor="terms">Accept our terms and condition</label>
                                </div>
                            </div>

                            <button
                                className="mt-6 block w-full select-none rounded-lg bg-[#43ba7f] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#43ba7f]/20 transition-all hover:shadow-lg hover:shadow-[#43ba7f]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                            >
                                Sign up
                            </button>
                        </form>
                        <SocialAuth></SocialAuth>
                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Already have an account? please
                            <Link to="/login"
                                className="font-medium text-[#43ba7f] transition-colors hover:text-blue-700"
                                href="#"
                            >
                                Sign in
                            </Link>
                        </p>


                    </div>

                </div>

            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Registration;