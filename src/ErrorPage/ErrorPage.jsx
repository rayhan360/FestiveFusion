import { Link } from "react-router-dom";
import error from "../assets/404.png"
const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col gap-10 justify-center items-center h-[600px]">
                <img className="h-48" src={error} alt="" />
                <h1 className="text-5xl"> ERROR - PAGE NOT FOUND</h1>
                <p className="text-3xl">Something was wrong</p>
                <Link className="bg-[#43ba7f] px-5 py-3 rounded-md text-white" to="/">go back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;