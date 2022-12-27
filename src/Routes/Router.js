import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../Pages/Categories/Categories";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Form/Login";
import Signup from "../Pages/Form/Signup";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";


export const routers = createBrowserRouter([
    {
       path:'/',
       element: <Main></Main>,
       children: [
        {
            path:'/',
            element: <Home></Home> 
         },
         {
            path:'/home',
            element: <Home></Home> 
         },
         
         {
            path:'/categories/:id',
            element: <Products></Products>
         },
         {
            path:'/login',
            element: <Login></Login> 
         },
         {
            path:'/signup',
            element: <Signup></Signup>
         },
         {
            path:'/blog',
            element: <Categories></Categories>
         },
       ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>
    }
    
])