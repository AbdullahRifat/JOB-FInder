import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Authprovider";


export  const axiosSecure = axios.create({

    baseURL : 'https://job-seeking-server.vercel.app',
    withCredentials:true
})

const useAxioshook = () => {
   
    // const {   logout } = useAuth();
    const navigate = useNavigate()
    const {logout} = useContext(AuthContext)
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
             if (error.response.status === 401 || error.response.status === 403) {
                 console.log('logout the user')
                logout()
                    .then(() => { 
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
             }
        })
    }, [])

    return axiosSecure ;
};

export default useAxioshook;