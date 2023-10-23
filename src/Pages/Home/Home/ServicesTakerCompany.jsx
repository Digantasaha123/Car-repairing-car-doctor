import Marquee from "react-fast-marquee";
import c1 from "../../../assets/c1.png"
import c2 from "../../../assets/c2.png"
import c3 from "../../../assets/c3.jpeg"
import c4 from "../../../assets/c4.jpeg"
import c5 from "../../../assets/c5.png"
import c6 from "../../../assets/c1.png"
import c7 from "../../../assets/c7.png"
import c8 from "../../../assets/c8.jpeg"
export default function ServicesTakerCompany() {
  return (
    <div className="mt-10 mb-10 p-4 lg:p-28">
    
    <h1 className="text-3xl lg:text-6xl mb-10 text-center uppercase font-extrabold text-red-600">Service Taking companys</h1>

        <div>
        <Marquee speed={100} className="flex gap-5">
            <div>
                <img className="w-[60px] lg:w-full" src={c1} alt="" />
            </div>
            <div>
                <img className="w-[60px] lg:w-full"  src={c2} alt="" />
            </div>
            <div>
                <img className="w-[60px] lg:w-full"  src={c3} alt="" />
            </div>
            <div>
                <img className="w-[60px] lg:w-full"  src={c4} alt="" />
            </div>
            <div>
                <img className="w-[60px] lg:w-full"  src={c5} alt="" />
            </div>
            <div>
                <img className="w-[60px] lg:w-full"  src={c6} alt="" />
            </div>
            <div>
                <img className="w-[60px] lg:w-full"  src={c7} alt="" />
            </div>
            <div>
                <img className="w-[60px] lg:w-full"  src={c8} alt="" />
            </div>

            
        </Marquee>
        </div>


    </div>
  )
}
