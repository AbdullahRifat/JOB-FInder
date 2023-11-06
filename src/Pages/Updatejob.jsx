// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axioshook from "../Hooks/axioshook";
// import JobForm from "../Components/JobForm";
// import Swal from "sweetalert2";


// const Updatejob = () => {
//     const { jobid } = useParams()
//     const [jobdata,setJobdata] = useState()
//     const axiosSecure = axioshook()
    

//     // const {
//     //     _id,
//     //     jobBanner,
//     //     jobTitle,
//     //     userName,
//     //     jobCategory,
//     //     salaryRange,
//     //     jobDescription,
//     //     jobPostingDate,
//     //     applicationDeadline,
//     //     email,
//     //     jobApplicants} = jobdata || {}



    

    
//     useEffect(()=>{

//         axiosSecure
//         .get(`/updatejob/${jobid}`)
//         .then((response) => {
//           // Update the component's state with the fetched data
          
//           setJobdata(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });

//     }
//     ,[jobid])

//     const {_id} = jobdata

//     const handleFormSubmit = (formData) => {
//         // Send the form data to the server for updating (PUT request)
//         axiosSecure
//           .put(`/update/${_id}`, formData, {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           })
//           .then((response) => {
//             if (response.data.modifiedCount > 0) {
//               Swal.fire({
//                 position: 'top-center',
//                 icon: 'success',
//                 title: 'Product Updated Successfully',
//                 showConfirmButton: false,
//                 timer: 1500,
//               });
//             }
//           })
//           .catch((error) => {
//             // Handle any errors that occur during the Axios request
//             console.error('Error:', error);
//           });
//       };
      
//       const addjobcondition = true



//     //onFormSubmit,job ,addjobcondition 
//     return (
//         <div>
//             <JobForm onFormSubmit={handleFormSubmit} job={jobdata} addjobcondition={addjobcondition}></JobForm>
            
//         </div>
//     );
// };

// export default Updatejob;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axioshook from "../Hooks/axioshook";
import JobForm from "../Components/JobForm";
import Swal from "sweetalert2";

const Updatejob = () => {
  const { jobid } = useParams();
  const [jobdata, setJobdata] = useState(null);
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

 

  const handleFormSubmit = (formData) => {
    if (jobdata) {
        console.log(jobdata._id);
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
