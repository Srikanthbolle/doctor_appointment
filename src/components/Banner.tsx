"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="bg-[#5F6FFF] flex max-h-[455px] relative">
      <div className="pl-[102px] pr-[97px] pt-[92px] pb-[87px]">
        <p className="font-bold text-[52px] leading-24 text-[#FFFFFF] mb-[36px]">
          Book Appointment
        </p>
        <p className="font-bold text-[52px] leading-24 text-[#FFFFFF] mb-[36px]">
          {" "}
          With 100+ Trusted Doctors
        </p>
        <Link href="/Login">
          <button
            onClick={() => scrollTo(0, 0)}
            className="bg-[#FFFFFF] font-normal text-[20px] text-[#4B5563] py-2 px-5 rounded-full hover:scale-105 duration-500 transition-all"
          >
            Createaccount
          </button>
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 pr-[97px]">
        <Image
          src="/assets/appointment_img.png"
          alt="appointment_image"
          width={580}
          height={460}
          className="h-[500px]"
        />
      </div>
    </div>
  );
};

export default Banner;
