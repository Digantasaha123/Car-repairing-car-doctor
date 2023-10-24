import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from './Cart';

export default function PhotoGallary() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('info.json').then(res => res.json())
            .then(data => setServices(data.car_repair_records));
    }, [])
    const oil = services.filter((service) => service.title === "Oil");
    const wheel = services.filter((service) => service.title === "Wheel");
    const Engine = services.filter((service) => service.title === "Engine");

    
    
  return (

    <div className='text-center p-4 lg:p-28'>
        <h1 className='text-center text-4xl lg:text-8xl text-red-600 font-bold mb-8'>Photo gallery</h1>
        <Tabs   >
    <TabList>
      <Tab>ALL</Tab>
      <Tab>Wheel & Tire</Tab>
      <Tab>Oil</Tab>
      <Tab>Engine</Tab>
      
    </TabList>

    <TabPanel>
      <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
        {
            services.map(info=> <Cart
            key={info.id}
            info={info}
            >

            </Cart>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
        {
            wheel.map(info=> <Cart
            key={info.id}
            info={info}
            >

            </Cart>)
        }
      </div>
      
    

      
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
        {
            oil.map(info=> <Cart
            key={info.id}
            info={info}
            >

            </Cart>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
        {
            Engine.map(info=> <Cart
            key={info.id}
            info={info}
            >

            </Cart>)
        }
      </div>
    </TabPanel>
    
  </Tabs>
    </div>
  )
}
