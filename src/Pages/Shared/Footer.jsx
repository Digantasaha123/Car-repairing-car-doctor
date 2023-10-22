import logo from "../../assets/logo.png";
import background from "../../assets/background.avif"
import { FaPhoneAlt, FaGlobe,FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaSkype, FaWhatsapp, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';


export default function Footer() {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className="bg-black" style={backgroundStyle}>

<div className="bg-black">
    <div className="grid grid-cols-1 gap-16   md:grid-cols-2 xl:grid-cols-4 p-5 md:p-28 bg-black text-white   ">
  <div className="gap-y-7 mb-10">
   <div className="flex gap-4 mb-5">
       <div>
       <img className="w-20 rounded-sm" src={logo} alt="" />
       </div>
       <div>
        <p className="uppercase text-4xl font-bold">Car <span className="text-red-600">Doctor</span></p>
        <p className="text-sm text-base-500 font-bold">Car repair & Servicing</p>

       </div>
       
   </div>
   <p className="text-3xl mb-5 mt-10  font-bold">203, Envato Labs, Behind Alis Steet, <br /> Melbourne, Australia.</p>

  <div className="space-y-4">
  <div className="flex gap-2 items-center text-2xl">
    <div className="text-orange-700 text-2xl"><FaPhoneAlt/></div>
    <div>+880-1849545637</div>
   </div>
   <div className="flex gap-2 items-center text-2xl">
    <div className="text-orange-700 text-2xl"><FaEnvelope/></div>
    <div>mostakememon123@gmail.com</div>
   </div>
   <div className="flex gap-2 items-center text-2xl">
    <div className="text-orange-700 text-2xl"><FaGlobe/></div>
    <div>www.cardoctor.com</div>
   </div>
  </div>
  </div> 
  <div className="text-slate-400">
    <header className="text-3xl font-bold text-white">Useful Links</header> 
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Locations</h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full">
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Feedback and Reviews</h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Warranty Information</h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Emergency Roadside Assistance:</h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Training</h1>
        <hr className="border-dotted" />
    </div>
    </div>
  </div> 
  <div className="text-slate-400">
    <header className="text-3xl font-bold text-white">Services</header> 
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Oil Change</h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full">
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Engine Service</h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Wheel Alignment</h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Looking Glass</h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">Coloring</h1>
        <hr className="border-dotted" />
    </div>
    </div>
  </div> 
  <div className="text-slate-400">
    <header className="text-3xl font-bold text-white mb-5">Opening Hours</header> 
    <div className="text-slate-300 gap-y-7">
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">
            <div className="flex justify-start gap-10">
                <h1>Mon - Tues :</h1>
                <h1>6.00 am - 10.00 pm
                </h1>
            </div>
            
              </h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">
            <div className="flex  gap-10">
                <h1>Wednes - Thurs :</h1>
                <h1>8.00 am - 6.00 pm
                </h1>
            </div>
            
              </h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">
            <div className="flex gap-32">
                <h1>Fri :      </h1>
                <h1>3.00 pm - 8.00 pm
                </h1>
            </div>
            
              </h1>
        <hr className="border-dotted" />
    </div>
    <div className="w-full mt-5">
        <h1 className="mb-4 mt-5 text-[23px]">
            <div className="flex justify-start gap-32">
                <h1>Sun : </h1>
                <h1>Closed
                </h1>
            </div>
            
              </h1>
        <hr className="border-dotted" />
    </div>
   
    
    </div>
    </div>
  
    

  
</div>



</div>
<div className="text-white p-4 lg:p-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div className="font-bold">

    <h1 className="font-bold text-2xl mb-3">Call Us Now</h1>
    <h1>+61 3 1234 5678</h1>
    <h1>+61 3 1234 5678</h1>

    </div>
    <div>
    <h1 className="font-bold text-2xl mb-3">Connect With Us</h1>
    <div className="flex gap-2">
      <div className="border p-3 hover:bg-slate-700">
      <FaFacebook className="w-8 h-8   text-blue-500" />
      </div>
      <div className="border p-3 hover:bg-slate-700">
      <FaTwitter className="w-8 h-8   text-blue-400" />
      </div>
      <div className="border p-3 hover:bg-slate-700">
      <FaSkype  className="w-8 h-8   text-blue-600" />
      </div>
      <div className="border p-3 hover:bg-slate-700">
      <FaWhatsapp className="w-8 h-8   text-green-500" />
      </div>
      <div className="border p-3 hover:bg-slate-700">
      <FaInstagram className="w-8 h-8   text-pink-500" />
      </div>
      <div className="border p-3 hover:bg-slate-700">
      <FaYoutube  className="w-8 h-8   text-red-600" />
      </div>
      <div className="border p-3 hover:bg-slate-700">
      <FaPinterest  className="w-8 h-8   text-red-400" />
      </div>

      
    </div>
    </div>
    <div className="relative bg-black pb-16">
    <h1 className="font-bold text-2xl mb-3">Subscribe Us</h1>
    <div className="flex absolute">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-[100%] p-3 rounded-l"
      />
      <button className="bg-red-600 right-4 text-white p-2 rounded-r">Subscribe</button>
    </div>
    </div>
</div>

    <div className="text-white lg:flex p-4 justify-between lg:p-8 bg-slate-900">
       <div>
        <h1 className="text-xl font-bold">Copyright ©2023. All Rights Reserved</h1>
       </div>
       <div className="text-2xl font-bold">
        <h1>FAQ || Help Desk || Support</h1>
       </div>
    </div>

    

    </div>
  )
}
