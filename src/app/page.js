import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
