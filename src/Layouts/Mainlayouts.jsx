import { Outlet } from "react-router-dom";



import Navbar from "../Components/Navabar";
import Footer from "../Components/Footer";



const Mainlayouts = () => {
    return (
        <div className=" italic">
             
            <div className="mb-24 bg-info"><Navbar></Navbar></div>
            
            <div className="my-24 italic"><Outlet></Outlet></div>
            <div className="mt-24"><Footer></Footer></div>
           
            
        </div>
    );
};

export default Mainlayouts;