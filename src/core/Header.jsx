import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronDown, FaInstagram } from 'react-icons/fa';
import { RiFacebookCircleLine, RiTwitterXLine } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { FiPhone } from 'react-icons/fi';
import { PiArrowBendUpRightFill } from 'react-icons/pi';
import NavItems from './NavItems';


function Header() {
    const [MenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [scroll, setScroll] = useState(false);
    const dropdown1Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const location = useLocation();
    const isActive = location.pathname;
    const ToggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }

        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        console.log();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // const handleGmailLink = () => {
    //         window.location.href = "mailto:hr@thirstycrowz.com";
    //       };
    return (
        <header
            className={`fixed top-0 w-full z-50  ${scroll ? ' bg-white' : ''}`}
        >

            <div className={`bg-[#6CBF02] lg:block hidden overflow-y-hidden duration-500 ${scroll ? ' max-h-0 ' : 'max-h-20 py-3'}`}>
                <div className='flex justify-between max-w-[1553px] mx-auto px-2'>
                    <div className='flex gap-5 items-center justify-center'>
                        <h2 className="fondamento-regular text-[20px] text-white">Follow Us</h2>
                        <div className="flex shrink-0 gap-2 text-white text-[24px] ">
                            <p className=""><FaInstagram /></p>
                            <p className=""><RiFacebookCircleLine /></p>
                            <p className=""><RiTwitterXLine /></p>
                            <p className=""><BsYoutube /></p>
                        </div>
                    </div>
                    <div className="flex  gap-5">
                        <p className="port-lligat-sans-regular text-[20px] flex justify-center items-center text-white gap-2"><FiPhone className='flex shrink-0 text-[24px]' />+ 91 1234567890</p>
                        <p className="port-lligat-sans-regular text-[20px] flex justify-center items-center text-white gap-2"><IoIosMail className='flex shrink-0 text-[24px]' />sample@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="">
                <div className={`${scroll ? "bg-[#000000]  " : "bg-[#000000] "}    py-5 `}>
                    <div className="max-w-[1553px] mx-auto px-2 flex justify-evenly">
                        <div className="max-w-full mx-auto w-full relative ">
                            <div className="w-full flex items-center">
                                <div className=" flex items-center z-10 " >
                                    <div className=" " ></div>
                                    <Link to={'/'}>
                                        <div className="" >

                                            <div className="flex justify-center items-center">
                                                {/* <img
                                                src='/images/logo.png'
                                                alt="Website Logo"
                                                className=" lg:min-w-40 lg:w-48 min-w-28 w-28 select-none  "
                                            /> */}
                                                <h2 className="fondamento-regular md:text-[32px] text-[24px] text-[#6CBF02]">DD Travels</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className=" w-full text-white port-lligat-sans-regular   hidden lg:block ">
                            <ul className="flex text-[20px] justify-center items-center  2xl:gap-10 gap-6 h-full  ">
                                <li className="">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="">
                                    <Link to='/about'>About</Link>
                                </li>
                                <li className="">
                                    <Link to='/career'>Package</Link>
                                </li>

                                <li className="">
                                    <Link to='/portfolio'>Gallery</Link>
                                </li>
                                <li className="">
                                    <Link to='/contact-us'>Contact</Link>
                                </li>
                            </ul>
                        </div>


                        <div className="flex justify-end items-center w-full ">
                            <div className="hidden lg:block">
                                <Link>
                                    <button className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                        <span className="relative z-10 text-[20px] -ml-4"> Enquiry Now </span>
                                        <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-23  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                        <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div
                            onClick={ToggleMenu}
                            className={`${scroll ? "" : ""
                                } text-[#6CBF02] inline-flex align-middle cursor-pointer items-center duration-300  select-none lg:hidden `}
                        >
                            {" "}

                            < GiHamburgerMenu
                                className={`${scroll ? " " : ""}   text-3xl  cursor-pointer duration-300  rotate-180 `}
                            />
                        </div>



                    </div>
                </div>
                <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} setDropdown1={setDropdown1} dropdown1={dropdown1} />
                {MenuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="h-screen w-full bg-black/40 absolute top-0"
                    ></div>

                )}

            </div>


        </header>
    )
}

export default Header