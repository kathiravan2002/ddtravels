import React from 'react'
import { PiArrowBendUpRightFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Homehero() {
    return (
        <div className='overflow-hidden'>
            {/* <section className="relative  h-screen bg-cover overflow-hidden bg-center " style={{ backgroundImage: "url('/assets/images/Hero/BG.png')" }}>
                <div className="absolute bottom-0 z-30"><img src="/assets/images/Hero/Air Port.png" alt="images" className="object-cover object-center h-full" /></div>
                <div className="absolute lg:top-[70%] top-[90%] left-[50%] flight-animation">
                    <img src="/assets/images/Hero/Flight.png" alt="flight" className="lg:w-[300px] sm:w-[200px] w-[100px]" />
                </div>
                <div className="absolute top-[78%] z-40 inset-0 left-[70%]  ">  <img src="/assets/images/Hero/Person 3.svg" alt="images" className="max-w-[110px] " /></div>
                <div className="absolute top-52 inset-0 left-52 slide-animation ">  <img src="/assets/images/Hero/cloud 4.svg" alt="images" className="max-w-[300px] " /></div>
                <div className="absolute top-64 inset-0 left-[75%] slide-animation">  <img src="/assets/images/Hero/Cloud.svg" alt="images" className="max-w-[200px] " /></div>
                <div className="absolute 2xl:top-[85%] xl:top-[85%] lg:top-[87%] md:top-[91%] sm:top-[92%] z-40  top-[96%] inset-0 car-animation  ">
                    <img src="/assets/images/Hero/car.svg" alt="car" className="lg:w-[400px] sm:w-[200px] w-[100px]" />
                </div>

            </section> */}
            <section
                className="relative h-screen bg-cover overflow-hidden bg-center  h-"
                style={{ backgroundImage: "url('/assets/images/Hero/BG.png')" }}
            >
                {/* Airport Image */}
                <div className="absolute bottom-0 z-30">
                    <img
                        src="/assets/images/Hero/Air Port.png"
                        alt="airport"
                        className="object-cover object-center h-full"
                    />
                </div>

                {/* Flight */}
                <div className="absolute lg:top-[70%] top-[90%] left-[40%] flight-animation rotate-6">
                    <img
                        src="/assets/images/Hero/Flight.png"
                        alt="flight"
                        className="lg:w-[300px] sm:w-[200px] w-[100px]"
                    />
                </div>

                {/* Person */}
                <div className="absolute 2xl:top-[79%] xl:top-[82%] lg:top-[86%] md:top-[90%] top-[91%] z-40 inset-0 2xl:left-[70%] left-[75%] person-animation">
                    <img
                        src="/assets/images/Hero/Person 3.svg"
                        alt="person"
                        className="xl:w-[100px] lg:w-[70px] md:w-[50px] w-[40px]"
                    />
                </div>

                {/* Clouds */}
                <div className="absolute top-52 inset-0 left-52 slide-animation">
                    <img
                        src="/assets/images/Hero/cloud 4.svg"
                        alt="cloud"
                        className="max-w-[300px]"
                    />
                </div>
                <div className="absolute top-64 inset-0 left-[75%] slide-animation">
                    <img
                        src="/assets/images/Hero/Cloud.svg"
                        alt="cloud"
                        className="max-w-[200px]"
                    />
                </div>

                {/* Car */}
                <div className="absolute 2xl:top-[85%] xl:top-[85%] lg:top-[87%] md:top-[91%] sm:top-[92%] z-40 top-[96%] inset-0 car-animation">
                    <img
                        src="/assets/images/Hero/car.svg"
                        alt="car"
                        className="lg:w-[300px] sm:w-[200px] w-[100px]"
                    />
                </div>

                <div className="relative flex flex-col gap-4 items-center justfiy-center h-full lg:mt-72 md:mt-96 mt-40 max-w-[1400px] mx-auto px-2">
                    <h2 className=" md:text-5xl text-4xl text-shadow-sm montez-regular text-[#FFC83E] text-center tracking-wide">Welcome to Divya Desan Travels</h2>
                    <p className="md:text-xl text-base  text-shadow-sm poppins-medium md:text-center text-justify text-black md:text-white  leading-[30px]">At Divya Desan Travels, we make your travel easy, safe, and hassle-free with our trusted car rental services. Whether you need a car for local sightseeing, outstation trips, airport transfers, or one-way drops, we offer well-maintained vehicles with professional drivers to ensure a smooth journey.</p>
                   <div className="lg:hidden block"> 
                    <div className="flex justify-center items-center ">
                        <Link to="/contact-us" >
                            <button className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-2 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                <span className="relative z-10 text-[20px] -ml-4"> Enquiry Now </span>
                                <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-23  opacity-0 group-hover:opacity-100 text-[16px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homehero
