// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAhwh6TWjbr_p-yOsjPhpMmX4TXSlXw4Gw",
//   authDomain: "ass-nine.firebaseapp.com",
//   projectId: "ass-nine",
//   storageBucket: "ass-nine.appspot.com",
//   messagingSenderId: "250596428500",
//   appId: "1:250596428500:web:4d10c62a5e0931e996c941"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBh_GZt2MjU0n8mBgaZHxrZzsK6TjbaJjM",
  // authDomain: "projects-ceec2.firebaseapp.com",
  // projectId: "projects-ceec2",
  // storageBucket: "projects-ceec2.appspot.com",
  // messagingSenderId: "381330491416",
  // appId: "1:381330491416:web:1224a3225f489e0ee45b6d"


  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app