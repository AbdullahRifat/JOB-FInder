import { NavLink, useLocation } from "react-router-dom";
import useAxioshook from "../hooks/useAxioshook";
import Swal from "sweetalert2";
import Pdf from "./Pdf";


// eslint-disable-next-line react/prop-types
const Jobcard2 = ({job})=> {

    const axiosSecure = useAxioshook()
    const location = useLocation()

    
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


const handleDelete = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.delete(`/myjobs/${_id}`)
        .then((response) => {
          if (response.data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(() => {
               window.location.reload();
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  });
};






    
  
  return (

    <div className="w-auto  bg-base-100 shadow-xl">
    <figure className="px-10 pt-10  h-56">
      <img src={jobBanner} alt="Shoes" className="rounded-xl h-full" />
    </figure>
    <div className="px-6 py-6 items-center  ">
    <div className="flex h-56 flex-col gap-y-2 ">
    <h2 className="card-title">{jobTitle}</h2>
    <p className=" font-bold">UserName:{userName} </p>
    <p className=" font-bold">Posted : {jobPostingDate}</p>
    <p className=" font-bold">Deadline : {applicationDeadline}</p>
    <p className=" font-bold">Salary : {salaryRange}</p>
    <p className=" font-bold">Applicants : {jobApplicants}</p>
    </div>
      <div className="card-actions">
      <NavLink to={`/updatejob/${_id}`}> <button className="btn btn-primary">Update</button></NavLink>
      <NavLink state={location.pathname} to={`/deletejob/${_id}`} replace> <button onClick={handleDelete} className="btn btn-primary">Delete</button></NavLink>
      
      </div>
      
    </div>
  </div>





  
  );
}
export default Jobcard2