import { useContext, useEffect, useState } from "react";

import { Link, useLocation,NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Authprovider";
import Swal from "sweetalert2";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {


  
  const [logShow,setLogShow] = useState(false)

  const navigate = useNavigate()
  const location= useLocation()
  const {logout,user} = useContext(AuthContext)

   const handleLogout = ()=>{
      logout().then((res)=> navigate(location?.state? location.state : '/'))
      .then(()=> Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'logged out',
        showConfirmButton: false,
        timer: 1500,
      }))
      .catch(err=> console.log(err))
   }
   
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);



  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-primary font-extrabold bg-white"
              : isActive
              ? "font-extrabold bg-primary text-white mr-1"
              : "mr-1"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-primary font-extrabold bg-white"
              : isActive
              ? "font-extrabold bg-primary text-white mr-1"
              : "mr-1"
          }
          to={"/alljobs"}
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-primary font-extrabold bg-white"
              : isActive
              ? "font-extrabold bg-primary text-white mr-1"
              : "mr-1"
          }
          to={"/appliedjobs"}
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-primary font-extrabold bg-white"
              : isActive
              ? "font-extrabold bg-primary text-white mr-1"
              : "mr-1"
          }
          to={"/myjobs"}
        >
           My Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-primary font-extrabold bg-white"
              : isActive
              ? "font-extrabold bg-primary text-white mr-1"
              : "mr-1"
          }
          to={"/blogs"}
        >
           Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-primary font-extrabold bg-white"
              : isActive
              ? "font-extrabold bg-primary text-white mr-1"
              : "mr-1"
          }
          to={"/addjob"}
        >
          Add Job
        </NavLink>
      </li>
    </>
  );


  return (
    <div className="bg-info text-white">
      <div className="navbar max-w-screen-xl mx-auto p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="flex items-center ">
              <img className="md:w-12 h-10 w-10 md:h-12 rounded-full" src="/logo.png" alt="" />
              <p className="btn btn-ghost normal-case text-lg md:text-2xl">
                JOB<span className="text-gray-800">SEEKERS</span>
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end flex items-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user.photoURL} />
                  ) : (
                    <img src="/images/profile.svg" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 text-info z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box"
              >
                <li>
                  <p className="text-xl">{user?.displayName}</p>
                </li>
                <li>
                  <a className="text-xl" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-primary text-white">Login</button>
            </Link>
          )}
          <div className="ml-2 flex items-center justify-center">
            <label className="swap swap-rotate">
              <input onClick={toggleTheme} type="checkbox" />
              <div className="swap-on">
                {" "}
                <MdDarkMode className="md:text-3xl"></MdDarkMode>{" "}
              </div>
              <div className="swap-off">
                {" "}
                <MdOutlineDarkMode className="md:text-3xl"></MdOutlineDarkMode>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
