import { useContext, useEffect, useState } from "react";
import axioshook from "../Hooks/axioshook";
import { AuthContext } from "../Firebase/Authprovider";
import Jobcard from "../Components/Jobcard";
import Jobcard2 from "../Components/Jobcard2";


const Myjobs = () => {

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




   const myjobs = alljobs.filter(job => job.email === user?.email)


    return (
        <div>
            {
               userLoaded?myjobs.map((job,idx)=> <div key={idx}><Jobcard2 job={job}></Jobcard2></div>):<div
               className="max-w-screen-xl min-h-screen mx-auto flex justify-center items-center">
                <span className="loading loading-spinner text-primary"></span>
               </div>
            }
            
        </div>
    );
};

export default Myjobs;