import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AbourUs/AboutUs";
import CustomerFeedback from "../Pages/CustomerFeedback/CustomerFeedback";
import PrivateRouter from "./PrivateRouter";
import UserProfile from "../Components/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/contactUs",
                element: <Contact />,
            },
            {
                path: "/rooms",
                element: <Contact />,
            },
            {
                path: "/myBookings",
                element: <PrivateRouter>  </PrivateRouter>,
            },
            {
                path: "/feedback",
                element: <CustomerFeedback />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/profile",
                element: <UserProfile />,
            },
        ]
    },
]);

export default router;