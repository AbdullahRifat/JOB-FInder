import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axioshook from "../Hooks/axioshook";
import SingleJobDetails from "./SingleJobDetails";


const Jobdetails = () => {
    const { jobid } = useParams()
    const [jobdata,setJobdata] = useState()
    const axiosSecure = axioshook()

    
    useEffect(()=>{
        axiosSecure
        .get(`/jobdetails/${jobid}`)
        .then((response) => {
          // Update the component's state with the fetched data
          
          setJobdata(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

    }
    ,[jobid])
    
   

    return (
        <div className="flex justify-center items-center">
          {jobdata ? (
            <div>{jobdata.jobDescription}</div>
          ) : (
            <span className="loading loading-spinner text-primary"></span>
          )}
            
        </div>
    );
};

export default Jobdetails;