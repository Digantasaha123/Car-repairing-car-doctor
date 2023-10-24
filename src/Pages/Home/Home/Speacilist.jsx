import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAward, FaServicestack, FaShoppingCart, FaUserAltSlash } from 'react-icons/fa';
import service from '../../../assets/image-22.jpg';

const Speacilist = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Set to true for animations to run only once
    });
  }, []);

  return (
    <div className="p-10 lg:p-28 bg-black lg:flex gap-16 mb-10 mt-10 rounded" data-aos="fade-up">
      <div className="lg:w-1/2" data-aos="fade-up">
        <h1 className="font-bold uppercase text-red-700 text-2xl" data-aos="fade-up">
          --OUR SEPCILITIES
        </h1>
        <h1 className="text-3xl lg:text-6xl text-white font-bold mt-2" data-aos="fade-up">
          Why Choose Us
        </h1>
        <p className="text-white text-xl mt-2 mb-6" data-aos="fade-up">
          Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation heading towards.
        </p>

        <div data-aos="fade-up">
          <div className="flex gap-5 items-center" data-aos="fade-up">
            <FaUserAltSlash size={40} className="text-red-500" data-aos="fade-up" />
            <p className="text-2xl lg:text-4xl p-4 text-white font-bold" data-aos="fade-up">
              Certified Expert Mechanics
            </p>
          </div>
          <hr className="w-full border-2 mt-3 mb-4" data-aos="fade-up" />
          <div className="flex gap-5 items-center" data-aos="fade-up">
            <FaServicestack size={40} className="text-red-500" data-aos="fade-up" />
            <p className="text-2xl lg:text-4xl p-4 text-white font-bold" data-aos="fade-up">
              Fast And Quality Service
            </p>
          </div>
          <hr className="w-full border-2 mt-3 mb-4" data-aos="fade-up" />
          <div className="flex gap-5 items-center" data-aos="fade-up">
            <FaShoppingCart size={40} className="text-red-500" data-aos="fade-up" />
            <p className="text-2xl lg:text-4xl p-4 text-white font-bold" data-aos="fade-up">
              Best Prices in Town
            </p>
          </div>
          <hr className="w-full border-2 mt-3 mb-4" data-aos="fade-up" />
          <div className="flex gap-5 items-center" data-aos="fade-up">
            <FaAward size={40} className="text-red-500" data-aos="fade-up" />
            <p className="text-2xl lg:text-4xl p-4 text-white font-bold" data-aos="fade-up">
              Awarded Workshop
            </p>
          </div>
          <hr className="w-full border-2 mt-3 mb-4" data-aos="fade-up" />
        </div>
      </div>

      <div data-aos="fade-up">
        <h1 className="font-bold uppercase text-red-700 text-2xl" data-aos="fade-up">
          --what we do
        </h1>
        <h1 className="text-3xl lg:text-6xl text-white font-bold mt-2" data-aos="fade-up">
          Additional Services
        </h1>

        <div className="flex gap-10 mt-4" data-aos="fade-up">
          <div data-aos="fade-up">
            <img className="h-full w-full" src={service} alt="" data-aos="fade-up" />
          </div>
          <div className="font-bold lg:text-3xl space-y-4" data-aos="fade-up">
            <p className=" text-white" data-aos="fade-up">
              - General Auto Repair & Maintenance
            </p>
            <p className=" text-white" data-aos="fade-up">
              - Transmission Repair & Replacement
            </p>
            <p className=" text-white" data-aos="fade-up">
              - Tire Repair and Replacement
            </p>
            <p className=" text-white" data-aos="fade-up">
              - State Emissions Inspection
            </p>
            <p className=" text-white" data-aos="fade-up">
              - Brake Job / Brake Services
            </p>
            <p className=" text-white" data-aos="fade-up">
              - Electrical Diagnostics
            </p>
            <p className=" text-white" data-aos="fade-up">
              - Fuel System Repairs
            </p>
            <p className=" text-white" data-aos="fade-up">
              - Starting and Charging Repair
            </p>
            <p className=" text-white" data-aos="fade-up">
              - Steering and Suspension Work
            </p>
            <p className=" text-white" data-aos="fade-up">
              - Emission Repair Facility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speacilist;
