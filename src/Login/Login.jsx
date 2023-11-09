import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/Authprovider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxioshook from "../hooks/useAxioshook";
import { Helmet } from "react-helmet";



const Login = () => {

   

    const {googleSingIn,signIn}  = useContext(AuthContext)
    const navigate = useNavigate()
    const location= useLocation()
    const axiosSecure = useAxioshook()
   
    //states to manage input
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[error,setError] = useState("")


    const {user} = useContext(AuthContext)


    
    
    
    


    

    const handleGoogleLogin = ()=>{
        googleSingIn()
        .then((res)=>navigate(location?.state? location.state : '/'))
        .then(()=> Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Successfully logged in',
            showConfirmButton: false,
            timer: 1500,
          }))
        .catch(err=> Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: `${err.message}`,
            showConfirmButton: false,
            timer: 1500,
          }))
        
        
    }

    const handleSignIn = ()=>{
        if((email,password)){
            signIn(email,password)
            .then((res)=> {
                
                const loggesInUser = res.user
                console.log(loggesInUser)
                const user = {email}
                axiosSecure
                .post('/jwt',user)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.success){
                        navigate(location?.state? location.state : '/')
                    }
                })
                
        
        
                })
            .then(()=> Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfully logged in',
                showConfirmButton: false,
                timer: 1500,
              }))
            .catch(err=>setError(err))
    

        }else{
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500,
              });
        }
    }

     return (
        
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
             <Helmet><title>Login</title></Helmet>
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 ">
                   login
                </h1>
                <div className="mt-6">
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                           
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                  
                    <div className="mt-6">
                        <button onClick={handleSignIn} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>

                </div>
                <div className="mt-6">
                        <button onClick={handleGoogleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                           google Login
                        </button>
                    </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to='/registration'
                        
                    >
                        <button className="font-medium text-purple-600 hover:underline">Register</button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;