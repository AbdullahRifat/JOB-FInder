import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxioshook from "../hooks/useAxioshook";

import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/Authprovider";
import Spinner from "../Components/Spinner";

import { motion } from "framer-motion";
//mui card






const Jobdetails = () => {
   
     const {user} = useContext(AuthContext)
   
  
    
   
    const { jobid } = useParams();
    const [jobdata, setJobdata] = useState({ applyemail: [] });
  const axiosSecure = useAxioshook();
  const [isLoading, setIsLoading] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);



  useEffect(() => {
    // Check if user is authenticated
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {


    axiosSecure
      .get(`/jobdetails/${jobid}`)
      .then((response) => {
        // Update the component's state with the fetched data
        setJobdata(response.data);
        setIsLoading(false);
        setHasApplied(response.data.applyemail.includes(user?.email));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [jobid,user]);

  
 

  const handleApply = () => {
    if (jobdata) {

      if (!jobdata.applyemail) {
        jobdata.applyemail = [];
      }
     
      const userApplied = jobdata.applyemail.includes(user?.email);

     
      console.log(user.email,jobdata.email)

      const currentTimestamp = new Date().getTime();
      if (jobdata?.applicationDeadline
      && currentTimestamp > new Date(jobdata?.applicationDeadline).getTime()){
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Deadline is over",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      else if (userApplied) {
        Swal.fire({
          position: "top-center",
          icon: "info",
          title: "Already Applied",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      else if(user?.email===jobdata?.email){
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "you can't apply on own job",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      else {
        // Update the applyemail array by pushing the user's email
      
        jobdata.applyemail.push(user?.email);
  
        const updateData = {
          jobApplicants: (parseInt(jobdata.jobApplicants, 10) || 0) + 1,
          applyemail: jobdata.applyemail,
        };
  
        // Send a PUT request to update jobdata (assuming jobdata is already available)


        Swal.fire({
          title: `Name:${user.displayName} - Email:${user.email}`,
          text: "Are you sure to apply?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Submit Application'
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure
            .post(`/applyjob/${jobid}`, updateData, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              if (response.data.modifiedCount > 0) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Updated Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((error) => {
              // Handle any errors that occur during the Axios request
              console.error("Error:", error);
            });
          }
        });

        
      }
    }
  };
  
  

  
  
  

    return (
      isLoading?<Spinner></Spinner>:<div className="flex justify-center items-center max-w-screen-xl mx-auto">
              {jobdata ? (
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-full" src={jobdata.jobBanner} alt="Album"/></figure>
            <div className="card-body flex flex-col justify-start items-start lg:mt-32 lg:mb-32">
            <figure><img className="w-20 rounded-full" src={jobdata.jobLogo} alt="Album"/></figure>
              <h2 className="card-title font-bold text-xl">Job Title : {jobdata. jobTitle}</h2>
              <p className="font-bold">Job Details : {jobdata.jobDescription}</p>
              <p className="font-bold">Salary Range : {jobdata.salaryRange}$</p>
              <p className="font-bold">Applicants : {jobdata.jobApplicants}</p>
             
              <div className="card-actions justify-start">
              <motion.button className="btn btn-primary"
         whileHover={{ scale: 1.1 }}
         transition={{ type: "spring", stiffness: 400, damping: 10 }} onClick={handleApply}  >Apply</motion.button>
                
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