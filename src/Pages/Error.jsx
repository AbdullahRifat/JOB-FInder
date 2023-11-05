import { Link } from "react-router-dom";
import bg from "../assets/404.gif";

const Error = () => {

  return (
    <div className="mt-10 text-center px-3">
      <img src={bg} alt="" className="mx-auto h-2/3 rounded-lg " />
      
      <Link to="/">
        <button className="btn btn-primary mt-3">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;