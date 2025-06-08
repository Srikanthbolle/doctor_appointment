"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../../../../context/AppContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from 'react'
import { AppContext } from "../../../context/AppContext";



const page= ()=> {
  const [filterDocs, setFilterDocs] = useState([]);
  const { doctors } = useContext(AppContext);
  const router = useRouter();
  console.log("docs", doctors);
  const params = useParams();
  const speciality = params.speciality;
  console.log(speciality, "ss");
  const filterData = () => {
    console.log("sp", speciality);
    if (speciality) {
      setFilterDocs(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDocs(doctors);
    }
  };

  useEffect(() => {
    filterData();
  }, [doctors, speciality]);
  return (
    <div className="mx-32 pt-14">
      <p className="font-normal text-[20px] leading-7 mb-9">
        Browse through the doctors specialist.
      </p>
      <div className="flex gap-9">
        <div className="">
          <ul className="">
            <li
              onClick={() =>
                router.push(
                  speciality === "Generalphysician"
                    ? "/Doctors"
                    : "/Doctors/General physician"
                )
              }
              className="text-[#4B5563] w-[260px] hover:bg-[#E2E5FF] rounded-md font-normal text-[16px] bg-white border border-[#B4B4B4] px-2 py-4 mb-4"
            >
              General physician
            </li>
            <li
              onClick={() =>
                router.push(
                  speciality === "Gynecologist"
                    ? "/Doctors"
                    : "/Doctors/Gynecologist"
                )
              }
              className="text-[#4B5563] w-[260px] hover:bg-[#E2E5FF] rounded-md font-normal text-[16px] bg-white border border-[#B4B4B4] px-2 py-4 mb-4"
            >
              Gynecologist
            </li>
            <li
              onClick={() =>
                router.push(
                  speciality === "Dermatologist"
                    ? "/Doctors"
                    : "/Doctors/Dermatologist"
                )
              }
              className="text-[#4B5563] w-[260px] hover:bg-[#E2E5FF] rounded-md font-normal text-[16px] bg-white border border-[#B4B4B4] px-2 py-4 mb-4"
            >
              Dermatologist
            </li>
            <li
              onClick={() =>
                router.push(
                  speciality === "Pediatricians"
                    ? "/Doctors"
                    : "/Doctors/Pediatricians"
                )
              }
              className="text-[#4B5563] w-[260px] hover:bg-[#E2E5FF] rounded-md font-normal text-[16px] bg-white border border-[#B4B4B4] px-2 py-4 mb-4"
            >
              Pediatricians
            </li>
            <li
              onClick={() =>
                router.push(
                  speciality === "Neurologist"
                    ? "/Doctors"
                    : "/Doctors/Neurologist"
                )
              }
              className="text-[#4B5563] w-[260px] hover:bg-[#E2E5FF] rounded-md font-normal text-[16px] bg-white border border-[#B4B4B4] px-2 py-4 mb-4"
            >
              Neurologist
            </li>
            <li
              onClick={() =>
                router.push(
                  speciality === "Gastroenterologist"
                    ? "/Doctors"
                    : "/Doctors/Gastroenterologist"
                )
              }
              className="text-[#4B5563] w-[260px] hover:bg-[#E2E5FF] rounded-md font-normal text-[16px] bg-white border border-[#B4B4B4] px-2 py-4 mb-4"
            >
              Gastroenterologist
            </li>
          </ul>
        </div>
        <div className="flex gap-6">
          {filterDocs.map((item, index) => {
            console.log("i", item);
            return (
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
                    className="bg-[#EAEFFF]"
                  />

                  <div className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <p className="w-2 h-2 bg-[#0FBF00] rounded-full"></p>{" "}
                      <p className="text-[#0FBF00] font-normal text-[15px]">
                        Available
                      </p>
                    </div>

                    <p className="font-medium text-[22px] text-[#1F2937]">
                      {item.name}
                    </p>
                    <p className="font-normal text-[#4B5563] text-[15px]">
                      {item.speciality}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default page