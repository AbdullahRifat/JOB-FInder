
import Jobcard from "../Components/Jobcard";
import  { useEffect, useState } from "react";
import axioshook from "../Hooks/axioshook";
import Banner from "../Components/Banner";






const Alljobs = () => {
   
    const [alljobs, setAlljobs] = useState([]);
      const axiosSecure = axioshook()

  useEffect(() => {
    // Make an Axios GET request to fetch data from the API
   

    axiosSecure
      .get(`/alljobs`)
      .then((response) => {
        // Update the component's state with the fetched data
        setAlljobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosSecure]); 

    return (
        <div>
          <Banner src={"https://images2.imgbox.com/af/73/ZUQgJvEQ_o.jpg"}></Banner>
          
          {
           alljobs? alljobs.map((job,idx)=>{

                return (
                    <Jobcard key={idx} job={job}></Jobcard>
                )
            }): <span className="loading loading-spinner text-primary"></span>
            
            }
            
        </div>
    );
};

export default Alljobs;