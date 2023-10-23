import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMailBulk, FaMap, FaPhone, FaSearch, FaShoppingCart, FaTwitter } from "react-icons/fa";

import logo from "../../assets/logo.png"

export default function Navber() {
  return (
    <div>
      <div className=" lg:flex items-center justify-around text-white bg-[#FF3811]">
      <div className="flex gap-2 lg:gap-5 font-bold text-2xl p-6">
        <h1>FAQ | </h1>
        <h1>Help Desk |</h1>
        <h1>Login</h1>
      </div>

      <div className="flex gap-8 p-4">
        <FaFacebook size={25}/>
        <FaTwitter size={25}/>
        <FaGoogle size={25}/>
        <FaInstagram size={25} />
        <FaLinkedin size={25}/>
       
       <p> <FaShoppingCart size={25}/> </p>
      
        <FaSearch size={25}/>
      </div>
    </div>

    <div className="lg:flex items-center justify-around p-4  shadow-2xl">
    <div className="flex items-center gap-2">
    <div>
       <img className="w-20 rounded-sm" src={logo} alt="" />
       </div>
       <div>
        <p className="uppercase text-4xl font-bold">Car <span className="text-red-600">Doctor</span></p>
        <p className="text-sm text-base-500 font-bold">Car repair & Servicing</p>

       </div>
    </div>

    
    <div className="lg:flex lg:gap-5">
      <div className="space-y-2">
        <FaMailBulk size={30}/>
        <p className="text-sm lg:text-2xl font-bold">Mail Us Today</p>
        <p className="font-bold text-slate-400">cardoctor@gmail.com</p>
      </div>
      
      <div className="space-y-2">
        <FaMap size={30}/>
        <p className="text-sm lg:text-2xl font-bold">Company Location</p>
        <p className="font-bold text-slate-400">Melbourne, Australia.</p>
      </div>
      
       
      
      <div className="space-y-2">
        <FaPhone size={30}/>
        <p className="text-sm lg:text-2xl font-bold">018-49545637</p>
        <p className="font-bold text-slate-400">call us for more details</p>
      </div>
      
        
      

    </div>





    </div>
    </div>
  )
}
