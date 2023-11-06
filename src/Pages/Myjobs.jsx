import { useContext, useEffect, useState } from "react";
import axioshook from "../Hooks/axioshook";
import { AuthContext } from "../Firebase/Authprovider";
import Jobcard from "../Components/Jobcard";


const Myjobs = () => {

    const [alljobs, setAlljobs] = useState([]);
    const axiosSecure = axioshook()
    const {user} = useContext(AuthContext)

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

const myjobs = alljobs.filter(job => job.email === user.email)


    return (
        <div>
            {
                myjobs.map((job,idx)=> <div key={idx}><Jobcard job={job}></Jobcard></div>)
            }
            
        </div>
    );
};

export default Myjobs;