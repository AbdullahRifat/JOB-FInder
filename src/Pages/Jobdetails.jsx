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
      
  // const {
  //   _id,
  //   jobBanner,
  //   jobTitle,
  //   userName,
  //   jobCategory,
  //   salaryRange,
  //   jobDescription,
  //   jobPostingDate,
  //   applicationDeadline,
  //   email,
  //   jobApplicants} = jobdata || {}
    
   

    return (
        <div className="flex justify-center items-center max-w-screen-xl mx-auto">
          {jobdata ? (
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-full" src={jobdata.jobBanner} alt="Album"/></figure>
            <div className="card-body lg: pt-56 lg:pb-56 ">

              <h2 className="card-title">{jobdata. jobTitle}</h2>
              <p>Job Details:{jobdata.jobDescription}</p>
              <p>Salary Range{jobdata.salaryRange}</p>
              <p>Applicants{jobdata.jobApplicants}</p>
             
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Appy</button>
              </div>
            </div>
          </div>
          ) : (
            <span className="loading loading-spinner text-primary"></span>
          )}
            
        </div>
    );
};

export default Jobdetails;