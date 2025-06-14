'use client';
import { useState } from 'react';

export default function MyProfile() {
  const [isEdit, setIsEdit] = useState(false);

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: '/assets/profile_pic.png',
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Church Road, London',
    },
    gender: 'Male',
    birthday: '2024-07-20', // ISO format for input[type="date"]
  });

  const handleChange = (field: string, value: any) => {
    setUserData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (line: 'line1' | 'line2', value: string) => {
    setUserData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [line]: value,
      },
    }));
  };

  const inputClass = 'border border-gray-300 rounded px-2 py-1 text-gray-700';

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-[50px]">
      {/* Header */}
      <div className="flex gap-6">
        <div className="flex flex-col justify-start items-start gap-6 mb-6">
          <img
            src={userData.image}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-lg border border-gray-300"
          />
          <div>
            {isEdit ? (
              <input
                value={userData.name}
                onChange={e => handleChange('name', e.target.value)}
                className={`${inputClass} text-2xl font-semibold`}
              />
            ) : (
              <h1 className="text-2xl font-semibold text-gray-800">
                {userData.name}
              </h1>
            )}
            <p className="text-sm text-gray-500">Please update your profile below.</p>
          </div>
        </div>

        {/* Placeholder SVG */}
        <div>
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="160" height="160" rx="8" fill="#EFEBFF" />
            <circle cx="79.5" cy="79.5" r="43.5" fill="#D6DAFF" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M91.4626 69.5237C91.4626 76.6345 86.3323 82.737 79.5007 82.737C72.6638 82.737 67.5388 76.6345 67.5388 69.5215C67.5388 62.413 71.9514 58.2556 79.5007 58.2556C87.05 58.2556 91.4626 62.4108 91.4626 69.5237ZM58.5063 98.6321C59.5297 99.6514 63.937 102.767 79.5007 102.767C95.0644 102.767 99.469 99.6514 100.495 98.6343C100.59 98.5366 100.661 98.4236 100.702 98.3023C100.743 98.1809 100.754 98.0539 100.734 97.9288C100.5 95.9659 98.3898 87.1882 79.5007 87.1882C60.6116 87.1882 58.501 95.9659 58.2644 97.9288C58.2452 98.054 58.2567 98.1812 58.2983 98.3025C58.3399 98.4238 58.4107 98.5345 58.5063 98.6321Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6">
        <h2 className="text-sm text-gray-500 uppercase tracking-wide mb-2">
          Contact Information
        </h2>

        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Email:</span>
          {isEdit ? (
            <input
              value={userData.email}
              onChange={e => handleChange('email', e.target.value)}
              className={inputClass}
            />
          ) : (
            <span className="text-blue-500">{userData.email}</span>
          )}
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Phone:</span>
          {isEdit ? (
            <input
              value={userData.phone}
              onChange={e => handleChange('phone', e.target.value)}
              className={inputClass}
            />
          ) : (
            <span className="text-blue-500">{userData.phone}</span>
          )}
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Address:</span>
          {isEdit ? (
            <div className="text-right">
              <input
                value={userData.address.line1}
                onChange={e => handleAddressChange('line1', e.target.value)}
                className={`${inputClass} block mb-1`}
              />
              <input
                value={userData.address.line2}
                onChange={e => handleAddressChange('line2', e.target.value)}
                className={`${inputClass} block`}
              />
            </div>
          ) : (
            <span className="text-gray-500 text-right">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </span>
          )}
        </div>
      </div>

      {/* Basic Info */}
      <div>
        <h2 className="text-sm text-gray-500 uppercase tracking-wide mb-2">
          Basic Information
        </h2>

        <div className="flex justify-between mb-2 items-center">
          <span className="text-gray-600">Gender:</span>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={e => handleChange('gender', e.target.value)}
              className={inputClass}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          ) : (
            <span className="text-gray-500">{userData.gender}</span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Birthday:</span>
          {isEdit ? (
            <input
              type="date"
              value={userData.birthday}
              onChange={e => handleChange('birthday', e.target.value)}
              className={inputClass}
            />
          ) : (
            <span className="text-gray-500">{userData.birthday}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2.5 mt-[60px]">
          {!isEdit ? (
            <button
              onClick={() => setIsEdit(true)}
              className="border border-[#5F6FFF] text-[#5F6FFF] hover:text-white hover:bg-[#5F6FFF] rounded-full font-normal text-[18px] leading-11 px-12 py-1"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={() => {
                setIsEdit(false);
                console.log('Saved data:', userData);
              }}
              className="border  hover:text-white hover:bg-[#5F6FFF] border-[#5F6FFF] bg-[#5F6FFF] text-white rounded-full font-normal text-[18px] leading-11 px-12 py-1"
            >
              Save Information
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
