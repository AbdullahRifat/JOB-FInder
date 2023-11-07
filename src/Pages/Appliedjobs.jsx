import { useContext, useEffect, useState } from "react";
import axioshook from "../Hooks/axioshook";
import { AuthContext } from "../Firebase/Authprovider";
import Jobcard from "../Components/Jobcard";


const Appliedjobs = () => {

    //


    const [alljobs, setAlljobs] = useState([]);
    const axiosSecure = axioshook()
    const {user} = useContext(AuthContext)
    const [userLoaded, setUserLoaded] = useState(false);

   useEffect(() => {
  // Make an Axios GET request to fetch data from the API
 

  axiosSecure
    .get(`/alljobs`)
    .then((response) => {
      // Update the component's state with the fetched data
      setAlljobs(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [axiosSecure]);  

useEffect(() => {
  // Check if the user is loaded
  if (user) {
    setUserLoaded(true);
  }
}, [user]);




//    const myjobs = alljobs.filter(job => job.email === user?.email)
   const myjobs = alljobs.filter((job) => job.applyemail.includes(user?.email));





    return (
        <div>
        {
           userLoaded?myjobs.map((job,idx)=> <div key={idx}><Jobcard job={job}></Jobcard></div>):<div
           className="max-w-screen-xl min-h-screen mx-auto flex justify-center items-center">
            <span className="loading loading-spinner text-primary"></span>
           </div>
        }
        
    </div>
    );
};

export default Appliedjobs;