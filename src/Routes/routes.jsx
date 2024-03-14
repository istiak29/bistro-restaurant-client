import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            // {
            //     path: "/about",
            //     element: <div>About</div>,
            // },
            // {
            //     path: "/contact",
            //     element: <div>Contact</div>,
            // },
        ],
    },
]);