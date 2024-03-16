import React from "react";
import Text from "./Text1";
import { IoSearch } from "react-icons/io5";
import Footer from "./Footer";

const Hero = () => {
  const l1 = "Welcome to";
  const l2 = "CrackedDevs";
  const l1ren = ({ text }) => {
    text.split("").map((letter, index) => <h1 className="">{letter}</h1>);
  };
  return (
    <div className="text-white flex-col flex justify-center ">
      <div className="justify-center items-center p-20">
        <h1 className="text-7xl font-bold text-center py-5">Welcome to</h1>
        <div className="py-5">
          <Text text="CrackedDevs" />
        </div>
        <p className="text-2xl text-center ">
          The best place to find your dream job
        </p>
      </div>
      <div className="">
        <div className="bg-green-900 opacity-50 hover:opacity-65 text-green-500 p-5 rounded-full flex-row flex items-center justify-around">
          <IoSearch className="text-white w-7 font-bold h-7 " />
          <input
            type="text"
            placeholder="Search for jobs"
            className="p-2 rounded-full  bg-transparent text-white border-none "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
