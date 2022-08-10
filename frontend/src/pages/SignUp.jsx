import React from "react";
import MetaData from "../utils/MetaData";

const SignUp = () => {
  return (
    <>
      <MetaData title="Netflix" />
      <div className="w-full h-screen">
        <img
          className="opacity-50 absolute object-cover w-full h-full bg-gradient-to-r from-black to-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/327506e9-f0a6-4ae6-8115-97ea4c94268d/IN-en-20220808-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
      </div>
    </>
  );
};

export default SignUp;
