import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Jobcard2 = ({job})=> {
  
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

    <div className="card w-auto bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={jobBanner} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center ">
    <div className="text-start">
    <h2 className="card-title">{userName}</h2>
    <p className=" font-bold">{jobTitle}</p>
    <p className=" font-bold">Posted : {jobPostingDate}</p>
    <p className=" font-bold">Deadline : {applicationDeadline}</p>
    <p className=" font-bold">Salary : {salaryRange}</p>
    <p className=" font-bold">Applicants : {jobApplicants}</p>
    </div>
      <div className="card-actions">
      <NavLink to={`/updatejob/${_id}`}> <button className="btn btn-primary">Update</button></NavLink>
      <NavLink to={`/deletejob/${_id}`}> <button className="btn btn-primary">Delete</button></NavLink>
      </div>
    </div>
  </div>





  
  );
}
export default Jobcard2