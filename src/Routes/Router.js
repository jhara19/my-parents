import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../Pages/Categories/Categories";
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
            path:'/categories',
            element: <Categories></Categories>
         },
         {
            path:'/categories/:id',
            element: <Products></Products>
         },
         {
            path:'/login',
            element: <Home></Home> 
         },
         {
            path:'/blog',
            element: <Categories></Categories>
         },
       ]
    },
    
])