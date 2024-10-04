import React from "react";
import logo from "../assets/snapsolve.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-white grid place-items-center">
      <div className="flex justify-between my-3 md:w-10/12 w-11/12 p-3">
        <Link to="/" className="text-xl font-400">
          snapsolve
        </Link>
        <Link to="/signin" className="md:text-md text-normal">
          Login/Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
