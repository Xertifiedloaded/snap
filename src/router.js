import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layout/mainLayout'
import Landing from './pages/landing/landing'

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [{
                path: "/",
                element: <Landing />
            }]
        }
    ]

    )
}

export default Router