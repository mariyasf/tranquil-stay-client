import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Root from "../Root/Root";
import Home from "../Pages/Error/Home/Home";
import Login from "../Pages/Error/Login/Login";
import Register from "../Pages/Error/Register/Register";

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