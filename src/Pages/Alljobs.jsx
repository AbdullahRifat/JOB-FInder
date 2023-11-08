
import Jobcard from "../Components/Jobcard";
import { useEffect, useState } from "react";
import useAxioshook from "../hooks/useAxioshook";
import Banner from "../Components/Banner";
import { Helmet } from "react-helmet";






const Alljobs = () => {

  const [alljobs, setAlljobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const axiosSecure = useAxioshook()
  const [searchSubmitted, setSearchSubmitted] = useState(false);

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


  //search
  const handleSearch = () => {
    if (searchText.trim() === "") {
      setSearchSubmitted(false);
      // If the search text is empty, reset the jobs to the original list
      axiosSecure
        .get(`/alljobs`)
        .then((response) => {
          setAlljobs(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      // If the search text is not empty, perform the filtering
      const filteredJobs = alljobs.filter((job) => {
        const jobTitle = job.jobTitle.toLowerCase();
        const search = searchText.toLowerCase();
        return jobTitle.includes(search);
      });

      // Update the component's state with the filtered jobs
      setAlljobs(filteredJobs);
      setSearchSubmitted(true);
    }
  };


console.log(alljobs)



  return (
    <div >
       <Helmet><title>Alljobs</title></Helmet>
      {/* <Banner src={"https://images2.imgbox.com/af/73/ZUQgJvEQ_o.jpg"}></Banner> */}
      <div className="hero min-h-screen" style={{ backgroundImage: `url(https://images2.imgbox.com/af/73/ZUQgJvEQ_o.jpg)` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <input
          type="text"
          placeholder="Search"
          className="input rounded-r-none text-base-content input-bordered-none w-24  md:w-auto"
          value={searchText}
          onChange={(e) => {setSearchText(e.target.value);
            console.log(e.target.value)
            
            
            if (e.target.value==="") {
              setSearchSubmitted(false);
              // If the search text is empty, reset the jobs to the original list
              axiosSecure
                .get(`/alljobs`)
                .then((response) => {
                  setAlljobs(response.data);
                })
                .catch((error) => {
                  console.error("Error fetching data:", error);
                });
            }
          
          }}
        />
            <button onClick={handleSearch} className="btn btn-primary rounded-l-none">Search</button>
          </div>
        </div>
      </div>
          
    <div className=" my-24">
      <h2 className="text-center font-extrabold text-4xl  shadow-xl my-24"> All Jobs</h2>
    {
        
        alljobs ?<div>{alljobs.length>0?<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">{alljobs.map((job, idx) => {

          return (
           <div key={idx}> <Jobcard  job={job}></Jobcard>  </div>
          )
        })}</div>:<div className="min-h-screen flex justify-center items-center text-4xl font-bold ">Search Result not Found </div>}</div>: <span className="loading loading-spinner text-primary"></span>

      }
    </div>

    </div>
  );
};

export default Alljobs;