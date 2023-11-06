import { NavLink } from "react-router-dom";
import axioshook from "../Hooks/axioshook";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const Jobcard2 = ({job})=> {

    const axiosSecure = axioshook()


    
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
      axiosSecure.delete(`/delete/${_id}`)
        .then((response) => {
          if (response.data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(() => {
              location.reload();
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
      <NavLink to={`/deletejob/${_id}`}> <button onClick={handleDelete} className="btn btn-primary">Delete</button></NavLink>
      </div>
    </div>
  </div>





  
  );
}
export default Jobcard2