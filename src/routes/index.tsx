import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import UserProfile from '../pages/UserProfile';
import PrivateRoute from '../pages/PrivateRoute'
import ErrorPage from '../pages/ErrorPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element=<PrivateRoute redirectPath={'/signin'} /> >
                <Route path='/' element=<Home /> />
                <Route path='/user/:id' element=<UserProfile /> />
            </Route>
            <Route path='/signin' element=<SignIn /> />
            <Route path='/signup' element=<SignUp /> />
            <Route path='*' element=<ErrorPage /> />
        </>
    )
)

export default router;