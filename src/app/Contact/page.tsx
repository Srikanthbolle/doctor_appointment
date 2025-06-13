import Image from "next/image";



export default function Contact() {
  return (
    <div>
    <div className="text-center text-2xl pt-10 text-gray-500">
<p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
    </div>
    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
      <Image className="w-full max-w-[360px]" src="/assets/contact_image.png" width={560} height={560} alt="contact_image"/>
      <div className="flex flex-col justify-center items-start gap-6">
        <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
        <p className="text-gray-500">54709 Willms Station <br/>
Suite 350, Washington, USA</p>
        <p className="text-gray-500">Tel: (415) 555‑0132<br /> Email: greatstackdev@gmail.com</p>
        <p>Careers at PRESCRIPTO</p>
        <p>Learn more about our teams and job openings.</p>
        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
      </div>
    </div>
    </div>
  )
}
