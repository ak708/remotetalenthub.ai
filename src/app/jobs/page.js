"use client";
import JobCard from "@/components/JobCard";
import JobFilter from "@/components/JobFilter";
import { useEffect, useState } from "react";
export default function Job() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/crackeddevs")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="pt-[100px] h-screen scroll-smooth overflow-y-hidden bg-black text-white px-[150px] flex gap-7">
      <JobFilter />

      <div className="flex-grow min-w-[500px] scroll-smooth grid grid-cols-1 lg:grid-cols-2 gap-7 max-h-full overflow-y-scroll">
        {data?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
