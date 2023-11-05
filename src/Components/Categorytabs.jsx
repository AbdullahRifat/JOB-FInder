
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobcard from './Jobcard';

// Import your job data or pass it as props
 // Replace with your actual job data

const CategoryTabs = ({jobdata}) =>{ 
  
  return (
  <Tabs>
    <TabList>
      <Tab>On Site Jobs</Tab>
      <Tab>Remote Jobs</Tab>
      <Tab>Hybrid Jobs</Tab>
      <Tab>Part Time Jobs</Tab>
    </TabList>

    <TabPanel>
      {/* Render the On Site Jobs content */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
      {jobdata
        .filter((job) => job.Category.toLowerCase() === 'on site job')
        .map((job, index) => (
          <div key={index}>
           <Jobcard job={job}></Jobcard>
            {/* Render other job details here */}
          </div>
        ))}
      </div>
    </TabPanel>

    <TabPanel>
      {/* Render the Remote Jobs content */}
     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
     {jobdata
        .filter((job) => job.Category.toLowerCase() === 'remote job')
        .map((job, index) => (
          <div key={index}>
            <Jobcard job={job}></Jobcard>
            {/* Render other job details here */}
          </div>
        ))}
     </div>
    </TabPanel>

    <TabPanel>
      {/* Render the Hybrid Jobs content */}
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
    {jobdata
        .filter((job) => job.Category.toLowerCase() === 'hybrid')
        .map((job, index) => (
          <div key={index}>
            <Jobcard job={job}></Jobcard>
            {/* Render other job details here */}
          </div>
        ))}
    </div>
    </TabPanel>

    <TabPanel>
      {/* Render the Part Time Jobs content */}
     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
     {jobdata
        .filter((job) => job.Category.toLowerCase() === 'part time')
        .map((job, index) => (
          <div key={index}>
            <Jobcard job={job}></Jobcard>
            {/* Render other job details here */}
          </div>
        ))}
     </div>
    </TabPanel>
  </Tabs>
)
}
;

export default CategoryTabs;
