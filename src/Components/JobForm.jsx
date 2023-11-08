import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Firebase/Authprovider";

function JobForm({ onFormSubmit,job ,addjobcondition }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());

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
    formObject.applyemail = [];
    onFormSubmit(formObject);
  }

  return (
    <div className="max-w-screen-xl mx-auto relative flex flex-col justify-center min-h-screen overflow-hidden " >
      
      <form className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl" onSubmit={handleSubmit}>
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="jobBanner">Picture URL of the Job Banner:</label>
    <input
      type="text"
      id="jobBanner"
      name="jobBanner"
      className=" block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40  border-collapse"
      defaultValue={job?.jobBanner}
      required
    />
  </div>
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="jobBanner">Picture URL of Comapny Logo:</label>
    <input
      type="text"
      id="jobLogo"
      name="jobLogo"
      className=" block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40  border-collapse"
      defaultValue={job?.jobLogo}
      required
    />
  </div>
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="jobTitle">Job Title:</label>
    <input
      type="text"
      id="jobTitle"
      name="jobTitle"
      className=" block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40  border-collapse"
      defaultValue={job?.jobTitle}
      required
    />
  </div>
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="userName">Logged In User Name:</label>
    <input
      type="text"
      id="userName"
      name="userName"
      className=" block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40  border-collapse"
      defaultValue={job?.userName}
      required
    />
  </div>
  
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="jobCategory">Job Category:</label>
    <select
      id="jobCategory"
      name="jobCategory"
      className="w-full bg-gray-200 border-collapse font-bold"
      defaultValue={job?.jobCategory}
      required
    >
      <option value="" disabled>Select a category</option>
      <option value="On Site">On Site</option>
      <option value="Remote">Remote Job</option>
      <option value="Part-Time">Part Time</option>
      <option value="Hybrid">Hybrid</option>
    </select>
  </div>
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="salaryRange">Salary Range:</label>
    <input
      type="text"
      id="salaryRange"
      name="salaryRange"
      className=" block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40  border-collapse"
      defaultValue={job?.salaryRange}
      required
    />
  </div>
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="jobDescription">Job Description:</label>
    <textarea
      id="jobDescription"
      name="jobDescription"
      className="w-full bg-gray-200 border-collapse"
      defaultValue={job?.jobDescription}
      required
    ></textarea>
  </div>
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="jobPostingDate">Job Posting Date:</label>
    <br />
    <DatePicker
      type="date"
      id="jobPostingDate"
      name="jobPostingDate"
      className="w-full bg-gray-200 border-collapse"
      selected={startDate} onChange={(date) => setStartDate(date)}
      
      defaultValue={job?.jobPostingDate}
      required
    />
  </div>
  <div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="applicationDeadline">Application Deadline:</label>
    <br />
    <DatePicker
      type="date"
      id="applicationDeadline"
      name="applicationDeadline"
      className="w-full bg-gray-200 border-collapse"
      selected={endDate} onChange={(date) => setEndtDate(date)}
      defaultValue={job?.applicationDeadline}
      required
    />
  </div>
  {
    addjobcondition?<div>
    <label className=" block text-sm font-semibold text-gray-800" htmlFor="jobApplicants">Job Applicants Number:</label>
    <input
      type="number"
      id="jobApplicants"
      name="jobApplicants"
      className=" block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40  border-collapse"
      defaultValue={job?.jobApplicants}
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
