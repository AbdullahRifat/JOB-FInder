import Swal from "sweetalert2";
import JobForm from "../Components/JobForm";

import axioshook from "../Hooks/axioshook";


const Addjob = () => {

  const axiosSecure = axioshook()
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
        <div>
            <h2 className="text-4xl font-extrabold text-center">Add A Job</h2>
            <JobForm onFormSubmit={handleFormSubmit} job={null} addjobcondition={addjobcondition}></JobForm>
            
        </div>
    );
};

export default Addjob;