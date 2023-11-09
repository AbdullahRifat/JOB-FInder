
import Categorytabs from "../Components/Categorytabs";

import Slider from "../Components/Slider";
import { useEffect, useState } from "react";

import Jobcard from "../Components/Jobcard";
import Marquee from "react-fast-marquee";
import Latestjob from "../Components/Latestjobs";
import { motion, useScroll, useSpring } from "framer-motion";
import useAxioshook from "../hooks/useAxioshook";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";


const Home = () => {
  const [alljobs, setAlljobs] = useState([]);
  const axiosSecure = useAxioshook()
  //framer
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    top: '5rem',
  });




  useEffect(() => {
    // Make an Axios GET request to fetch data from the API
    axiosSecure
      .get("/alljobs")
      .then((response) => {
        // Update the component's state with the fetched data
        setAlljobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // const sortedJobs = alljobs.slice().sort((a, b) => {
  //   // Assuming salaryRange is a string with a numeric format like "50000-70000"
  //   const salaryA = parseInt(a.salaryRange.split('-')[1]);
  //   const salaryB = parseInt(b.salaryRange.split('-')[1]);
  //   console.log(salaryA, salaryB);
  //   return salaryB - salaryA;
  // });

  const sortedJobs = alljobs.slice().sort((a, b) => {
    const salaryRangeA = a.salaryRange;
    const salaryRangeB = b.salaryRange;

    const parseSalary = (range) => {
        const salaryValues = range.split('-');
        if (salaryValues.length === 2) {
            return parseInt(salaryValues[1]);
        } else if (!isNaN(salaryValues[0])) {
            return parseInt(salaryValues[0]);
        }
        return 0; // Handle invalid salary ranges or non-numeric values
    }

    const salaryA = parseSalary(salaryRangeA);
    const salaryB = parseSalary(salaryRangeB);

    return salaryB - salaryA;
});

 
  // Take the top 3 jobs
  const top3Jobs = sortedJobs.slice(0, 3);
  const latest = useLoaderData()


  return (
    <div>
      <Helmet><title>Home</title></Helmet>
      <motion.div className="fixed top-0 left-0 right-0 h-3 bg-primary origin-[0] z-50" style={{ scaleX }} />
<div className="mx-auto max-w-screen-xl">
      <div><Slider></Slider></div>

      <div className="my-28" ><h1 className="text-center font-extrabold text-4xl my-24">Job By Category</h1>
        <Categorytabs jobdata={alljobs}></Categorytabs>


      </div>
      <div  className="mt-24">
        <div className=" text-center font-extrabold text-4xl " >TOP HIGHEST PAID JOBS</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  my-24 ">
          {
            top3Jobs.map((job, idx) => <Jobcard className="shadow-5xl " key={idx} job={job}></Jobcard>)
          }
        </div>
        <div className="my-36">
          <h1 className="text-center font-extrabold text-4xl my-24 "> Meet Our Team</h1>
          <Marquee>
            <p className="text-center font-extrabold text-xl  shadow-xl">Meet the Dream Team of JobFinder.com
              This exceptional team, consisting of Bob Marley, Usain Bolt, and Max Verstappen, is the driving force behind    JobFinder.coms success.</p>
          </Marquee>
          {
            latest.map((job, idx) => <Latestjob key={idx} job={job}></Latestjob>)
          }
        </div>


      </div>
    </div>
    </div>
  );
};

export default Home;