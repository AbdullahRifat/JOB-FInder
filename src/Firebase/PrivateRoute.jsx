/* eslint-disable react/prop-types */
import { useContext, } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
 
  const { user ,isLoading} = useContext(AuthContext);

  console.log(user)

  if(isLoading){
    return <span className="loading loading-infinity loading-lg"></span>
  }
  

  if (user) {
    // Render a loading indicator or message while waiting for user data
    return children;
  }

  
    // Redirect to the login page if the user is not authenticated
    return <Navigate state={location.pathname} to="/login" replace />;
  

  
};

export default PrivateRoute;
