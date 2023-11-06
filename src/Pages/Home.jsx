
import Categorytabs from "../Components/Categorytabs";

import Slider from "../Components/Slider";
import { useEffect, useState } from "react";
import axios from "axios";


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
    
    return (
        <div className="mx-auto max-w-screen-xl">
            <div><Slider></Slider></div>
            
            <div className="my-28" ><h1 className="font-bold text-4xl text-center">Job By Category</h1>
                <Categorytabs jobdata={alljobs}></Categorytabs>
                
            
            </div>
        </div>
    );
};

export default Home;