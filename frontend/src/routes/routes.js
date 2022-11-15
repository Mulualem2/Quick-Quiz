import React from "react"
import Homepage from "../pages/homepage"
import Login from "../pages/login"
import SignUp from "../pages/signup"

const Routes = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    }
]

export default Routes