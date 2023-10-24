import { useEffect, useState } from "react";
import { FaAward, FaCar, FaPeopleArrows, FaThumbsUp } from "react-icons/fa";
import CountUp from 'react-countup';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css';

export default function GetAService() {
    const carCompanies = [
        'Toyota',
        'Ford',
        'Honda',
        'BMW',
        'Volkswagen',
        'Mercedes-Benz',
        'Nissan',
        'Chevrolet',
        'Audi',
        'Hyundai',
      ];
      const [selectedCarCompany, setSelectedCarCompany] = useState('');

      const handleCarCompanySelect = (event) => {
        setSelectedCarCompany(event.target.value);
      };
      useEffect(() => {
        AOS.init({
          duration: 5000, // Change the duration as per your preference
        });
      }, []);
  return (
    <div className="p-4 lg:p-28 h-full left-0 top-0 lg:bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
        <div className="grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 " data-aos="zoom-out-up">
        <div>
            <p className="text-5xl text-bold text-center text-white bg-blue-600 p-6">Get A Service Now!</p>
            <div>
                <div className="lg:flex mb-2  lg:gap-5  pt-5">
                    <input className="w-full  border-2 border-black p-4" type="text" name="name" placeholder="Your name" id="" />
                    <input className="w-full  mt-2 border-2 border-black p-4" type="email" name="email" placeholder="Your email" id="" />
                </div>
                <div className="lg:flex gap-5 pt-5 pb-5">
                    <input className="w-full mb-2 border-2 border-black p-4" type="text" name="phone" placeholder="Phone" id="" />
                    <input className="w-full border-2 border-black p-4" type="date" name="date" placeholder="Reservation date" id="" />
                </div>

                <div className="">
                <select className="w-full p-6 text-2xl border-2  border-black" id="carCompanySelect" onChange={handleCarCompanySelect} value={selectedCarCompany}>
        <option value="">-Select a Car model</option>
        {carCompanies.map((company, index) => (
          <option key={index} value={company}>
            {company}
          </option>
        ))}
      </select>
                </div>

                <div className="p-4">
                    <p className="text-3xl p-4 font-bold text-slate-600">Message *</p>
                    <textarea className="w-full p-2 text-3xl bg-slate-200 rounded-lg" name="Your message" placeholder="Your message sent to the employer" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="p-6">
                <input className="w-full bg-blue-600 text-center text-white text-2xl font-bold p-4 rounded-lg" type="submit" value="Apply Now" />

            </div>
        </div>

        <div className="md:flex" data-aos="zoom-out-down">
            <div className="flex flex-col">
                <div className="p-12">
                    <FaCar className="p-4" size={100}/>
                    <CountUp className="text-2xl lg:text-5xl font-bold text-red-500 p-4"
                start={0}
                end={14905}
                duration={2}
                separator=","
                useEasing={true}
                useGrouping={true}
                decimal="."
                suffix="+"
              />
                    <p className="text-xl lg:text-3xl  font-bold p-3">VEHICLES SERVICED</p>
                </div>
                <div className="p-12">
                    <FaPeopleArrows className="p-4" size={100}/>
                    <CountUp className="text-2xl lg:text-5xl font-bold text-red-500 p-4"
                start={0}
                end={67200}
                duration={2}
                separator=","
                useEasing={true}
                useGrouping={true}
                decimal="."
                suffix="+"
              />
                    <p className="text-xl lg:text-3xl font-bold p-3">HAPPY CLIENTS</p>
                </div>
                
            </div>
            <div className="">
                <div className="p-12">
                    <FaThumbsUp className="p-4" size={100}/>
                    <CountUp className="text-2xl lg:text-5xl font-bold text-red-500 p-4"
                start={0}
                end={132905}
                duration={2}
                separator=","
                useEasing={true}
                useGrouping={true}
                decimal="."
                suffix="+"
              />
                    <p className="text-xl lg:text-3xl font-bold p-3">PEOPLE LIKES</p>
                </div>
                <div className="p-12">
                    <FaAward className="p-4" size={100}/>
                    <CountUp className="text-2xl lg:text-5xl font-bold text-red-500 p-4"
                start={0}
                end={4322}
                duration={2}
                separator=","
                useEasing={true}
                useGrouping={true}
                decimal="."
                suffix="+"
              />
                    <p className="text-xxl lg:text-3xl font-bold p-3">AWARDS WON</p>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}
