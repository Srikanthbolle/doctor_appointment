import Image from "next/image";
import Link from "next/link";
import React from "react";
import { specialityData } from "../public/assets/assets";
const SpecialityMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[120px]" id="speciality">
      <h3 className="font-medium text-[40px] mb-4">Find by Speciality</h3>
      <p className="font-normal text-[18px] leading-7 mb-16">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex gap-10">
        {specialityData.map((item: any, index: number) => {
          return (


            <Link key={index} href={`/Doctors/${item.speciality}`} className="flex flex-col gap-6">
              <Image
                src={item.image}
                width={126}
                height={126}
                alt="doctors_image"
              />
              <p className="font-normal text-[18px]">{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;
