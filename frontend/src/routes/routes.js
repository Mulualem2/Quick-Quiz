import React from "react"
import Homepage from "../pages/homepage"
import Login from "../pages/login"
import SignUp from "../pages/signup"
import QuizParams from "../pages/quiz_params"
import TakeQuiz from "../pages/take_quiz"
import QuizScore from "../pages/quiz_score"

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
    },
    {
        path: '/quiz',
        element: <QuizParams />,
    },
    {
        path: '/quiz/take',
        element: <TakeQuiz />
    },
    {
        path: '/quiz/score',
        element: <QuizScore />,
    },
    {
        path: '/login/homepage',
        element: <Homepage />,
    },
    {
        path: 'signup/login',
        element: <Login />,
    }
]

export default Routes