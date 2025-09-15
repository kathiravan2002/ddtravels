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
        style={{ backgroundImage: "url('/assets/images/footerbg3.jpg')" }}
      >
        <img src="/assets/images/footercloud.png" alt="footercloud" className='absolute md:-top-8 lg:-top-14 2xl:-top-24 -top-4 sm:-top-8  z-20 w-full'/>
        <div className="absolute inset-0 bg-[#000000]  opacity-75 lg:opacity-80"></div>
        <div className="relative max-w-[1800px] mx-auto md:py-20 py-10 px-5">
          <div className="flex justify-evenly lg:flex-row flex-col gap-8 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 ">
            {/* Left Column - Logo and Description */}
            <div className="flex flex-col  space-y-4 sm:space-y-6 lg:max-w-[400px]" >
              <Link to="/">
                <h2 className="fondamento-regular text-xl lg:text-2xl text-white"> Divya Desan Travels</h2>
              </Link>

              <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] leading-relaxed sm:leading-[24px] md:leading-[28px] poppins-medium text-justify">
                Divya Desan Travels offers the best tour packages in Chennai and across South India.Affordable and reliable car rentals for local trips and outstation tours, with well-maintained vehicles, professional drivers, and transparent pricing.
              </p>

            </div>

            {/* Middle Column - Quick Links */}
            <div className="flex ">
              <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:items-center">
                <h3 className="text-white fondamento-regular text-xl sm:text-xl md:text-xl lg:text-[24px]">
                  Popular Packages
                </h3>
                <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4">
                  <Link to="/package-details/kanchipuram-one-day-tour-package">
                    <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-medium ">
                      • Kanchipuram 1 Day Tour
                    </p>
                  </Link>
                  <Link to="/package-details/kanchipuram-two-days-tour-package">
                    <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-medium ">
                      • Kanchipuram 2 Days Tour
                    </p>
                  </Link>
                  <Link to="/package-details/tirupati-one-day-tour-package">
                    <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-medium ">
                      • Tirupati 1 Day Tour
                    </p>
                  </Link>
                  <Link to="/package-details/tirupati-two-days-tour-package">
                    <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-medium ">
                      • Tirupati 2 Day Tour
                    </p>
                  </Link>
                  <Link to="/package-details/ahobilam-temple-tour">
                    <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-medium ">
                      • Ahobilam
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Us */}
            <div className="flex max-w-[300px]">
              <div className="flex flex-col space-y-3 sm:space-y-3 md:space-y-3 ">
                <h3 className="text-white fondamento-regular text-xl sm:text-lg md:text-xl lg:text-[24px]">
                  Contact Us
                </h3>
                <div className="flex items-center space-x-3">
                  <MdPhoneInTalk className="w-4 h-4 sm:w-5 sm:h-5 text-white flex shrink-0" />
                  <a
                    href="tel:+918925530559"
                    className="text-white text-sm sm:text-sm md:text-base lg:text-[16px]  poppins-medium"
                  >
                    +91-8925530559
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MdPhoneInTalk className="w-4 h-4 sm:w-5 sm:h-5 text-white flex shrink-0" />
                  <a
                    href="tel:+918925530558"
                    className="text-white text-sm sm:text-sm md:text-base lg:text-[16px]  poppins-medium"
                  >
                    +91-8925530558
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <FaLocationDot className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-white flex shrink-0" />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm sm:text-sm md:text-base lg:text-[16px]  poppins-medium"
                  >
                    No-3/327,Ram Street,Shanmuha Nagar, Pozhichalur, Chennai - 600074
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="px-5">
          <div className="realtive bg-white opacity-85 flex flex-col justify-center items-center gap-5 py-3 max-w-[1200px] mx-auto rounded-[10px] mb-5 px-5 " >
            <h2 className=" md:text-3xl text-xl  fondamento-regular text-center">Follow Us</h2>
            <div className="flex shrink-0 gap-10 md:text-[36px] text-[24px]">
              <a href='https://www.instagram.com/divyadesantravels?utm_source=qr&igsh=cmp4enlhZzBnbG5v' target='_blank' className=""><FaInstagram /></a>
              <p className=""><RiFacebookCircleLine /></p>
              <p className=""><RiTwitterXLine /></p>
              <p className=""><BsYoutube /></p>
            </div>
          </div>
        </div>
        <div className='bg-white h-0.5 w-full relative' ></div>
        <div className="mt-9 relative">

          <p className=" text-center text-white poppins-medium text-sm sm:text-sm md:text-[16px]">
            Copyright ©2025 All rights reserved. Developed by{' '}
            <a href="https://www.arrowthought.com/" target='_blank'> <span className="text-white poppins-medium cursor-pointer hover:underline">Arrow Thought</span></a>
          </p>
        </div>
      </div>


    </>
  )
}

export default Footer