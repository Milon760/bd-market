import { createBrowserRouter } from "react-router-dom";
import Root from '../components/Root'
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Cart from "../pages/Cart"
import User from '../pages/User'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import MoreDetails from "../pages/MoreDetails";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: 'products', element: <Products /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'cart', element: <Cart /> },
            { path: 'user', element: <User /> },
            { path: 'signin', element: <SignIn /> },
            { path: 'signUp', element: <SignUp /> },
            { path: 'moredetails/:id', element: <MoreDetails /> },

        ]
    }


])