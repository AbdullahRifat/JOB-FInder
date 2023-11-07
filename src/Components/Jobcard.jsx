import { NavLink } from "react-router-dom";


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
    <figure className="px-6 pt-6">
      <img src={jobBanner} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className=" h-56 px-6 py-6 items-center ">
    <div>
      <h2 className="card-title">{userName}</h2>
    <p className=" font-bold">{jobTitle}</p>
    <p className=" font-bold">Posted : {jobPostingDate}</p>
    <p className=" font-bold">Deadline : {applicationDeadline}</p>
    <p className=" font-bold">Salary : {salaryRange}</p>
    <p className=" font-bold">Applicants : {jobApplicants}</p>
    </div>
      <div className="card-actions">
      <NavLink to={`/jobdetails/${_id}`}> <button className="btn btn-primary">Details</button></NavLink>
      </div>
    </div>
  </div>





  
  );
}
export default Jobcard