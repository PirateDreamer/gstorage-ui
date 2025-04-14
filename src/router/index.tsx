import  {lazy} from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const Login = lazy(() => import('../pages/login'))

const routes = [
    {
        path: '/',
        element: <Navigate to="/home" />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default routes