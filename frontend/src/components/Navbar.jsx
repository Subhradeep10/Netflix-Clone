import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="flex flex-row">
        <Link to="/login">
          <button className="text-white cursor-pointer px-4 py-2 rounded-md">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-4 py-2 rounded-md text-white cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
