'use client'
import { useState } from "react";

export default function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: "/assets/profile_pic.png",
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    birthday: "20 July, 2024",
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src={userData.image}
          alt="Profile"
          className="w-40 h-40 object-cover rounded-lg border border-gray-300"
        />
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{userData.name}</h1>
          <p className="text-sm text-gray-500">Please update your profile below.</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6">
        <h2 className="text-sm text-gray-500 uppercase tracking-wide mb-2">
          Contact Information
        </h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Email:</span>
          <span className="text-blue-500">{userData.email}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Phone:</span>
          <span className="text-blue-500">{userData.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Address:</span>
          <span className="text-gray-500 text-right">
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </span>
        </div>
      </div>

      {/* Basic Info */}
      <div>
        <h2 className="text-sm text-gray-500 uppercase tracking-wide mb-2">
          Basic Information
        </h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Gender:</span>
          <span className="text-gray-500">{userData.gender}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Birthday:</span>
          <span className="text-gray-500">{userData.birthday}</span>
        </div>
      </div>
    </div>
  );
}
