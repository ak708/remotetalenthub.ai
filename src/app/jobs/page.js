import JobCard from "@/components/JobCard";
import JobFilter from "@/components/JobFilter";
export default function Job() {
	return (
		<div className="pt-[100px] h-screen overflow-y-hidden bg-black text-white px-[150px] flex gap-7">
			<JobFilter />

			<div className="flex-grow min-w-[400px] grid grid-cols-1 lg:grid-cols-2 gap-7 max-h-full overflow-y-scroll">
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
			</div>
		</div>
	);
}
