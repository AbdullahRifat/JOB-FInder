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
    Email,
    jobApplicants} = job || {}
  return (

    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={jobBanner} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
    <h2 className="card-title">{userName}</h2>
    <p className="font-bold">{jobTitle}</p>
    <p className="font-bold">Posted : {jobPostingDate}</p>
    <p className="font-bold">Deadline : {applicationDeadline}</p>
    <p className="font-bold">Salary : {salaryRange}</p>
    <p className="font-bold">Applicants : {jobApplicants}</p>
      <div className="card-actions">
      <NavLink to={`/jobdetails/${_id}`}> <button className="btn btn-primary">Details</button></NavLink>
      </div>
    </div>
  </div>





  
  );
}
export default Jobcard