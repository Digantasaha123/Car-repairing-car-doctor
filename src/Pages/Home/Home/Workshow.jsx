import person from "../../../assets/person.jpg"
import parts from "../../../assets/parts.jpg"
import { FaArrowRight } from "react-icons/fa";

const Workshow = () => {
    return (
        <div className="mt-4 lg:mt-48 mb-4 lg:mb-48">
              <div className=" p-4 lg:p-28">
            <div className="flex flex-col lg:flex-row lg:gap-5 ">
                <div className='lg:w-1/2 relative '>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-2 lg:space-y-5 sm:mt-16'>
                    <h3 className='text-xl mt-24 uppercase  font-extrabold text-[#b30f0f]'>-- Welcome to our Workshop</h3>
                    <h1 className="text-3xl lg:text-6xl font-bold">Best Car Repairing Workshop <br /> In Melbourne, Australia.</h1>
                    <h1 className="text-xl lg:text-3xl">User generated content in real-time will have multiple touchpoints for offshoring.</h1>

                    <p className="py-2 lg:py-6  lg:text-2xl text-[#737373]">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    <p className='text-[#737373] lg:text-2xl'>
                    Bring to the table win-win survival strategies to ensure proactive domination. collaborative thinking to further the overall value proposition. Organically grow the holistic.


                    </p>
                    <button className="btn btn-outline hover:border-none text-[#FF3811] hover:text-white  hover:bg-[#b30f0f]">Discover More <FaArrowRight/> </button>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Workshow;