"use client";

import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [docInfo, setDocInfo] = useState<any>(null);
  const [slotTime,setSlotTime] = useState('')
  const [slotIndex,setSlotIndex] = useState(0)
  const [docSlot,setDocSlot] = useState([])


  const params = useParams();
  const { doctors,currencySymbol } = useContext(AppContext);
  const doctsId = params.doctsId;

  const getAvailableSlots=async()=>{
    setDocSlot([])

    //getting current date
    let today = new Date()
    for (let i=0;i<7;i++){
        // getting date with index
        let currentDate= new Date(today)
        currentDate.setDate(today.getDate()+i)

        //setting end time of the date with index
        let endTime = new Date()
        endTime.setDate(today.getDate()+i)
        endTime.setHours(21,0,0,0)

        //setting hours
        if (today.getDate()===currentDate.getDate()){
            currentDate.setHours(currentDate.getHours()>10?currentDate.getHours()+1:10)
            currentDate.setMinutes(currentDate.getMinutes()>30?30:0)
        }else{
            currentDate.setHours(10)
            currentDate.setMinutes(0)
        }
        let timeSlots
        while (currentDate<endTime) {
            let formattedTime = currentDate.toLocaleTimeString([],{hour:"2-digit",minute:'2-digit'})
            // add slot array 
            timeSlots.push({
                datetime:new Date(currentDate),
                time:formattedTime

            })
            // Increament current time by 30 mints

            currentDate.setMinutes(currentDate.getMinutes() +30)
        }
        setDocSlot(prev=>([...prev,timeSlots]))
    }
  }
useEffect(()=>{
    console.log(docSlot,'ccc')
},[docSlot])
  useEffect(() => {
    const appointmentDocs = () => {
      const doc = doctors.find((docs) => docs._id === doctsId);
      setDocInfo(doc);
      console.log(doc, "Fetched Doctor Info");
    };

    appointmentDocs();
  }, [doctors, doctsId]);

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
          <h3 className="font-medium text-[18px] text-[#1F2937]">About</h3>
          <Image
            src="/assets/info_icon.svg"
            width={17}
            height={17}
            alt="info_image"
          />
          <p className="font-normal text-[18px] leading-[26px] text-[#4B5563]">
            {docInfo.about}
          </p>
          <p className="font-medium text-[22px] text-[#262626]">
            Appointment fee: {currencySymbol}{docInfo.fees}
          </p>
        </div>
      </div>
      <h3 className="text-[40px] font-medium text-[#1F2937] text-center">
        Top Doctors to Book
      </h3>
      <div className="w-full grid grid-cols-4 gap-4 pt-5 gap-y-6 px-3 mx-auto justify-center items-center">
        {doctors.slice(0, 4).map((item, index) => {
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
                  className="bg-[#EAEFFF] w-full"
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
    </>
  );
};

export default Page;
