import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../../Layouts/Auth/auth-layout';
import Login from '../../Pages/Auth/login-page';
import Register from '../../Pages/Auth/register-page';

const router = createBrowserRouter([

    //AUTH
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/',
                element: <Login />
            },

            {
                path: '/register',
                element: <Register />
            }
        ],
    },

    //JOB HUNTER - A USER WHO USES THE SYSTEM TO FIND A JOB
    {

    },

    //RECRUITER - A USER WHO USES THE SYSTEM TO POST A JOB
    {

    },

    //ADMIN - THE MAIN MODERATOR OF THE WEBSTIE
    {

    }
]);

export default router;
