
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobcard from './Jobcard';

// Import your job data or pass it as props
 // Replace with your actual job data

const jobCategoryTabs = ({jobdata}) =>{ 
  
  return (
  <Tabs>
    <TabList className="font-bold">
      <Tab>On Site Jobs</Tab>
      <Tab>Remote Jobs</Tab>
      <Tab>Hybrid Jobs</Tab>
      <Tab>Part Time Jobs</Tab>
    </TabList>

    <TabPanel>
      {/* Render the On Site Jobs content */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
      {jobdata.filter((job) => job.jobCategory.toLowerCase() === 'on site').length > 0 ? (
  jobdata
    .filter((job) => job.jobCategory.toLowerCase() === 'on site')
    .map((job, index) => (
      <div key={index}>
        {<Jobcard job={job}></Jobcard>}
        {/* Render other job details here */}
      </div>
    ))
) : (
  <div className='min-h-screen max-w-screen-xl flex justify-center items-center text-4xl font-bold m-auto'>No job Added</div>
)}

      </div>
    </TabPanel>

    <TabPanel>
      {/* Render the Remote Jobs content */}
     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
     {jobdata.filter((job) => job.jobCategory.toLowerCase() === 'remote').length > 0 ? (
  jobdata
    .filter((job) => job.jobCategory.toLowerCase() === 'remote')
    .map((job, index) => (
      <div key={index}>
        {<Jobcard job={job}></Jobcard>}
        {/* Render other job details here */}
      </div>
    ))
) : (
  <div className='min-h-screen max-w-screen-xl flex justify-center items-center text-4xl font-bold m-auto'>No job Added</div>
)}

     </div>
    </TabPanel>

    <TabPanel>
      {/* Render the Remote Jobs content */}
     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
     {jobdata.filter((job) => job.jobCategory.toLowerCase() === 'hybrid').length > 0 ? (
  jobdata
    .filter((job) => job.jobCategory.toLowerCase() === 'hybrid')
    .map((job, index) => (
      <div key={index}>
        {<Jobcard job={job}></Jobcard>}
        {/* Render other job details here */}
      </div>
    ))
) : (
  <div className='min-h-screen max-w-screen-xl flex justify-center items-center text-4xl font-bold m-auto'>No job Added</div>
)}

     </div>
    </TabPanel>

    <TabPanel>
      {/* Render the Remote Jobs content */}
     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
     {jobdata.filter((job) => job.jobCategory.toLowerCase() === 'part time').length > 0 ? (
  jobdata
    .filter((job) => job.jobCategory.toLowerCase() === 'part time')
    .map((job, index) => (
      <div key={index}>
        {<Jobcard job={job}></Jobcard>}
        {/* Render other job details here */}
      </div>
    ))
) : (
  <div className='min-h-screen max-w-screen-xl flex justify-center items-center text-4xl font-bold m-auto'>No job Added</div>
)}

     </div>
    </TabPanel>
  </Tabs>
)
}
;

export default jobCategoryTabs;
