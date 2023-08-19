import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/shared/News/News";
import LogReg from "../layout/logReg";
import Login from "../pages/home/login/Login";
import Register from "../pages/home/register/Register";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LogReg></LogReg>,
        children:[
            {
                path:'/',
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/category',
        element:<Main></Main>,
        children:[
            {
                path:':id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:8000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:8000/news/${params.id}`)
            }
        ]
    }
])
export default router;