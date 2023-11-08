import Swal from "sweetalert2";
import JobForm from "../Components/JobForm";

import useAxioshook from "../hooks/useAxioshook";
import { Helmet } from "react-helmet";


const Addjob = () => {

  const axiosSecure = useAxioshook()
    const handleFormSubmit = (formData) => {
        // Send the form data to the server using Axios
        axiosSecure
          .post('/alljobs', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            if (response.data.insertedId) {
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Job Added Successfully',
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

      const addjobcondition = false

    return (
        <div className="">
           <Helmet><title>Addjob</title></Helmet>
           <h1 className="text-3xl mt-28 font-semibold text-center text-purple-700 ">
           Add A Job
                </h1>
            
            <JobForm onFormSubmit={handleFormSubmit} job={null} addjobcondition={addjobcondition}></JobForm>
            
        </div>
    );
};

export default Addjob;