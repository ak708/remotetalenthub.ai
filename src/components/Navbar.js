import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-[#ffffff] p-5 flex flex-row  justify-center ">
      <div className="p-2 w-[80%] flex flex-row items-center justify-around bg-gradient-to-r ">
        <h1 className="text-2xl font-bold ">
          <Link href="/">Cracked</Link>
        </h1>
        <ul className="flex flex-row gap-10 flex-wrap">
          <li className="hover:text-green-500 hover:font-bold rounded-full p-1 backdrop-blur-lg transition">
            <Link href="/jobs" className="cursor-pointer">
              Jobs
            </Link>
          </li>
          <li className="hover:text-green-500 hover:font-bold rounded-full p-1 backdrop-blur-lg transition">
            Companies
          </li>
          <li className="hover:text-green-500 hover:font-bold rounded-full p-1 backdrop-blur-lg transition">
            About
          </li>
        </ul>
        <button className="hover:bg-green-500 p-2 rounded-md hover:text-white transition">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
