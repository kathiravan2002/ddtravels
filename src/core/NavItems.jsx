import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaChevronDown, FaUpload } from "react-icons/fa";


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


            <Link to="/about-us" className={` ${isActive == '/about' ? ' text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
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
            <Link to="/#package" className={` ${isActive == '/career' ? 'text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Package
              </li>
            </Link>
            <Link to="/#gallery" className={` ${isActive == '/portfolio' ? 'text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Gallery
              </li>
            </Link>
            <Link to="/#contact-us" className={` ${isActive == '/contact-us' ? 'text-white bg-[#6CBF02] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
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
        </div>
        </div>
       
      </nav>
    </>
  );
};

export default NavItems;