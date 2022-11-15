import React,{lazy} from 'react'
import { useRoutes } from "react-router-dom";

const HistoryPage = lazy(()=>import('../pages/HistoryPage'))
const SignPage = lazy(()=>import('../pages/signPage/SignPage'))
const HomePage = lazy(()=>import('../pages/homepage/HomePage'))

export default function commonRoutes(){
    let routes = useRoutes([
        {
            element:<HomePage />,
            exact:true,
            path:'/'
        },
        {
            element:<HistoryPage />,
            exact:true,
            path:'/history'
        },
        {
            element:<SignPage />,
            exact:true,
            path:'/sign'
        }
    ])

    return routes
}