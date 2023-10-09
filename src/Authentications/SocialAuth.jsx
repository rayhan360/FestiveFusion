import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";

const SocialAuth = () => {
    const { googleSignIn, gitHubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const socialMediaSingIn = media => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success("user logged in successful")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="flex justify-evenly mt-5">
                <button onClick={()=> socialMediaSingIn(googleSignIn)}><FaGoogle className="text-3xl"></FaGoogle></button>
                <button onClick={()=> socialMediaSingIn(gitHubSignIn)}><FaGithub className="text-3xl"></FaGithub></button>
                <button><FaTwitter className="text-3xl"></FaTwitter></button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SocialAuth;