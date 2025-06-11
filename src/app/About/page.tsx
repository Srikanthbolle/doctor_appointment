import Image from "next/image";

export default function About() {
  return (
    <div className="mt-11">
      <h1 className="text-center mb-12">ABOUT <strong>US</strong></h1>
      <div className="flex items-center gap-16">
        <Image
          src="/assets/about_image.png"
          width={438}
          height={445}
          alt="about_image"
        />
        <p className="font-normal text-xl text-[#4B5563] leading-[1.8]">
          Welcome to Prescripto, your trusted partner in managing your
          healthcare needs conveniently and efficiently. At Prescripto, we
          understand the challenges individuals face when it comes to scheduling
          doctor appointments and managing their health records.<br/> Prescripto is
          committed to excellence in healthcare technology. We continuously
          strive to enhance our platform, integrating the latest advancements to
          improve user experience and deliver superior service. Whether you're
          booking your first appointment or managing ongoing care, Prescripto is
          here to support you every step of the way.<br />
          <strong>Our Vision</strong> <br />
          Our vision at Prescripto is to create a seamless healthcare experience
          for every user. We aim to bridge the gap between patients and
          healthcare providers, making it easier for you to access the care you
          need, when you need it.
        </p>
      </div>
      <h3 className="text-center mb-5">Why Choose Us</h3>
      <div className=" flex mx-20">
        
        <div className="flex flex-col gap-10 border border-[#ABABAB] w-full max-w-[533px] h-[274px] px-8 py-8 hover:bg-[#5F6FFF] hover:text-white">
          <h4 className="text-[18px] font-semibold">EFFICIENCY:</h4>
          <p className="font-normal text-[18px] leading-[1.8]">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="flex flex-col gap-10 border border-[#ABABAB] w-full max-w-[533px] h-[274px] px-8 py-8 hover:bg-[#5F6FFF] hover:text-white">
          <h4 className="text-[18px] font-semibold">Convenience:</h4>
          <p className="font-normal text-[18px] leading-[1.8]">Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="flex flex-col gap-10 border border-[#ABABAB] w-full max-w-[533px] h-[274px] px-8 py-8 hover:bg-[#5F6FFF] hover:text-white">
          <h4 className="text-[18px] font-semibold">Personalization:</h4>
          <p className="font-normal text-[18px] leading-[1.8]">Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
}
