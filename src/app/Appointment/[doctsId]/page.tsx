"use client";

import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import Image from "next/image";
import Link from "next/link";
import RelatedDoctors from "../../../../Components/RelatedDoctors";

const Page = () => {
  const [docInfo, setDocInfo] = useState<any>(null);
  const [slotTime, setSlotTime] = useState("");
  const [slotIndex, setSlotIndex] = useState(0);
  const [docSlot, setDocSlot] = useState([]);
  const daysOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const params = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const doctsId = params.doctsId;

  const getAvailableSlots = async () => {
    setDocSlot([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlot((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    const appointmentDocs = () => {
      const doc = doctors.find((docs) => docs._id === doctsId);
      setDocInfo(doc);
    };
    appointmentDocs();
  }, [doctors, doctsId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  if (!docInfo) return <div>Loading doctor info...</div>;

  return (
    <>
      <div className="flex gap-7 mx-10 py-9">
        <Image
          src={docInfo.image}
          width={331}
          height={376}
          alt="Doctor image"
          className="bg-[#5F6FFF] rounded-md"
        />
        <div className="py-11 px-10 border border-gray-200 rounded-md">
          <div className="flex gap-2">
            <h1 className="text-[36px] text-[#1F2937] font-medium">
              {docInfo.name}
            </h1>
            <Image
              src="/assets/verified_icon.svg"
              width={25}
              height={25}
              alt="stripe-image"
            />
          </div>

          <p className="text-[#4B5563] font-normal text-[20px]">
            <span>{docInfo.degree} - </span>
            {docInfo.speciality}
          </p>
          <div className="flex gap-2.5">
            <h3 className="font-medium text-[18px] text-[#1F2937]">About</h3>
            <Image
              src="/assets/info_icon.svg"
              width={17}
              height={17}
              alt="info_image"
            />
          </div>

          <p className="font-normal text-[18px] leading-[26px] text-[#4B5563]">
            {docInfo.about}
          </p>
          <p className="font-medium text-[22px] text-[#262626]">
            Appointment fee: {currencySymbol}
            {docInfo.fees}
          </p>
        </div>
      </div>

      <div className="mx-auto flex flex-col gap-6 justify-center items-center">
        <h2 className="text-left font-medium text-[25px] text-[#565656]">
          Booking slots
        </h2>

        <div className="flex justify-center items-center gap-3">
          {docSlot.length &&
            docSlot.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`flex flex-col justify-center items-center rounded-full w-[75px] h-[127px] font-medium text-[#4B5563] ${
                  slotIndex === index
                    ? "bg-[#5F6FFF] text-white"
                    : "border border-gray-200"
                }`}
              >
                <span>{item[0] && daysOfWeeks[item[0].datetime.getDay()]}</span>
                <span>{item[0] && item[0].datetime.getDate()}</span>
              </div>
            ))}
        </div>

        <div className="w-full px-10">
          <div className="relative flex items-center justify-center">
            {/* Left Sticky (optional) */}
            <div className="sticky left-0 z-10 bg-white pr-2">
              {/* Optional left arrow */}
            </div>

            {/* Scrollable Time Slots */}
            <div className="max-w-[600px] mx-auto flex gap-2.5 overflow-x-auto scrollbar-hidden whitespace-nowrap">
              {docSlot[slotIndex]?.map((item: any, index: number) => (
                <div
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`min-w-fit px-6 py-3 rounded-full border cursor-pointer flex-shrink-0 transition-all duration-300 ${
                    slotTime === item.time
                      ? "bg-[#5F6FFF] text-white border-[#5F6FFF]"
                      : "border-[#9CA3AF] text-[#1F2937]"
                  }`}
                >
                  <p>{item.time.toLowerCase()}</p>
                </div>
              ))}
            </div>

            {/* Right Sticky (optional) */}
            <div className="sticky right-0 z-10 bg-white pl-2">
              {/* Optional right arrow */}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[40px] bg-[#5F6FFF] rounded-full py-6 px-28 text-white">
          <button type="submit">Book an appointment</button>
        </div>
      </div>

      {/* <h3 className="text-[40px] font-medium text-[#1F2937] text-center">Top Doctors to Book</h3>
      <div className="w-full grid grid-cols-4 gap-4 pt-5 gap-y-6 px-3 mx-auto justify-center items-center">
        {doctors.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="border border-[#C9D8FF] rounded-md transform transition duration-300 hover:scale-105 hover:shadow-[1px_10px_10px_-10px_rgba(0,0,24,0.5)]"
          >
            <Link href={`/Appointment/${item._id}`}>
              <Image
                src={item.image}
                width={274}
                height={274}
                alt="topdoctors_imagge"
                className="bg-[#EAEFFF] w-full"
              />
              <div className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <p className="w-2 h-2 bg-[#0FBF00] rounded-full"></p>
                  <p className="text-[#0FBF00] font-normal text-[15px]">Available</p>
                </div>
                <p className="font-medium text-[22px] text-[#1F2937]">{item.name}</p>
                <p className="font-normal text-[#4B5563] text-[15px]">{item.speciality}</p>
              </div>
            </Link>
          </div>
        ))}
      </div> */}
      <RelatedDoctors docId={docInfo.docId} speciality={docInfo.speciality} />
    </>
  );
};

export default Page;
