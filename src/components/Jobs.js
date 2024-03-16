import React from "react";
import Navbar from "./Navbar";

const Jobs = () => {
  return (
    <div>
      <Navbar />

      <div className="text-white ">
        <div className="flex flex-row justify-between p-5">
          <h2>Filter</h2>
          <div>Sort</div>
        </div>
        <div>
          <div>
            <h1>Job 1</h1>
            <p>Job description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
