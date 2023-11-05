import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Jobcard = ({job})=> {
  
  const { PostedBy,JobTitle,PostingDate,ApplicationDeadline,SalaryRange,JobApplicantsNumber} = job || {}
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
  
  <div className="card-body justify-center">
    <h2 className="card-title">{PostedBy}</h2>
    <p className="font-bold">{JobTitle}</p>
    <p className="font-bold">Posted : {PostingDate}</p>
    <p className="font-bold">Deadline : {ApplicationDeadline}</p>
    <p className="font-bold">Salary : {SalaryRange}</p>
    <p className="font-bold">Applicants : {JobApplicantsNumber}</p>
    
    <div className="card-actions justify-center">
       <NavLink to={'/jobdetails'}> <button className="btn btn-primary">Details</button></NavLink>
    </div>
  </div>
</div>
  );
}
export default Jobcard