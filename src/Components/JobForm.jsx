import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Firebase/Authprovider";

function JobForm({ onFormSubmit,job ,addjobcondition }) {
  const [startDate, setStartDate] = useState(new Date());

  const {user} = useContext(AuthContext)

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Convert formData to an object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    formObject.email = user?.email||"";
    formObject.jobApplicants = 0;
    
    onFormSubmit(formObject);
  }

  return (
    <div className="max-w-screen-xl mx-auto" >
      
      <form onSubmit={handleSubmit}>
  <div>
    <label className="font-bold" htmlFor="jobBanner">Picture URL of the Job Banner:</label>
    <input
      type="text"
      id="jobBanner"
      name="jobBanner"
      className="w-full bg-gray-200 border-collapse"
      //defaultValue={job.PostedBy}
      required
    />
  </div>
  <div>
    <label className="font-bold" htmlFor="jobTitle">Job Title:</label>
    <input
      type="text"
      id="jobTitle"
      name="jobTitle"
      className="w-full bg-gray-200 border-collapse"
      //defaultValue={job.JobTitle}
      required
    />
  </div>
  <div>
    <label className="font-bold" htmlFor="userName">Logged In User Name:</label>
    <input
      type="text"
      id="userName"
      name="userName"
      className="w-full bg-gray-200 border-collapse"
      //defaultValue={job.PostedBy}
      required
    />
  </div>
  
  <div>
    <label className="font-bold" htmlFor="jobCategory">Job Category:</label>
    <select
      id="jobCategory"
      name="jobCategory"
      className="w-full bg-gray-200 border-collapse font-bold"
      //defaultValue={job.Category}
      required
    >
      <option value="" disabled>Select a category</option>
      <option value="On Site">On Site</option>
      <option value="Remote">Remote Job</option>
      <option value="Part-Time">Part-Time</option>
      <option value="Hybrid">Hybrid</option>
    </select>
  </div>
  <div>
    <label className="font-bold" htmlFor="salaryRange">Salary Range:</label>
    <input
      type="text"
      id="salaryRange"
      name="salaryRange"
      className="w-full bg-gray-200 border-collapse"
      //defaultValue={job.SalaryRange}
      required
    />
  </div>
  <div>
    <label className="font-bold" htmlFor="jobDescription">Job Description:</label>
    <textarea
      id="jobDescription"
      name="jobDescription"
      className="w-full bg-gray-200 border-collapse"
      //defaultValue={job.Details}
      required
    ></textarea>
  </div>
  <div>
    <label className="font-bold" htmlFor="jobPostingDate">Job Posting Date:</label>
    <br />
    <DatePicker
      type="date"
      id="jobPostingDate"
      name="jobPostingDate"
      className="w-full bg-gray-200 border-collapse"
      selected={startDate} onChange={(date) => setStartDate(date)}
      
      //defaultValue={job.PostingDate}
      required
    />
  </div>
  <div>
    <label className="font-bold" htmlFor="applicationDeadline">Application Deadline:</label>
    <br />
    <DatePicker
      type="date"
      id="applicationDeadline"
      name="applicationDeadline"
      className="w-full bg-gray-200 border-collapse"
      selected={startDate} onChange={(date) => setStartDate(date)}
      //defaultValue={job.ApplicationDeadline}
      required
    />
  </div>
  {
    addjobcondition?<div>
    <label className="font-bold" htmlFor="jobApplicants">Job Applicants Number:</label>
    <input
      type="number"
      id="jobApplicants"
      name="jobApplicants"
      className="w-full bg-gray-200 border-collapse"
      //defaultValue={job.JobApplicantsNumber}
      required
    />
  </div>:""
  }
  
  <button className=" my-8 btn btn-primary" type="submit">Submit</button>
 </form>

    </div>
  );
}

export default JobForm;
