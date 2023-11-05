// import React from "react";
// import {
//     BsFillLightbulbOffFill,BsFillLightbulbFill} from "react-icons/bs"

// function Mainlayout() {
//     const [theme, setTheme] = React.useState('light');
//     const toggleTheme = () => {
//       setTheme(theme === 'dark' ? 'light' : 'dark');
//     };
//     // initially set the theme and "listen" for changes to apply them to the HTML tag
//     React.useEffect(() => {
//       document.querySelector('html').setAttribute('data-theme', theme);
//     }, [theme]);
//     return (
//       <label className="swap swap-rotate">
//         {/* <input onClick={toggleTheme} type="checkbox" /> */}
//         <a onClick={toggleTheme} className="swap-on flex justify-start items-center gap-4"><BsFillLightbulbOffFill/> Dark </a>
//         <a onClick={toggleTheme} className="swap-off flex justify-start items-center gap-4"><BsFillLightbulbFill/> Light</a>
//       </label>
//     );
//   }

// export default Mainlayout;