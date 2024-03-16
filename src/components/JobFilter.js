import React from "react";

const JobFilter = () => {
  return (
    <div className="max-w-[350px] flex flex-col gap-4">
      <div className="lg:flex items-center gap-3">
        <input
          type="text"
          placeholder="Search for a job"
          className="bg-[#1E1E1E] text-white px-3 py-2 rounded-lg max-w-[150px]"
        />
        <button className="bg-[#22c55e] text-black px-4 py-2 rounded-lg">
          Search
        </button>
      </div>
      <div>
        Job Type
        <div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Sales/Marketing
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Engineering
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            IT
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Product
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Design
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Business Dev
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Others
          </div>
        </div>
      </div>
      <div>
        Location
        <div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            United States
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Hong Kong
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Indonesia
          </div>
        </div>
      </div>
      <div>
        Skills
        <div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Frontend
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Backend
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            C++
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Javascript
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Python
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Ruby
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Security
          </div>{" "}
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            PHP
          </div>
        </div>
      </div>
      <div>
        Employement Type
        <div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Full-Time
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Part-Time
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Contract
          </div>
          <div className="p-2 border-white border rounded-lg w-fit inline-block mr-2 mt-2 cursor-pointer">
            Freelance
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
