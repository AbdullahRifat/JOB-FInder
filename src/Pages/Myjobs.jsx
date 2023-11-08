import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Firebase/Authprovider";
import Jobcard from "../Components/Jobcard";
import Jobcard2 from "../Components/Jobcard2";
import useAxioshook from "../hooks/useAxioshook";
import { useLocation, useNavigate } from "react-router-dom";


const Myjobs = () => {

    const [alljobs, setAlljobs] = useState([]);
    const axiosSecure = useAxioshook()
    const {user} = useContext(AuthContext)
    const [userLoaded, setUserLoaded] = useState(false);
    
    const navigate = useNavigate()


useEffect(() => {
  // Check if the user is loaded
  if (user) {
    setUserLoaded(true);
   
  }
}, [user]);

useEffect(() => {
  // Make an Axios GET request to fetch data from the API
 

  axiosSecure
    .get(`/myjobs?email=${user.email}`)
    .then((response) => {
      // Update the component's state with the fetched data
      setAlljobs(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [axiosSecure]);  


  //  const myjobs = alljobs.filter(job => job.email === user?.email)


    return (
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-center font-extrabold text-4xl  shadow-xl my-24">My Listed Jobs</h2>
            {
               userLoaded?<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{alljobs.map((job,idx)=> <div key={idx}><Jobcard2 job={job}></Jobcard2></div>)}</div>:<div
               className="max-w-screen-xl min-h-screen mx-auto flex justify-center items-center">
                <span className="loading loading-spinner text-primary"></span>
               </div>
            }
            
        </div>
    );
};

export default Myjobs;