import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axioshook from "../Hooks/axioshook";
import JobForm from "../Components/JobForm";
import Swal from "sweetalert2";


const Updatejob = () => {
    const { jobid } = useParams()
    const [jobdata,setJobdata] = useState()
    const axiosSecure = axioshook()





    const handleFormSubmit = (formData) => {
        // Send the form data to the server for updating (PUT request)
        axiosSecure
          .put(`https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/update/${_id}`, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            if (response.data.modifiedCount > 0) {
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Product Updated Successfully',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            // Handle any errors that occur during the Axios request
            console.error('Error:', error);
          });
      };
      
      const addjobcondition = true


    
    useEffect(()=>{

        axiosSecure
        .get(`/updatejob/${jobid}`)
        .then((response) => {
          // Update the component's state with the fetched data
          
          setJobdata(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

    }
    ,[jobid])


    //onFormSubmit,job ,addjobcondition 
    return (
        <div>
            <JobForm onFormSubmit={handleFormSubmit} job={jobdata} addjobcondition={addjobcondition}></JobForm>
            
        </div>
    );
};

export default Updatejob;