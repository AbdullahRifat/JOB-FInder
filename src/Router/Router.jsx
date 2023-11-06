import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error";
import Mainlayouts from "../Layouts/Mainlayouts";
import Home from "../Pages/Home";
import Alljobs from "../Pages/Alljobs";
import Appliedjobs from "../Pages/Appliedjobs";
import Blogs from "../Pages/Blogs";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Myjobs from "../Pages/Myjobs";
import Jobdetails from "../Pages/Jobdetails";
import Addjob from "../Pages/Addjob";


const MyRouter = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts></Mainlayouts>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('/jobdata.json')
        },
        {
            path: "/alljobs",
            element: <Alljobs></Alljobs>,
            loader: ()=> fetch('/jobdata.json')
        },
        {
            path: "/appliedjobs",
            element: <Appliedjobs></Appliedjobs>
        },
        {
            path: "/addjob",
            element: <Addjob></Addjob>
        },
        {
            path: "/myjobs",
            element: <Myjobs></Myjobs>
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Register></Register>
        },
        {
            path: "/jobdetails/:jobid",
            element: <Jobdetails></Jobdetails>
        }
      ]
    },
  ]);

export default MyRouter;