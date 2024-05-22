import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AbourUs/AboutUs";
import CustomerFeedback from "../Pages/CustomerFeedback/CustomerFeedback";

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
        ]
    },
]);

export default router;