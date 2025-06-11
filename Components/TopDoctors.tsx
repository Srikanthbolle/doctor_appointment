'use client'
import * as React from "react"; // ✅ Ensures all hooks are available


// import { doctors } from "../public/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { AppContext, useAppContext } from "../context/AppContext";

const TopDoctors = () => {
   const { doctors } = useAppContext();
   
  return (
    <div className="flex gap-4  items-center flex-col py-16 mx-10">
      <h3 className="text-[40px] font-medium text-[#1F2937]">
        Top Doctors to Book
      </h3>
      <p className="font-normal text-[18px] leading-7">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-5 gap-4 pt-5 gap-y-6 px-3">
        {doctors.slice(0, 10).map((item, index) => {
          return (
            <div key={index} className="border border-[#C9D8FF] rounded-md transform transition duration-300 hover:scale-105 hover:shadow-[1px_10px_10px_-10px_rgba(0,0,24,0.5)]">
             <Link href={`/Appointment/${item._id}`} onClick={()=>scrollTo(0,0)}>
              <Image
                src={item.image}
                width={274}
                height={274}
                alt="topdoctors_imagge"
                className="bg-[#EAEFFF] w-full"
              />

              <div className="px-4 py-4">
                <div className="flex items-center gap-2">
                     <p className="w-2 h-2 bg-[#0FBF00] rounded-full"></p> <p className="text-[#0FBF00] font-normal text-[15px]">
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
      <Link href="/Doctors">
      
      <button onClick={() => scrollTo(0, 0)} className="bg-[#EAEFFF] rounded-full font-normal text-[#4B5563] text-[20px] py-4 mt-10 px-12">more</button>
      </Link>
    </div>
  );
};

export default TopDoctors;
