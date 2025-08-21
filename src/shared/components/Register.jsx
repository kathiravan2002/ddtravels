import React from 'react'
import { PiArrowBendUpRightFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='lg:pb-20 pb-15'>
            <div className="bg-center bg-cover  max-w-[1450px] mx-auto rounded-[20px] " style={{ backgroundImage: "url('/assets/images/About/registerbg.png')" }}>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:pl-16 place-items-center px-4 py-10 lg:py-0">
                     <div className="max-w-[450px] mx-auto w-fit block lg:hidden">
                        <img src="/assets/images/About/register.png" alt="contact" className="" />
                    </div>
                    <div className="space-y-2 col-span-2">
                        <h2 className="fondamento-regular md:text-2xl  text-xl">
                            Offer For You!
                        </h2>
                        <p className="poppins-medium md:text-xl text-lg">
                            Book Your Incredible Journey with Our Trusted Services
                        </p>
                        <p className="poppins-medium md:text-lg text-base mt-4 text-justify leading-[30px]">
                            Step into a world of unforgettable experiences with DD Travels. Whether it's a relaxing getaway, an adventure-filled escape, or a cultural exploration, we’re here to make it happen — with expert planning, personalized support, and complete peace of mind. Let’s turn your travel dreams into reality.
                        </p>
                        <div className="flex mt-4">
                            <Link>
                                <button className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                    <span className="relative z-10 text-[20px] -ml-4"> Contact Us </span>
                                    <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-20  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                    <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-[450px] mx-auto w-fit lg:block hidden">
                        <img src="/assets/images/About/register.png" alt="contact" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register