import { FaYoutube } from "react-icons/fa";


export default function Starter() {
  return (
    <div className="p-4 lg:p-28 bg-slate-600 text-white mt-10">
        <div>
            <h1 className="text-4xl font-bold">  Working since 1992 <span className="text-red-600">---</span></h1>
            <h1 className="text-4xl lg:text-8xl font-bold">
            We are leader <br />
in Car Mechanical Work
            </h1>

            <div className="flex gap-5 items-center mt-5">
              <div >
                <FaYoutube size={100} className="text-red-500"/>
              </div>
              <div className="font-bold mb-3 text-xl lg:text-2xl">
                <p>WATCH INTRO VIDEO</p>
                <p>ABOUT US</p>
              </div>

            </div>
        </div>
    </div>
  )
}
