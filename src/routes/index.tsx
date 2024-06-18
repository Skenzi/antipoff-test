import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import UserProfile from '../pages/UserProfile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/profile',
        element: <UserProfile />
    }
])

export default router;