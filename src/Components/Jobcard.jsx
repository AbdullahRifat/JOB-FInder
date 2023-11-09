import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Jobcard = ({job})=> {
  
  const {
    _id,
    jobBanner,
    jobTitle,
    userName,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPostingDate,
    applicationDeadline,
    email,
    jobApplicants} = job || {}
  return (

    <div className=" w-auto bg-base-100 shadow-xl rounded-lg ">
    <figure className="px-6 pt-6 h-56 flex justify-center">
      <img src={jobBanner} alt="Shoes" className="rounded-xl h-full" />
    </figure>
    <div className=" px-6 py-6 items-center ">
    <div className="flex h-56  flex-col gap-y-2 ">
      <h2 className="card-title">{jobTitle}</h2>
    <p className=" font-bold">UserName :    <span className="font-normal ">{userName}</span></p>
    <p className=" font-bold">Posted :    <span className="font-normal">{jobPostingDate}</span></p>
    <p className=" font-bold">Deadline :    <span className="font-normal">{applicationDeadline}</span></p>
    <p className=" font-bold">Salary :    <span className="font-normal">{salaryRange}</span>$</p>
    <p className=" font-bold">Applicants :    <span className="font-normal">{jobApplicants}</span></p>
    </div>
      <div className="card-actions">
      {/* <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    /> */}
        
      <NavLink to={`/jobdetails/${_id}`}>
        
  
         <motion.button className="btn btn-primary"
         whileHover={{ scale: 1.1 }}
         transition={{ type: "spring", stiffness: 400, damping: 10 }}>Details</motion.button></NavLink>
      </div>
    </div>
  </div>





  
  );
}
export default Jobcard