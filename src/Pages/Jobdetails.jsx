import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axioshook from "../Hooks/axioshook";

import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/Authprovider";


const Jobdetails = () => {
    // const { jobid } = useParams()
    // const [jobdata,setJobdata] = useState()
    // const axiosSecure = axioshook()
     const {user} = useContext(AuthContext)

    
    // useEffect(()=>{
    //     axiosSecure
    //     .get(`/jobdetails/${jobid}`)
    //     .then((response) => {
    //       // Update the component's state with the fetched data
          
    //       setJobdata(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });

    // }
    // ,[jobid])
      
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
    
  
    const { jobid } = useParams();
    const [jobdata, setJobdata] = useState({ applyemail: [] });
  const axiosSecure = axioshook();

  useEffect(() => {


    axiosSecure
      .get(`/jobdetails/${jobid}`)
      .then((response) => {
        // Update the component's state with the fetched data
        setJobdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [jobid]);

  
  // const handleApply = () => {


    
  //   console.log(jobdata)
  //   if (jobdata) {


  //     const updateData = {
  //       jobApplicants: (parseInt(jobdata.jobApplicants, 10) || 0) + 1,
  //       appliedEmail: user?.email,
  //     };
  //     // Set appliedEmail with the user's email
      
  
  //     // Send a PUT request to update jobdata (assuming jobdata is already available)
  //     axiosSecure
  //       .put(`/updatejob/${jobid}`, updateData, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((response) => {
  //         if (response.data.modifiedCount > 0) {
  //           Swal.fire({
  //             position: "top-center",
  //             icon: "success",
  //             title: "Updated Successfully",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         // Handle any errors that occur during the Axios request
  //         console.error("Error:", error);
  //       });
  //   }
  // };

  const handleApply = () => {
    if (jobdata) {

      if (!jobdata.applyemail) {
        jobdata.applyemail = [];
      }
      console.log(typeof(applyemail))
      const userApplied = jobdata.applyemail.includes(user?.email);

  
      if (userApplied) {
        Swal.fire({
          position: "top-center",
          icon: "info",
          title: "Already Applied",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // Update the applyemail array by pushing the user's email
        jobdata.applyemail.push(user?.email);
  
        const updateData = {
          jobApplicants: (parseInt(jobdata.jobApplicants, 10) || 0) + 1,
          applyemail: jobdata.applyemail,
        };
  
        // Send a PUT request to update jobdata (assuming jobdata is already available)
        axiosSecure
          .put(`/updatejob/${jobid}`, updateData, {
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
    }
  };
  
  

  
  
  
  
  

///
// const formData = {
//   jobBanner: jobdata?.jobBanner,
//   jobTitle: jobdata?.jobTitle,
//   userName: jobdata?.userName,
//   jobCategory: jobdata?.jobCategory,
//   salaryRange: jobdata?.salaryRange,
//   jobDescription: jobdata?.jobDescription,
//   jobPostingDate: jobdata?.jobPostingDate,
//   applicationDeadline: jobdata?.applicationDeadline,
//   email: user?.email,
//   jobApplicants: jobdata?.jobApplicants,
// };


// const handleApply = () => {
//   // Send the form data to the server using Axios
//   axiosSecure
//     .post('/applyjobs', formData, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then((response) => {
//       if (response.data.insertedId) {
//         Swal.fire({
//           position: 'top-center',
//           icon: 'success',
//           title: 'Job Added Successfully',
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     })
//     .catch((error) => {
//       // Handle any errors that occur during the Axios request
//       console.error('Error:', error);
//     });
// };





   ///

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
                <button onClick={handleApply} className="btn btn-primary">Appy</button>
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