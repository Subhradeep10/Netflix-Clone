import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row p-5 justify-between z-[100] ">
      <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
        NETFLIX
      </h1>
      <div className="flex flex-row">
        <button className="text-white cursor-pointer px-4">Sign In</button>
        <button className="bg-red-600 px-4 py-2 rounded-md text-white cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
