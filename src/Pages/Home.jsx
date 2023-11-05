import { useLoaderData } from "react-router-dom";
import Categorytabs from "../Components/Categorytabs";

import Slider from "../Components/Slider";


const Home = () => {
    const jobdata = useLoaderData()
    
    return (
        <div>
            <div><Slider></Slider></div>
            
            <div><h1>Job By Category</h1>
                <Categorytabs jobdata={jobdata}></Categorytabs>
                
            
            </div>
        </div>
    );
};

export default Home;