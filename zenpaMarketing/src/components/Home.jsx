import React from "react";
import { Link, NavLink } from "react-router-dom";



export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow w-full  relative"
     
        style={{
          backgroundImage:`url(${'https://img.freepik.com/free-photo/front-view-protective-glasses-with-hard-hat-headphones_23-2148773471.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1713744000&semt=ais'})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%',
          backgroundAttachment:'fixed'
        }}
      >
        <div className="container items-center mx-auto justify-center z-20"
          style={{display:'flex',
            flexDirection:'column',
            height:'85vh',
        }}
          >
          
          <h1 className="text-center text-6xl font-bold text-white z-20 ">
            Welcome to Zenpa Marketing
          </h1>
          <p className="text-center text-2xl text-white mt-2 z-20">
            Your one-stop solution for fire safety equipment and services
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      

      </header>


<div className="bg-white shadow-md rounded-lg p-6 font-medium" >
        <div className="w-full flex flex-col items-center">
            <h2 className="text-white w-1/4  bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Our Services
            </h2>
            </div>
            <div className="flex  w-full flex-wrap items-center"
            >
              <div className=" w-1/2  justify-between" style={{marginTop:'3vw'}}>
                <h1 className="text-4xl">Industrial Fire Safety Equipment</h1>
                <p  className="text-gray-600">High-quality equipment to ensure workplace safety</p>
              </div>
              <div className="w-1/2  justify-between" style={{marginTop:'3vw'}}>
                <h1 className="text-4xl">Fire Fighting Project Work</h1>
                <p  className="text-gray-600">Expert project management for fire safety implementations
</p>
              </div>
              <div className="w-1/2  justify-between" style={{marginTop:'3vw'}}>
                <h1 className="text-4xl">Safety Signboard Work</h1>
                <p  className="text-gray-600">Clear and compliant safety signboards for workplaces</p>
              </div>
              <div className="w-1/2 justify-between" style={{marginTop:'3vw'}}>
                <h1 className="text-4xl">All Types of PPE's</h1>
                <p  className="text-gray-600">Personal Protective Equipment for various industries</p>
              </div>
              <div className="w-1/2  justify-between" style={{marginTop:'3vw'}}>
                <h1 className="text-4xl">Fire Safety Training Work</h1>
                <p  className="text-gray-600">Comprehensive training programs for fire safety awareness
</p>
              </div>
              <div className="w-1/2  justify-between" style={{marginTop:'3vw'}}>
                <h1 className="text-4xl">CCTV Camera Installation, AMC, & Service</h1>
                <p  className="text-gray-600">Installation, maintenance, and servicing of CCTV systems</p>
              </div>
              
             
            </div>
          </div>


<div className="bg-white shadow-md rounded-lg p-6 font-medium  " >
        <div className="w-full flex flex-col items-center ">
            <h2 className="text-white w-1/4  bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            Why Choose Us?
            </h2>
            </div>
            <div className="flex  w-full flex-wrap items-center text-left mx-5 overflow-hidden"
            >
              <div className=" w-1/2  justify-between" style={{marginTop:'5vw'}}>
                <h1 className="text-3xl font-semibold">1. Specialists in Industrial Fire Safety <br/>Equipment</h1>
                <p  className="text-gray-600 text-2xl mt-4">Zenpa Marketing offers top industrial fire safety equipment for peace of mind in hazardous workplaces.</p>
              </div>

              <div className="w-1/2  justify-between" style={{marginTop:'5vw'}}>
                <h1 className="text-3xl font-semibold">2. Expert Project Management for Fire Safety Implementations</h1>
                <p  className="text-gray-600 text-2xl mt-4">We provides equipment & comprehensive project management for seamless fire safety implementations
</p>
              </div>
  
            <div className="w-1/2  justify-between" style={{marginTop:'5vw'}}>
                <h1 className="text-3xl font-semibold">3. Efficient Fire NOC & Documentation Services</h1>
                <p  className="text-gray-600 text-2xl mt-4">Zenpa Marketing simplifies fire compliance regulations, making obtaining Fire NOCs and meeting regulatory requirements effortless for your workplace.</p>
              </div>
              
              <div className="w-1/2 justify-between" style={{marginTop:'5vw'}}>
                <h1 className="text-3xl font-semibold">4. Clear and Compliant Safety Signboards</h1>
                <p  className="text-gray-600 text-2xl mt-4">Zenpa Marketing provides clear, compliant safety signboards tailored to your workplace, ensuring optimal safety with appropriate signage for emergencies and hazards.</p>
              </div>            
            </div>
            <h1 className="text-2xl mt-12 text-black">At Zenpa Marketing, we are committed to ensuring the safety and security of your workplace. Choose us for unmatched expertise, top-quality products, and exceptional service that puts your safety first.</h1>
          </div>
        
    </div>
  );
}
