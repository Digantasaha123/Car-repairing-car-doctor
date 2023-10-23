import { FaAward, FaServicestack, FaShoppingCart, FaUserAltSlash } from "react-icons/fa";
import service from "../../../assets/image-22.jpg"
export default function Speacilist() {
  return (
    <div className="p-10 lg:p-28 bg-black lg:flex gap-16 mb-10 mt-10 rounded">
        <div className="lg:w-1/2 ">
            <h1 className="font-bold uppercase text-red-700 text-2xl">--OUR SEPCILITIES</h1>
            <h1 className="text-3xl lg:text-6xl text-white font-bold mt-2">Why Choose Us</h1>
            <p className="text-white text-xl mt-2 mb-6">
            Bring to the table win-win survival strategies to ensure proactive domi
nation. At the end of the day, going forward, a new normal that has
evolved from generation heading towards.
            </p>


            <div>
                <div className="flex gap-5 items-center">
                    <FaUserAltSlash size={40} className="text-red-500"/>
                    <p className="text-2xl lg:text-4xl p-4 text-white font-bold">Certified Expert Mechanics</p>
                </div>
                <hr className="w-full border-2  mt-3 mb-4" />
                <div className="flex gap-5 items-center">
                    <FaServicestack size={40} className="text-red-500"/>
                    <p className="text-2xl lg:text-4xl p-4 text-white font-bold">Fast And Quality Service</p>
                </div>
                <hr className="w-full border-2 mt-3 mb-4" />
                <div className="flex gap-5 items-center">
                    <FaShoppingCart size={40} className="text-red-500"/>
                    <p className="text-2xl lg:text-4xl p-4 text-white font-bold">Best Prices in Town</p>
                </div>
                <hr className="w-full border-2 mt-3 mb-4" />
                <div className="flex gap-5 items-center">
                    <FaAward size={40} className="text-red-500"/>
                    <p className="text-2xl lg:text-4xl p-4 text-white font-bold">Awarded Workshop</p>
                </div>
                <hr className="w-full border-2 mt-3 mb-4" />
            </div>

        </div>

        <div>
        <h1 className="font-bold uppercase text-red-700 text-2xl">--what we do</h1>
        <h1 className="text-3xl lg:text-6xl text-white font-bold mt-2">Additional Services</h1>

        <div className="flex gap-10 mt-4">
            <div>
                <img className="h-full w-full" src={service} alt="" />
            </div>
            <div className="font-bold lg:text-3xl space-y-4">
                <p className=" text-white">- General Auto Repair & Maintenance</p>
                <p className=" text-white">- Transmission Repair & Replacement</p>
                <p className=" text-white">- Tire Repair and Replacement</p>
                <p className=" text-white">- State Emissions Inspection</p>
                <p className=" text-white">- Break Job / Break Services</p>
                <p className=" text-white">- Electrical Diagnostics</p>
                <p className=" text-white">- Fuel System Repairs</p>
                <p className=" text-white">-Starting and Charging Repair</p>
                <p className=" text-white">- Steering and Suspension Work</p>
                <p className=" text-white">- Emission Repair Facility</p>

            </div>
        </div>

        </div>

    </div>
  )
}
