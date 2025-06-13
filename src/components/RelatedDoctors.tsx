import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Link from 'next/link'
import Image from 'next/image'

interface reldoc{
    id?:number;
    image?:any;
    name?:string;
    speciality:string;
}

const RelatedDoctors = ({speciality,docId}:any) => {
    const {doctors}=useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])

    useEffect(()=>{
if (doctors.length>0 && speciality){
    const doctorsData = doctors.filter((doc)=>doc.speciality ===speciality && doc._id !== docId)
    setRelDoc(doctorsData)
}
    },[doctors,speciality,docId])
  return (
    <div className="flex justify-center gap-4  items-center flex-col py-16 mx-10">
      <h3 className="text-[40px] font-medium text-[#1F2937]">
        Top Doctors to Book
      </h3>
   <div className="flex flex-wrap justify-center gap-6">
  {relDoc.slice(0, 5).map((item, index) => (
    <div
      key={index}
      className=" border border-[#C9D8FF] rounded-md transform transition duration-300 hover:scale-105 hover:shadow-[1px_10px_10px_-10px_rgba(0,0,24,0.5)]"
    >
      <Link href={`/Appointment/${item._id}`} onClick={()=>scrollTo(0,0)}>
        <Image
          src={item.image}
          width={274}
          height={274}
          alt="topdoctors_image"
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
</div>

      </div>
  )
}

export default RelatedDoctors