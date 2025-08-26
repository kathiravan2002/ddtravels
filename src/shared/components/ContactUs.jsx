import React, { useState } from 'react'
import Register from './Register'
import { Link } from 'react-router-dom'
import { PiArrowBendUpRightFill } from 'react-icons/pi'

function ContactUs() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneno: "",
        message: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstname, lastname, email, phoneno, message } = formData;
        const phoneNumber = '+918925530559'; // e.g., +919876543210
        const whatsappMessage = `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone no: ${phoneno}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl);
    };
    return (
        <div className='overflow-hidden'>
            <div className=" lg:h-90 h-70  relative bg-cover bg-center lg:mt-20 mt-5" style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">Contact Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] poppins-medium  text-[#FFC83E] "><span className="text-white">/ </span>Contact Us</h2>
                    </div>
                </div>
            </div>

            <section className="lg:py-20 py-15 max-w-[1450px] mx-auto px-4">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 border-2 border-gray-400 rounded-[20px]">
                    <div className="p-5 lg:border-r-2 border-gray-400">
                        <div className="flex justify-center ">
                            <img src="/assets/images/Contact/phone.png" alt="Phone no" className="w-[65px]" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
                        </div>
                        <div className="space-y-1 mt-2 flex justify-center  flex-col items-center">
                            <p className="poppins-medium md:text-[24px] text-[20px] text-center">Phone Number</p>
                            <p className="poppins-medium md:text-[18px] text-[16px] opacity-75">+91 8925530559</p>
                            <p className="poppins-medium md:text-[18px] text-[16px] opacity-75">+91 8925530558</p>
                        </div>
                    </div>
                    <div className="p-5 lg:border-r-2 border-gray-400">
                        <div className="flex justify-center ">
                            <img src="/assets/images/Contact/location.png" alt="location" className="w-[65px]" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
                        </div>
                        <div className="space-y-1 mt-2 flex justify-center  flex-col items-center">
                            <p className="poppins-medium md:text-[24px] text-[20px] text-center">Address</p>
                            <p className="poppins-medium md:text-[18px] text-[16px] opacity-75 text-center">3/916 , North Street , Chennai</p>
                        </div>
                    </div>
                    <div className="p-5 lg:border-r-2 border-gray-400">
                        <div className="flex justify-center ">
                            <img src="/assets/images/Contact/message.png" alt="message" className="w-[65px]" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
                        </div>
                        <div className="space-y-1 mt-2 flex justify-center  flex-col items-center">
                            <p className="poppins-medium md:text-[24px] text-[20px] text-center">Email Address</p>
                            <p className="poppins-medium md:text-[18px] text-[16px] opacity-75 wrap-anywhere">divyadesantravels23@gmail.com</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="flex justify-center ">
                            <img src="/assets/images/Contact/notification.png" alt="notification" className="w-[65px]" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
                        </div>
                        <div className="space-y-1 mt-2 flex justify-center  flex-col items-center">
                            <p className="poppins-medium md:text-[24px] text-[20px] text-center">Support</p>
                            <p className="poppins-medium md:text-[18px] text-[16px] opacity-75 text-center">24/7 any time support team ready for supports.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:pb-20 pb-15  px-4">
                <div className="flex lg:flex-row flex-col gap-10 max-w-[1450px] mx-auto">
                    <div className="max-w-[600px]  w-fit" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"> <img src="/assets/images/Contact/contactpage.png" alt="images" className="" /></div>
                    <div className="w-full max-w-[700px] mx-auto" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="text-[#FFC83E]  montez-regular text-[24px] text-center lg:text-start">Contact Us</h2>
                        <h2 className="text-[#6CBF02] poppins-semibold text-[28px] text-center lg:text-start">Get in Touch</h2>
                        <form className="mt-5 flex flex-col gap-5  " onSubmit={handleSubmit}>
                            <div className="flex md:gap-10 gap-5 flex-col  md:flex-row ">
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="firstname" className='text-lg fondamento-regular tracking-wide  '>First Name</label>
                                    <input type="text" className='border-2 border-gray-400 rounded-[5px] p-2 poppins-medium' id='firstname' value={formData.firstname} onChange={handleChange} placeholder='Enter Your First Name' required />
                                </div>
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="lastname" className='text-lg fondamento-regular tracking-wide  '>Last Name</label>
                                    <input type="text" className='border-2 border-gray-400 rounded-[5px] p-2 poppins-medium' id='lastname' value={formData.lastname} onChange={handleChange} placeholder='Enter Your Last Name' required/>
                                </div>
                            </div>
                            <div className="flex md:gap-10 gap-5 flex-col  md:flex-row">
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="email" className='text-lg fondamento-regular tracking-wide  '>Email</label>
                                    <input type="email" className='border-2 border-gray-400 rounded-[5px] p-2 poppins-medium' id='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email' required/>
                                </div>
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="phoneno" className='text-lg fondamento-regular tracking-wide  '>Mobile Number</label>
                                    <input type="number" className='border-2 border-gray-400 rounded-[5px] p-2 poppins-medium' id='phoneno' value={formData.phoneno} onChange={handleChange} placeholder='Enter Your Mobile Number' required/>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <label htmlFor="message" className='text-lg fondamento-regular tracking-wide  '>Message</label>
                                <textarea id="message" className='border-2 border-gray-400 rounded-[5px] p-2 poppins-medium h-40 resize-none' value={formData.message} onChange={handleChange} placeholder='Enter Your Message Here' required></textarea>
                            </div>
                            <div className="flex justify-center items-center ">
                                    <button
                                        type="submit"
                                        className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                        <span className="relative z-10 text-[20px] -ml-4">Submit </span>
                                        <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-12  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                        <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Register />
        </div>
    )
}

export default ContactUs