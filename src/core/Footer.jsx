import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { RiFacebookCircleLine, RiTwitterXLine } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';

function Footer() {
  return (
    <>
      <div
        className="relative py-6 sm:py-8  bg-cover bg-center "
        style={{ backgroundImage: "url('/assets/images/footerbg.png')" }}
      >
        <div className="absolute md:-top-8 lg:-top-14 2xl:-top-24 -top-4 sm:-top-8  z-20"><img src="/assets/images/footercloud.png" alt="footercloud" /></div>
        <div className="absolute inset-0 bg-[#000000]  opacity-70"></div>
        <div className="relative max-w-[1400px] mx-auto md:py-20 py-10 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-center items-start">
            {/* Left Column - Logo and Description */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <Link to="/">
                <h2 className="fondamento-regular text-xl lg:text-2xl text-white"> Divya Desan Travels</h2>
              </Link>

              <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] leading-relaxed sm:leading-[24px] md:leading-[28px] poppins-medium text-justify">
                Chennai Star Travels provides best tour packages for Chennai and South India.Chennai car rentals with best prices. Compare our tariff with other car service providers. Contact us for more details.
              </p>

            </div>

            {/* Middle Column - Quick Links */}
            <div className="flex lg:justify-end justify-start">
              <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:items-center">
                <h3 className="text-white fondamento-regular text-xl sm:text-xl md:text-xl lg:text-[24px]">
                  Popular Packages
                </h3>
                <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4">
                  <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-medium ">
                    • Tirupati
                  </p>
                  <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-medium ">
                    • Thiruvannamalai
                  </p>
                  <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-medium ">
                    • Chennai Sight Seeing
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Us */}
            <div className="flex lg:justify-end justify-start">
              <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 ">
                <h3 className="text-white fondamento-regular text-xl sm:text-lg md:text-xl lg:text-[24px]">
                  Contact Us
                </h3>
                <div className="flex items-center space-x-3">
                  <MdPhoneInTalk className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <a
                    href="tel:+919486883084"
                    className="text-white text-sm sm:text-sm md:text-base lg:text-[16px]  poppins-medium"
                  >
                    +91-1234567890
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <FaLocationDot className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-white" />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm sm:text-sm md:text-base lg:text-[16px]  poppins-medium"
                  >
                    3/916 , North Street
                    <br />
                    Chennai, Tamil Nadu
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="px-5">
          <div className="realtive bg-white opacity-85 flex flex-col justify-center items-center gap-8 py-3 max-w-[1200px] mx-auto rounded-[10px] mb-5 px-5 " >
            <h2 className=" md:text-3xl text-xl  fondamento-regular text-center">Follow Us</h2>
            <div className="flex shrink-0 gap-10 md:text-[36px] text-[24px]">
              <p className=""><FaInstagram /></p>
              <p className=""><RiFacebookCircleLine /></p>
              <p className=""><RiTwitterXLine /></p>
              <p className=""><BsYoutube /></p>
            </div>
          </div>
        </div>
        <div className='bg-white h-0.5 w-full relative' ></div>
        <div className="mt-9 relative">
          <p className="text-center text-white poppins-medium text-sm sm:text-sm md:text-[16px]">
            Copyright ©2025 All rights reserved. Developed by{' '}
            <span className="text-white poppins-medium ">Arrow Thought</span>
          </p>
        </div>
      </div>


    </>
  )
}

export default Footer