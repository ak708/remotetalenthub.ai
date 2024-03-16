import React from "react";

const Jobs = () => {
  return (
    <div>
      <div className="text-white ">
        <div className="flex flex-row justify-between p-5">
          <h2>Filter</h2>
          <div>Sort</div>
        </div>
        <div>
          <div className="border rounded-lg p-2 flex flex-col fit-content justify-between w-[15%] gap-2 hover:border-2">
            <div className="flex flex-row justify-between">
              <h1>Img</h1>
              <p>Date</p>
            </div>

            <div className="flex flex-col justify-left">
              <h1 className="font-bold text-lg">Job Title</h1>
              <p className="opacity-80">Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
