import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#5F6FFF] w-full border-red-600 flex max-h-[700px] mt-[40px]">
      {/* left-side section */}
      <div className="pl-[93px] pt-[190px] pb-[158px]pr-[10px]">
        <h3 className="font-semibold text-[63px] leading-20 text-white mb-5">
          Book Appointment <br />
          With Trusted Doctors
        </h3>
        <div className="flex gap-3 mb-5">
          <Image
            src="/assets/group_profiles.png"
            width={70}
            height={70}
            alt="group_profiles"
          />
          <p className="font-normal text-[18px] leading-7 ">
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <div className="flex gap-2 bg-white rounded-full px-3 py-2 w-44 mb-5 hover:scale-105 transition-all duration-300">
            <Link href="/speciality">
<button>
            Back appointment
            
          </button>
            </Link>
          
          <Image
              src="/assets/arrow_icon.svg"
              width={15}
              height={15}
              alt="arrow_icon"
            />
        </div>
      </div>

      {/* right-side section */}
      <div className="pt-[102px]">
        <Image src="/assets/header_img.png" width={882} height={596} alt="image" className="h-[596px]"/>
      </div>
    </div>
  );
};

export default Header;
