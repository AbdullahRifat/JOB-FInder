import { Outlet } from "react-router-dom";

import { motion, useAnimation, useScroll, useSpring } from "framer-motion";

import Navbar from "../Components/Navabar";
import Footer from "../Components/Footer";



const Mainlayouts = () => {


    //framer
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    top: '5rem',
  });


    return (
        <div className=" italic">
          
             <motion.div className="fixed top-0 left-0 right-0 h-3 bg-primary origin-[0] z-50" style={{ scaleX }} />
<div className="mx-auto max-w-screen-xl"></div>
            <div className="mb-24 bg-info sticky z-10 top-0"><Navbar></Navbar></div>
            
            <div className="my-24 italic"><Outlet></Outlet></div>
            <div className="mt-24"><Footer></Footer></div>
           
            
        </div>
    );
};

export default Mainlayouts;