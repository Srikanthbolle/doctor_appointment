"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, SetToken] = useState(true);
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };
  const handleMyProfile = () => {
    router.push("/MyProfile");
  };
  const handleMyAppointment = () => {
    router.push("/MyAppointments");
  };
  return (
    <div className="bg-gray-200 px-3 py-2 flex justify-between  items-center">
      <Image src="/assets/logo.svg" width={100} height={60} alt="logo_image" />
      <ul className="flex gap-5">
        <Link href="/">
          <li className="active:underline underline-offset-4">Home</li>
        </Link>

        <Link href="/Doctors">
          <li className="active:underline underline-offset-4">All Doctors</li>
        </Link>
        <Link href="/About">
          <li className="active:underline underline-offset-4">About</li>
        </Link>
        <Link href="/Contact">
          <li className="active:underline underline-offset-4">Contact</li>
        </Link>
      </ul>
      <div className="relative">
  {token ? (
    <div className="bg-blue-500 px-2 py-2 rounded-full text-white">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center space-x-2"
      >
        <Image
          src="/assets/profile_pic.png"
          alt="profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
          <ul className="py-2 px-1">
            <li onClick={handleMyProfile} className="px-4 py-2 hover:bg-[#FFEFC9] cursor-pointer hover:font-semibold">My Profile</li>
            <li onClick={handleMyAppointment} className="px-4 py-2 hover:bg-[#FFEFC9] cursor-pointer hover:font-semibold">My Appointment</li>
            <li
              onClick={() => {
                setShowMenu(false);
                SetToken(false); // ✅ This should now trigger re-render
              }}
              className="px-4 py-2 hover:bg-[#FFEFC9] cursor-pointer hover:font-semibold"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  ) : (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Create Account
    </button>
  )}
</div>

    </div>
  );
};

export default Navbar;
