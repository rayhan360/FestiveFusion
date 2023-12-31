import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../HomePage/Home";
import EventDetails from "../EventDetails/EventDetails";
import LogIn from "../Authentications/LogIn";
import Registration from "../Authentications/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import Blog from "../Blog/Blog";
import FestivalSecret from "../FestivalSecret/FestivalSecret";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/eventDetails/:id",
                element: <PrivateRouter><EventDetails></EventDetails></PrivateRouter>,
                loader: () => fetch("/data.json")
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/blog",
                element: <PrivateRouter><Blog></Blog></PrivateRouter>
            },
            {
                path: "/ourFestival",
                element: <PrivateRouter><FestivalSecret></FestivalSecret></PrivateRouter>
            }
        ]
    }
])

export default Router;