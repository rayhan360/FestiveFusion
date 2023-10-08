import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../HomePage/Home";
import EventDetails from "../EventDetails/EventDetails";
import LogIn from "../Authentications/LogIn";
import Registration from "../Authentications/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";


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
                element:<EventDetails></EventDetails>,
                loader: ()=> fetch("/data.json")
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
])

export default Router;