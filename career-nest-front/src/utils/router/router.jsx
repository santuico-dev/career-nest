import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Auth/login-page";
import AuthLayout from "../../Layouts/Auth/auth-layout";
import SeekerLogin from "../../Pages/Auth/Seeker/seeker-login-page";
import SeekerRegister from "../../Pages/Auth/Seeker/seeker-register-page";
import Dashboard from "../../Pages/Users/Seeker/Dashboard";

const router = createBrowserRouter([
    //AUTH
    {
        path: "/",
        element: <AuthLayout />,
        children: [

            // LOGIN FOR JOB HUNTER
            {
                path: "/",
                element: <Login />,
            },

            // SEEKER AUTH ROUTE
            {
                path: "seeker/login",
                element: <SeekerLogin />,
            },

            {
                path: "seeker/register",
                element: <SeekerRegister />,
            },
        ],
    },

    //JOB HUNTER - A USER WHO USES THE SYSTEM TO FIND A JOB
    {},

    //RECRUITER - A USER WHO USES THE SYSTEM TO POST A JOB
    {},

    //ADMIN - THE MAIN MODERATOR OF THE WEBSTIE
    {},
]);

export default router;
