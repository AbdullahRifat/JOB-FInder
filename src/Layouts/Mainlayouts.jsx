import { Outlet } from "react-router-dom";



import Navbar from "../Components/Navabar";
import Footer from "../Components/Footer";



const Mainlayouts = () => {
    return (
        <div>
             
            <div><Navbar></Navbar></div>
            
            <div><Outlet></Outlet></div>
            <div><Footer></Footer></div>
           
            
        </div>
    );
};

export default Mainlayouts;