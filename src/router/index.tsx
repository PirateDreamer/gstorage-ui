import  {lazy} from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../views/home'))
const Login = lazy(() => import('../views/login'))

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