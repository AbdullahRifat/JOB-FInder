
import Categorytabs from "../Components/Categorytabs";

import Slider from "../Components/Slider";
import { useEffect, useState } from "react";
import axios from "axios";
import Jobcard from "../Components/Jobcard";


const Home = () => {
    const [alljobs, setAlljobs] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch data from the API
    axios
      .get("http://localhost:3000/alljobs")
      .then((response) => {
        // Update the component's state with the fetched data
        setAlljobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  const sortedJobs = alljobs.slice().sort((a, b) => {
    // Assuming salaryRange is a string with a numeric format like "50000-70000"
    const salaryA = parseInt(a.salaryRange.split('-')[1]);
    const salaryB = parseInt(b.salaryRange.split('-')[1]);
  
    return salaryB - salaryA;
  });
  
  // Take the top 3 jobs
  const top3Jobs = sortedJobs.slice(0, 3);


    
    return (
        <div className="mx-auto max-w-screen-xl">
            <div><Slider></Slider></div>
            
            <div className="my-28" ><h1 className="text-center font-extrabold text-4xl  shadow-xl">Job By Category</h1>
                <Categorytabs jobdata={alljobs}></Categorytabs>
                
            
            </div>
            <div >
              <div className=" text-center font-extrabold text-4xl  shadow-xl" >TOP HIGHEST PAID JOBS</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  my-24 ">
              {
                top3Jobs.map((job,idx) => <Jobcard className="shadow-5xl " key={idx} job={job}></Jobcard>)
              }
              </div>
             

            </div>
        </div>
    );
};

export default Home;