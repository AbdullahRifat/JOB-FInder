import { useLoaderData } from "react-router-dom";
import Jobcard from "../Components/Jobcard";


const Alljobs = () => {
    const alljobs = useLoaderData()

    return (
        <div>{
            alljobs.map((job,idx)=>{

                return (
                    <Jobcard key={idx} job={job}></Jobcard>
                )
            })
            
            }
            
        </div>
    );
};

export default Alljobs;