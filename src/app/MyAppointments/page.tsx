'use client';

import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Image from 'next/image';

export default function MyAppointments({userData}:any) {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-6">
      <h1 className="font-medium text-[24px] mb-6">My Appointments</h1>

      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-t border-b border-gray-200 py-6"
          >
            {/* Left: Doctor Image */}
            <div className="flex-shrink-0 bg-[#EAEFFF]">
              <Image
                src={item.image}
                alt="Doctor"
                width={100}
                height={300}
                className="rounded-md object-cover"
              />
            </div>

            {/* Center: Doctor Info */}
            <div className="flex-1 px-6">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600 mb-2">{item.speciality}</p>
              <p className="text-sm text-gray-500 font-medium">Address:</p>
              <p className="text-sm text-gray-500">
                {item.address.line1}
                <br />
                {item.address.line2}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-medium">Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col gap-3">
              <button className="border border-blue-600 hover:bg-[#5F6FFF] hover:text-white text-blue-600 rounded px-4 py-1 transition">
                Pay Online
              </button>
              <button className="border border-gray-400 text-gray-700 rounded px-4 py-1 transition hover:bg-red-500 hover:text-white">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
