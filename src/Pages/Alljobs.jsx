
import Jobcard from "../Components/Jobcard";
import  { useEffect, useState } from "react";
import axioshook from "../Hooks/axioshook";






const Alljobs = () => {
   
    const [alljobs, setAlljobs] = useState([]);
      const axiosSecure = axioshook()

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

    return (
        <div>{
           alljobs? alljobs.map((job,idx)=>{

                return (
                    <Jobcard key={idx} job={job}></Jobcard>
                )
            }): <span className="loading loading-spinner text-primary"></span>
            
            }
            
        </div>
    );
};

export default Alljobs;