import React from "react";
import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import Link from "next/link";

const Jobs = ({ job }) => {
  return (
    <div className="max-w-[400px] text-white bg-[#1E1E1E] p-6 rounded-lg">
      <div className="flex items-center gap-4 justify-between mb-4">
        <Image
          src={
            job.logo_url ||
            "data:image/png;base64,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"
          }
          alt="Company Logo"
          width={50}
          height={50}
          objectFit="contain"
          className="rounded-lg"
        />
        <div>{job.created_at.slice(0, 10)}</div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{job.title}</h1>
          <h2 className="text-gray-400 text-sm">{job.company}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm border px-2 py-1 rounded-full">Remote</div>
          <div className="text-sm border px-2 py-1 rounded-full">On Site</div>
          <div className="bg-[#22c55e] text-sm text-black px-2 py-1 rounded-full">
            {job.job_type}
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <GrTechnology />
            <div>{job.main_technology}</div>
          </div>

          <div className="flex items-center gap-3">
            <FaDollarSign />
            <div>{job.max_payment_usd || "Not Provided"}</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={`${job.apply_url}`}
            target="_blank"
            className="text-md font-light p-2 rounded-md border-2 transition-all ease-in-out duration-200 border-green-500 hover:bg-green-500 hover:text-back"
          >
            Apply Now
          </Link>
          {job.deadline ? (
            <div className="text-sm text-red-500">
              Deadline : {job.deadline.slice(0, 10)}
            </div>
          ) : (
            <div className="text-sm text-red-500">Deadline : Not Provided</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
