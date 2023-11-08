import { useContext, useEffect, useState } from "react";
import useAxioshook from "../hooks/useAxioshook";
import { AuthContext } from "../Firebase/Authprovider";
import Jobcard from "../Components/Jobcard";


const Appliedjobs = () => {

    //


    const [alljobs, setAlljobs] = useState([]);
    const axiosSecure = useAxioshook()
    const {user} = useContext(AuthContext)
    const [userLoaded, setUserLoaded] = useState(false);

   useEffect(() => {
  // Make an Axios GET request to fetch data from the API
 

  axiosSecure
    .get(`/appliedjobs?email=${user?.email}`)
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
//    const myjobs = alljobs.filter((job) => job.applyemail.includes(user?.email));





    return (
        <div className="mx-auto max-w-screen-xl">
            <h2 className="text-center font-extrabold text-4xl  shadow-xl my-24">All the jobs you have applied</h2>
        {
           userLoaded?
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alljobs.map((job,idx)=>{return <Jobcard key={idx} job={job}></Jobcard>})}
            </div>
            :<div
           className="max-w-screen-xl min-h-screen mx-auto flex justify-center items-center">
            <span className="loading loading-spinner text-primary"></span>
           </div>
        }
        
    </div>
    );
};

export default Appliedjobs;