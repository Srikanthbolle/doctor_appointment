import Image from 'next/image'
import React from 'react'

const FooterSection = () => {
  return (
    <div>
  <div className="grid grid-cols-3 gap-10 my-10 mx-[250px] mt-40">

        <div className='flex flex-col gap-4 max-w-[400px]'>
            <Image src="/assets/logo.svg" width={150} height={90} alt='logo_image'/>
            <p className='text-[18px]  font-normal leading-7 max-w-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='text-[#4B5563] font-semibold text-[22px] leading-8'>COMPANY</h3>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className='flex flex-col gap-4'>
            <h3 className='text-[#4B5563] font-semibold text-[22px] leading-8'>GET IN TOUCH</h3>
            <ul className='font-normal text-[18px] leading-7 text-[#4B5563]'>
                <li>+1-212-456-7890</li>
                <li>greatstackdev@gmail.com</li>
            </ul>
        </div>
        
    </div>
    <div className=''>
            <hr />
            <p className='text-[18px] font-normal leading-7 text-center py-[29px]'>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default FooterSection