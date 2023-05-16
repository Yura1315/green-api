import React from 'react'

const MainPage = React .lazy(() => import('../pages/MainPage'))
const ChatPage = React .lazy(() => import('../pages/ChatPage'))


type routeType = {
    path: string,
    element: React.LazyExoticComponent<() => JSX.Element>;
}

const routes: routeType[] = [
    {
        path: '/',
        element: MainPage
    },
    {
        path: '/chat',
        element: ChatPage
    }
]

export default routes