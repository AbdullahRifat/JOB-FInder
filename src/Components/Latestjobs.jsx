const Latestjob= ({ job}) => {
    const {picture, description,name,experience,jobFinderExperience } = job
   
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 m-2 md:flex">
        <div className="md:w-1/3 h-36 flex justify-center flex-col items-center">
          <img src={picture} alt="Card Image" className="w-20  h-auto" />
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-lg font-semibold">{description}</p>
        </div>
        <div className="md:w-auto mt-4 flex justify-center items-center flex-col md:mt-0">
       
          <p className="text-lg font-semibold">Details: {experience }</p>
          <p className="text-lg font-semibold">Experience: {jobFinderExperience }</p>
        </div>
      </div>
    );
  };

  export default Latestjob;