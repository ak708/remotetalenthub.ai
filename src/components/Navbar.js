"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useUserDetails } from "@/utils/zustand";

const Navbar = () => {
  const { user, setUser } = useUserDetails();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {});
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {});
  };

  return (
    <div className="text-[#ffffff] pt-2 pb-2 flex flex-row  justify-center absolute top-0 left-0 bg-black z-10 w-screen border-b">
      <div className="p-2 w-[80%] flex flex-row items-center justify-around bg-gradient-to-r ">
        <h1 className="text-2xl font-bold ">
          <Link href="/">
            RTH.<span className="text-green-500">ai</span>
          </Link>
        </h1>
        <ul className="flex flex-row gap-10 flex-wrap">
          <li className=" rounded-full p-1 backdrop-blur-lg transition">
            <Link
              href="/"
              className="cursor-pointer hover:text-green-500 font-semibold"
            >
              Home
            </Link>
          </li>
          <li className=" rounded-full p-1 backdrop-blur-lg transition">
            <Link
              href="/jobs"
              className="cursor-pointer hover:text-green-500 font-semibold"
            >
              Jobs
            </Link>
          </li>
          <li className="hover:text-green-500 font-semibold rounded-full p-1 backdrop-blur-lg transition">
            <Link
              href="/community"
              className="cursor-pointer hover:text-green-500 font-semibold"
            >
              Community
            </Link>
          </li>
        </ul>
        {!user ? (
          <button
            onClick={handleSignIn}
            className="hover:bg-green-500 border text-sm border-green-500 px-3 py-2 rounded-md hover:text-black transition "
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={handleSignOut}
            className="hover:bg-green-500 px-3 py-2 border text-md border-green-500 rounded-md hover:text-black transition "
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
