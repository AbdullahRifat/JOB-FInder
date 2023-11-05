import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";



const Register = () => {

    const {register}  = useContext(AuthContext)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [photoUrl,setPhotoUrl] = useState("")
    
    const navigate = useNavigate()
    const location= useLocation()
   

    // const handleRegister = () => {
    //     if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\]).{7,}$/.test(password)){
    //         setError("paword doesnt meet the requirement")
    //         alert(error)
    //     }else{
    //         setError("")
    //         if(email){
                

    //             register(email,password).then(
    //                 result=> updateProfile(result.user,{
    //                     displayName: name,
    //                    photoURL:photoUrl
    //                 })
    //                 .then((res)=> navigate(location?.state? location.state : '/'))
    //               .then(()=>alert("Successfully loged in"))
    //                 .catch(err=>setError(err))
    //             )
                
    //         }
    //     }
    // }
    const handleRegister = () => {
        // Check if all required fields are filled
        if (!email || !name || !photoUrl) {
            Swal.fire({
                position: 'top-center',
                icon: 'info',
                title: "Please fill in all required fields",
                showConfirmButton: false,
                timer: 1500,
              });
          
          return; // Exit the function, no further processing
        }
        
        // Check if the password meets the specified requirements
        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\]).{6,}$/.test(password)) {
          
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: "Password doesn't meet the requirements",
            showConfirmButton: false,
            timer: 1500,
          });
          
          return; // Exit the function, no further processing
        }
        
        // All required fields are present, attempt to register the user with Firebase Authentication
        register(email, password)
          .then((result) => {
            // Successfully registered, now update user profile
            return updateProfile(result.user, {
              displayName: name,
              photoURL: photoUrl,
            });
          })
          .then(() => {
            // Successfully updated profile, navigate to a specified location or default
            navigate(location?.state ? location.state : '/');
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfully logged in',
                showConfirmButton: false,
                timer: 1500,
              });
            
          })
          .catch((err) => {
            // Handle Firebase Authentication error and show it in a alertessage
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: err.message,
                showConfirmButton: false,
                timer: 1500,
              }); // Use the default Firebase error message
          });
      };
      
      
      


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 ">
                   Register
                </h1>
                <div className="mt-6">
                <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input onChange={(e)=>setName(e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Photo URL
                        </label>
                        <input onChange={(e)=>setPhotoUrl(e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input onChange={(e)=>setEmail(e.target.value)}
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
                        <input onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button onClick={handleRegister} className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                    </div>

                </div>
               

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                     have an account?{" "}
                    <Link
                        to='/login'
                        
                    >
                        <button className="font-medium text-purple-600 hover:underline">Login</button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;