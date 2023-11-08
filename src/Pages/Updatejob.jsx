


import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxioshook from "../hooks/useAxioshook";
import JobForm from "../Components/JobForm";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/Authprovider";
import { Helmet } from "react-helmet";


const Updatejob = () => {
  const { jobid } = useParams();
  const [jobdata, setJobdata] = useState(null);
  const axiosSecure = useAxioshook(true);

const {user} = useContext(AuthContext)


  useEffect(() => {
    axiosSecure
      .get(`/jobdetails/${jobid}`,{withCredentials:true})
      .then((response) => {
        // Update the component's state with the fetched data
        setJobdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [jobid]);

 

  const handleFormSubmit = (formData) => {
    if (jobdata) {
        formData.email = user.email;
      
      // Ensure jobdata is available before sending the PUT request
      axiosSecure 
        .put(`/updatejob/${jobid}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: " Updated Successfully",
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
  };

  const addjobcondition = true; // Assuming you are editing an existing job

  return (
    <div>
          <Helmet><title>Updatejob</title></Helmet>
           <h1 className="text-3xl mt-28 font-semibold text-center text-purple-700 ">
           Update Job
                </h1>
      {jobdata ? (
        <JobForm
          onFormSubmit={handleFormSubmit}
          job={jobdata}
          addjobcondition={addjobcondition}
        />
      ) : (
        <span className="loading loading-spinner text-primary"></span>
      )}
    </div>
  );
};

export default Updatejob;
