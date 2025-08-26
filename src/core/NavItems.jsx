import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaChevronDown, FaUpload } from "react-icons/fa";
import { PiArrowBendUpRightFill } from "react-icons/pi";


const NavItems = ({ ToggleMenu, MenuOpen, isActive, }) => {

  const dropdown1Ref = useRef(null);
  const [dropdown1, setDropdown1] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
        setDropdown1(false);
      }

    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const Overview = [
    { name: "Web Development", path: "/web-development" },
    { name: "Logo Design", path: "/logo-and-brand" },
    { name: "Web Design", path: "/web-design" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Android and Window Applications", path: "/android-development" },
    { name: "Graphic Design", path: "/graphic-design" },

  ];

  return (
    <>
      <nav className={`${MenuOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 mx-auto text-[#6CBF02] poppins-medium bg-white  min-h-80 max-h-screen max-w-full w-full top-0 right-0 absolute z-50`}>

        <div className="p-5">
          <div className="w-44  p-2"></div>
          <div onClick={ToggleMenu} className="absolute right-5 top-5 cursor-pointer"><IoCloseCircleOutline className="text-2xl" /></div>
          <h2 className="fondamento-regular text-xl text-center">DD Travels</h2>

          <ul className="flex flex-col items-start mt-5 *:my-2 *:px-2  overflow-y-auto max-h-[calc(100vh-150px)] ">
            
            <Link to="/" className={` ${isActive == '/' ? 'text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ' '}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);
                }}
                className="duration-300 "
              >
                Home
              </li>
            </Link>


            <Link to="/about-us" className={` ${isActive == '/about-us' ? ' text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                About
              </li>
            </Link>

            {/* <Link to="/web-development" className={` ${isActive == '/web-development' ? 'text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Web Development
              </li>
            </Link> */}
            <Link to="/packages" className={` ${isActive == '/packages' ? 'text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Package
              </li>
            </Link>
            <Link to="/gallery" className={` ${isActive == '/gallery' ? 'text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Gallery
              </li>
            </Link>
            <Link to="/contact-us" className={` ${isActive == '/contact-us' ? 'text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="flex justify-center gap-4 mt-5 ">
            {/* <div className=" flex gap-4  "><Link to="https://www.facebook.com/profile.php?id=61572222224978" target="_blank" rel="noopener noreferrer"> <img src="/images/facebook (2).png" alt="facebook" className="w-[26px] h-[26px]" /> </Link><div className="w-[0.2px] bg-[#6CBF02]  min-h-[0.5vh]"></div></div> */}
            {/* <div className=" flex gap-4 "><Link to="https://www.instagram.com/thirstycrowz_official/?hl=en" target="_blank" rel="noopener noreferrer"><img src="/images/instagram (1).png" alt="instagram" className="w-[26px] h-[26px]" /> </Link><div className="w-[0.2px]  bg-[#6CBF02] min-h-[0.5vh]"></div></div>
          <div className=" flex gap-4 "><Link to="https://x.com/thirstycrowz" target="_blank" rel="noopener noreferrer"><img src="/images/twitter (1).png" alt="twitter" className="w-[26px] h-[26px]" /> </Link><div className="w-[0.2px]  bg-[#6CBF02] min-h-[0.5vh]"></div></div>
          <div className=" flex gap-4 "><Link to="https://wa.me/7418356987" target="_blank" rel="noopener noreferrer"><img src="/images/whatsapp (1).png" alt="whatsapp" className="w-[26px] h-[26px]" /> </Link><div className="w-[0.2px]  bg-[#6CBF02]  min-h-[0.5vh]"></div></div>
          <div className=" flex gap-4 "><Link to="https://www.linkedin.com/company/thirsty-crowz/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin (1).png" alt="linkedin" className="w-[26px] h-[26px]" /> </Link></div> */}
            <div className="flex justify-center items-center">
              <Link to="/contact-us">
                <button  onClick={() => {ToggleMenu(false);}} className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                  <span className="relative z-10 text-[20px] -ml-4"> Enquiry Now </span>
                  <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-23  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                  <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
};

export default NavItems;