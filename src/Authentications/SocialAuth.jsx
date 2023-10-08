import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider";


const SocialAuth = () => {
    const { googleSignIn } = useContext(AuthContext)

    const socialMediaSingIn = media => {
        media()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="flex justify-evenly mt-5">
                <button onClick={()=> socialMediaSingIn(googleSignIn)}><FaGoogle className="text-3xl"></FaGoogle></button>
                <button><FaGithub className="text-3xl"></FaGithub></button>
                <button><FaTwitter className="text-3xl"></FaTwitter></button>
            </div>
        </div>
    );
};

export default SocialAuth;