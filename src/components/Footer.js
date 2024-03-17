import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";
const Footer = () => {
  return (
    <div className=" flex flex-row justify-around mb-0 pt-20">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold text-green-500 flex flex-row gap-2 items-center">
          Remote Talent Hub <FaSuitcase />
        </div>
        <p>Remote</p>
        <div className="flex flex-row gap-2 items-center">
          <FaPhone className="text-green-500" />
          <p>Phone</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <MdEmail className="text-green-500 h-5 w-5" />
          <p>Email</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div className="text-xl font-semibold text-green-500 flex flex-row gap-2 items-center">
            Links <PiLinkSimpleBold />
          </div>
          <Link href="/">
            <p className="flex flex-row gap-2 items-center group cursor-pointer hover:text-green-500">
              Home{" "}
              <IoIosArrowForward className="opacity-0 group-hover:opacity-100 transition group-hover:text-green-500" />
            </p>
          </Link>
          <Link href="/jobs">
            <p className="flex flex-row gap-2 items-center group cursor-pointer hover:text-green-500">
              Jobs{" "}
              <IoIosArrowForward className="opacity-0 group-hover:opacity-100 transition group-hover:text-green-500" />
            </p>
          </Link>
          <p className="flex flex-row gap-2 items-center group cursor-pointer hover:text-green-500">
            Community{" "}
            <IoIosArrowForward className="opacity-0 group-hover:opacity-100 transition group-hover:text-green-500" />
          </p>
          <p className="flex flex-row gap-2 items-center group cursor-pointer hover:text-green-500">
            About{" "}
            <IoIosArrowForward className="opacity-0 group-hover:opacity-100 transition group-hover:text-green-500" />
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold text-green-500 flex flex-row gap-2 items-center">
          Social Media <HiSparkles />
        </div>
        <div className="flex flex-row gap-5">
          <p>
            <FaXTwitter className="hover:text-green-500 hover:scale-125 cursor-pointer" />
          </p>
          <p>
            <FaFacebook className="hover:text-green-500 hover:scale-125 cursor-pointer" />
          </p>
          <p>
            <FaInstagram className="hover:text-green-500 hover:scale-125 cursor-pointer" />
          </p>
          <p>
            <FaLinkedin className="hover:text-green-500 hover:scale-125 cursor-pointer" />
          </p>
        </div>
        <div>
          <div className="text-xl font-semibold text-green-500 flex flex-row gap-2 items-center py-2">
            Email Newsletter <MdEmail />
          </div>
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 rounded-full bg-transparent text-white border hover:border-green-500  "
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
