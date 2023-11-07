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
import PrivateRoute from "../Firebase/PrivateRoute";
import Updatejob from "../Pages/Updatejob";


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
            element: <PrivateRoute><Appliedjobs></Appliedjobs> </PrivateRoute> 
        },
        {
            path: "/addjob",
            element:<PrivateRoute> <Addjob></Addjob></PrivateRoute> 
        },
        {
            path: "/myjobs",
            element: <PrivateRoute> <Myjobs></Myjobs> </PrivateRoute>
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
            element: <PrivateRoute> <Jobdetails></Jobdetails></PrivateRoute>
        },
        {
            path: "/updatejob/:jobid",
            element: <PrivateRoute><Updatejob></Updatejob> </PrivateRoute>
        },
        {
            path: "/deletejob/:jobid",
            element: <PrivateRoute><Myjobs></Myjobs></PrivateRoute>
           
        }
      ]
    },
  ]);

export default MyRouter;