import { useContext, useEffect, useState } from "react";
import axioshook from "../Hooks/axioshook";
import { AuthContext } from "../Firebase/Authprovider";
import Jobcard from "../Components/Jobcard";


const Appliedjobs = () => {

    //


    const [alljobs, setAlljobs] = useState([]);
    const axiosSecure = axioshook()
    const {user} = useContext(AuthContext)
    const [userLoaded, setUserLoaded] = useState(false);

   useEffect(() => {
  // Make an Axios GET request to fetch data from the API
 

  axiosSecure
    .get(`/applyjobs`)
    .then((response) => {
      // Update the component's state with the fetched data
      setAlljobs(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [axiosSecure]);  

useEffect(() => {
  // Check if the user is loaded
  if (user) {
    setUserLoaded(true);
  }
}, [user]);




   const myjobs = alljobs.filter(job => job.email === user?.email)



    /*
    
    
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

    
    
    
    */



    return (
        <div>
        {
           userLoaded?myjobs.map((job,idx)=> <div key={idx}><Jobcard job={job}></Jobcard></div>):<div
           className="max-w-screen-xl min-h-screen mx-auto flex justify-center items-center">
            <span className="loading loading-spinner text-primary"></span>
           </div>
        }
        
    </div>
    );
};

export default Appliedjobs;