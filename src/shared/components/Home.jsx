// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import "swiper/css/effect-coverflow";

// import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// export default function Home() {
//     const [activeSlide, setActiveSlide] = useState(0);

//     const images = [

//         "/assets/images/Home/architect 1.png",
//         "/assets/images/Home/architect 1.png",
//         "/assets/images/Home/architect 1.png",
//         "/assets/images/Home/architect 1.png",
//         "/assets/images/Home/architect 1.png",
//         "/assets/images/Home/architect 1.png",
//     ];

//     const handleSlideChange = (swiper) => {
//         setActiveSlide(swiper.realIndex);
//     };

//     return (
//         <>
//             <section className="mt-20">
//                 <div className="grid grid-cols-1 lg:grid-cols-12">
//                     <div className="col-span-7 relative">
//                         <div>
//                             <img src="/assets/images/Home/lush-green-palm-fronds-tropical-paradise 1.png" alt="image" className="absolute -my-18" />
//                         </div>
//                         <div className="">
//                             <img src="/assets/images/Home/travel.png" alt="image" className="absolute right-32 -bottom-18" />
//                         </div>
//                         <div className="absolute py-32 px-32 space-y-5">
//                             <h1 className="text-2xl font-semibold text-[#FFC83E]">One Day</h1>
//                             <p className="text-4xl text-[#6CBF02] font-semibold">Kanchipuram Tour Package</p>
//                             <button className="px-5 py-2 border-2 border-[#6CBF02] text-[#6CBF02] rounded-4xl">
//                                 Enquiry
//                             </button>
//                         </div>
//                         <div className="md:mt-[30%] mt-[100%] z-50">

//                             <Swiper
//                                 className="overflow-hidden my-10 mb-20 "
//                                 spaceBetween={-10}
//                                 speed={1000}
//                                 slidesPerView={2}
//                                 breakpoints={{
//                                     0: {
//                                         slidesPerView: 1.5,
//                                     },
//                                     1024: {
//                                         slidesPerView: 2,
//                                     },
//                                 }}
//                                 centeredSlides={true}
//                                 navigation
//                                 pagination={{ clickable: true }}
//                                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                                 loop={true}
//                                 modules={[Autoplay]}
//                                   onSlideChange={handleSlideChange}
//                                   onSwiper={(swiper) => {
//                                     setActiveSlide(swiper.realIndex);
//                                 }}
//                             >
//                                 {Array(3)
//                                     .fill([
//                                         '/assets/images/Home/architect 1.png',
//                                         '/assets/images/Home/architect 1.png',
//                                         '/assets/images/Home/architect 1.png'
//                                     ])
//                                     .flat()
//                                     .map((data, index) => (
//                                         <SwiperSlide key={index}
//                                             className=""
//                                         >{({ isActive }) => (
//                                             <div className={`relative  overflow-hidden h-[200px] lg:h-[350px] rounded-[30px]  drop-shadow-[#c1956e] duration-300 ${isActive ? 'drop-shadow-xl drop-shadow-[#ddc49b]' : ''}`}>
//                                                 <img
//                                                     src={data}
//                                                     alt={data}
//                                                     className={`transition-transform w-full h-full object-cover duration-500 mx-auto ${isActive ? ' z-10 shadow-2xl scale-110' : 'scale-80 opacity-70'}`}
//                                                     style={{ borderRadius: '1rem' }}
//                                                 />
//                                             </div>
//                                         )}</SwiperSlide>
//                                     ))}
//                             </Swiper>
//                         </div>
//                     </div>
//                     <div className="col-span-5 ">
//                         <img src={images[activeSlide]} alt="" className="w-full h-screen object-cover bg-center transition-all duration-500 ease-in-out" />
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { PiArrowBendUpRightFill } from 'react-icons/pi';
import { CircleCheckBig } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegClock } from 'react-icons/fa';
import { TbCircleArrowRightFilled } from 'react-icons/tb';
import Swiperfunction from './Swiperfunction';
import Homehero from './Homehero';

export default function Home(props) {

    const { images, goToNextSlide, goToPrevSlide, handleSlideChange, activeSlide, swiperRef, setActiveSlide } = props;

    const popular = [
        { src: "/assets/images/Home/kapaleeswarar.jpg", name: "Kapaleeswarar" },
        { src: "/assets/images/Home/mahapalipuram.jpg", name: "Mahabalipuram" },
        { src: "/assets/images/Home/Sri Kalahasti Temple.jpg", name: "Sri Kalahasti Temple" },
        { src: "/assets/images/Home/Srisailam.jpg", name: "Srisailam" },
        { src: "/assets/images/Home/tirupathi.jpg", name: "Tirupati" },
        { src: "/assets/images/Home/Vellore Golden Temple.jpg", name: "Vellore Golden Temple" },
        { src: "/assets/images/Home/kapaleeswarar.jpg", name: "Kapaleeswarar" },
        { src: "/assets/images/Home/mahapalipuram.jpg", name: "Mahapalipuram" },
    ];



    const multiplier = {
        translate: 0.1,
        rotate: 0.01,
    };

    useEffect(() => {
        function calculateWheel() {
            const slides = document.querySelectorAll(".single");
            slides.forEach((slide) => {
                const rect = slide.getBoundingClientRect();
                const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
                let ty =
                    Math.abs(r) * multiplier.translate -
                    rect.width * multiplier.translate;

                if (ty < 0) ty = 0;

                const transformOrigin = r < 0 ? "left top" : "right top";
                slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate
                    }deg)`;
                slide.style.transformOrigin = transformOrigin;
            });
        }

        function raf() {
            requestAnimationFrame(raf);
            calculateWheel();
        }

        raf();
    }, []);



    const card = [
        {
            image: '/assets/images/Package/oneday1.jpg',
            title: 'Mahabalipuram',
            content1: 'One Day Tour Package',
            time: '6:00 AM to 9:00PM',
            content2: 'Explore rock-cut temples and ancient carvings.',
            link: 'package-details/one-day-1'
        },
        {
            image: '/assets/images/Package/oneday8.jpg',
            title: 'Vellore Golden Temple',
            content1: 'One Day Tour Package',
            time: '6:00 AM to 9:00PM',
            content2: 'Admire magnificent golden temple’s divine beauty.',
            link: 'package-details/one-day-8'

        },
        {
            image: '/assets/images/Package/oneday6.jpg',
            title: 'Ahobilam ',
            content1: 'One Day Tour Package',
            time: '6:00 AM to 9:00PM',
            content2: 'Worship Lord Narasimha amidst scenic hills.',
            link: 'package-details/one-day-6'

        },

    ]


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneno: "",
        message: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phoneno, message } = formData;
        const phoneNumber = '+918925530559'; // e.g., +919876543210
        const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone no: ${phoneno}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl);
    };

    return (
        <>
            <div className="overflow-hidden">
                <Homehero />
                {/* <section className="lg:mt-10 xl:mt-0 mt-0">
                    <div className="flex flex-col lg:flex-row lg:min-h-screen">
                        <div className="w-full lg:w-3/5 bg-contain  2xl:bg-center sm:bg-cover  bg-center bg-no-repeat " style={{ backgroundImage: "url('/assets/images/Home/herohome2.png')" }}>

                            <div className=" lg:pt-32 pt-20  pb-10 lg:pb-20 flex justify-center items-center">
                                <div className="md:space-y-5 space-y-2   md:mt-15 mt-10">
                                    <h1 className="md:text-4xl text-2xl fondamento-regular text-[#FFC83E] text-center">One Day</h1>
                                    <p className="md:text-6xl text-4xl text-[#6CBF02] montez-regular text-center">Kanchipuram Tour Package</p>
                                    <div className="flex justify-center items-center">
                                        <Link to="/contact-us">
                                            <button className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                                <span className="relative z-10 text-[20px] -ml-4"> Enquiry Now </span>
                                                <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-23  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                                <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="  relative lg:block hidden">
                                <Swiperfunction activeSlide={activeSlide} handleSlideChange={handleSlideChange} goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} images={images} swiperRef={swiperRef} setActiveSlide={setActiveSlide}/>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5 lg:block hidden">
                            <img
                                src={images[activeSlide]}
                                alt=""
                                className="w-full h-64 md:h-full md:min-h-screen object-cover object-center transition-all duration-500 ease-in-out rounded-[20px] lg:rounded-[0px]"
                            />
                        </div>
                        <div className="  relative block lg:hidden">
                            <Swiperfunction activeSlide={activeSlide} handleSlideChange={handleSlideChange} goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} images={images} swiperRef={swiperRef} setActiveSlide={setActiveSlide}/>
                        </div>
                    </div>
                </section> */}


                <section className="lg:py-20 py-15 max-w-[1450px] mx-auto px-4">

                    <div className="">
                        <div className="space-y-2">
                            <h2 className="text-center montez-regular text-[#FFC83E] md:text-[45px] text-[32px]">Who We Are</h2>
                            <p className="text-center poppins-semibold text-[#6CBF02] md:text-[36px] text-[28px]">About Us</p>
                        </div>
                        <div className="mt-2 flex lg:flex-row xl:gap-20 gap-10 flex-col-reverse justify-center items-center ">
                            <div className="space-y-2 flex-70" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                <p className="text-[17px] leading-[30px] text-justify poppins-medium opacity-75">Welcome to <span className="text-[#6CBF02]"> Divya Desan Travels</span> your trusted travel companion in Chennai since 2018. We are dedicated to offering safe, reliable, and comfortable travel experiences for families, devotees, corporates, and holiday seekers. Our services include Chennai local trips, temple tours, South India tours, and hill station getaways, covering destinations like Kanchipuram, Mahabalipuram, Tirupati, Sri Kalahasti, Ahobilam, Srisailam, Vellore, and Sholingur.</p>
                                <p className="text-[17px] leading-[30px] text-justify poppins-medium opacity-75">At Divya Desan Travels, we believe every journey should create lasting memories filled with comfort and peace of mind. To ensure a smooth and enjoyable trip, we provide well-maintained Innova Crysta, Swift, Etios, and sedans driven by professional chauffeurs. With our commitment to quality service, we continue to make travel easy, safe, and memorable for every customer we serve.</p>
                                <div className="flex gap-5 xl:flex-row flex-col mt-4">
                                    <p className="text-[18px]  poppins-medium opacity-75 flex gap-2  items-center"> <CircleCheckBig className='flex shrink-0 text-[28px] text-[#6CBF02]' />Trusted Travel Partner </p>
                                    <p className="text-[18px]  poppins-medium opacity-75 flex gap-2  items-center"> <CircleCheckBig className='flex shrink-0 text-[28px] text-[#6CBF02]' />Local & Outstation Tour Packages </p>
                                    <p className="text-[18px]  poppins-medium opacity-75 flex gap-2  items-center"> <CircleCheckBig className='flex shrink-0 text-[28px] text-[#6CBF02]' /> Wide Range of Vehicles </p>

                                </div>
                                <div className="flex md:justify-between flex-col md:flex-row lg:mt-10 mt-5 gap-5">
                                    <p className="md:text-[28px] text-[20px] dancing-script opacity-75 flex gap-5  items-center "><img src="/assets/images/Home/crystavector.jpg" alt="car" className='md:w-[100px] w-[120px]' /> Car Rental Provider </p>
                                    <div className="flex justify-center items-center">
                                        <Link to="/about-us">
                                            <button className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                                <span className="relative z-10 text-[20px] -ml-4"> Read More </span>
                                                <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-20  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                                <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-[480px] mx-auto " data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000"><img src="/assets/images/Home/aboutus2.png" alt="aboutus" className="" /></div>
                        </div>
                    </div>
                </section>


                <section className="lg:pb-20 pb-10 max-w-[1450px] mx-auto px-4 ">
                    <div className="">
                        <div className="space-y-2">
                            <h2 className="text-center montez-regular text-[#FFC83E] md:text-[45px] text-[32px]">Top Destination</h2>
                            <p className="text-center poppins-semibold text-[#6CBF02] md:text-[36px] text-[28px]">Popular Destination</p>
                        </div>
                        <div className="bg-white md:py-16 py-10">
                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={50}
                                centeredSlides={true}
                                loop={true}
                                grabCursor={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                className="overflow-visible pb-12"
                            >
                                {popular.map((img, i) => (
                                    <SwiperSlide key={i} className="!w-[300px] md:!w-[300px]">
                                        <div className="single relative select-none pointer-events-none">
                                            <img
                                                src={img.src}
                                                alt={img.name}
                                                className="w-full h-auto rounded-lg shadow-md select-none pointer-events-none"
                                            />
                                            {/* Caption BELOW the image */}
                                            <p className="text-center mt-3 text-lg poppins-semibold text-black">
                                                {img.name}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Pagination styling */}
                            <style>
                                {`
                                  .swiper-pagination {
                                    position: relative !important;
                                    margin-top: 20px !important;
                                    text-align: center !important;
                                  }
                                  .swiper-pagination-bullet {
                                    background: #4ade80; /* green */
                                    opacity: 0.5;
                                  }
                                  .swiper-pagination-bullet-active {
                                    background: #22c55e; /* darker green */
                                    opacity: 1;
                                  }
                                `}
                            </style>
                        </div>

                    </div>
                </section>


                <section className="lg:pb-20 pb-10 max-w-[1450px] mx-auto px-4 ">
                    <div className="">
                        <div className="space-y-2">
                            <h2 className="text-center montez-regular text-[#FFC83E] md:text-[45px] text-[32px]">Our Packages</h2>
                            <p className="text-center poppins-semibold text-[#6CBF02] md:text-[36px] text-[28px]">Complete Packages</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-0 mt-15 md:mt-0">
                            {card.map((item, index) => (
                                <div key={index}
                                    className="card relative flex justify-center items-start w-[400px] max-w-full h-[300px] mx-auto bg-white mb-13 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] md:mt-20 mt-5"
                                >
                                    <div className="img-box absolute top-5 md:w-[350px] w-[300px] h-[220px] bg-gray-800 rounded-[12px] overflow-hidden">
                                        <img src={item.image} alt='image' className="absolute top-0 left-0 w-full h-full object-cover border-4 border-[#6CBF02]" />
                                    </div>
                                    <div className="content absolute top-[252px] w-full h-[35px] p-0 px-[30px] text-center overflow-hidden ">
                                        <div className='flex gap-2 justify-center '>
                                            <p className="poppins-semibold text-xl text-[#6CBF02] mt-1">{item.title}</p>
                                        </div>
                                        {/* <h2 className="text-xl poppins-bold mt-5 " style={{ color: 'var(--clr)' }}></h2>
                                <p className="text-gray-800 poppins-regular mt-3"></p> */}
                                        <div className="space-y-2 mt-4 flex flex-col items-center ">
                                            <h2 className="poppins-medium text-base opacity-85">{item.content1}</h2>
                                            <p className="poppins-medium text-base opacity-85 flex justify-center items-center gap-2"><FaRegClock className='text-[24px] flex shrink-0 text-[#6CBF02]' />{item.time}</p>
                                            <p className="poppins-medium text-base opacity-85">{item.content2}</p>
                                            <div className="flex gap-5">
                                                <Link to={item.link}>  <div className="flex justify-center items-center "> <button className="port-lligat-sans-regular cursor-pointer text-white px-4 py-2 text-[16px] rounded-4xl bg-[#6CBF02] flex gap-2 items-center justify-center">See Details <PiArrowBendUpRightFill className='flex shrink-0 text-[24px]' /></button></div></Link>
                                                <Link to="/contact-us"> <div className="flex justify-center items-center "> <button className="port-lligat-sans-regular cursor-pointer text-white px-4 py-2 text-[16px] rounded-4xl bg-[#6CBF02] flex gap-2 items-center justify-center">Enquiry  <PiArrowBendUpRightFill className='flex shrink-0 text-[24px]' /></button></div></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="lg:pb-20 pb-10 max-w-[1450px] mx-auto px-4 ">
                    <div className="">
                        <div className="space-y-2">
                            <h2 className="text-center montez-regular text-[#FFC83E] md:text-[45px] text-[32px]">Our Gallery</h2>
                            <p className="text-center poppins-semibold text-[#6CBF02] md:text-[36px] text-[28px]">Moments</p>
                        </div>
                        <div className="mt-10">
                            <div className="hidden lg:block">
                                <div className="lg:grid md:grid md:grid-cols-6  gap-4 space-y-3 lg:space-y-0">
                                    <div className="col-span-2 row-span-2 overflow-hidden rounded-xl" data-aos="fade-down-right" data-aos-delay="300" data-aos-duration="1000">
                                        <img src="/assets/images/Home/architect 1.png" alt="Room 1" loading="lazy" className="rounded-xl w-full h-full object-cover hover:scale-110 transform transition-transform duration-300" />
                                    </div>
                                    <div className="col-span-2 row-span-2 col-start-1 row-start-3 rounded-xl overflow-hidden" data-aos="fade-up-right" data-aos-delay="700" data-aos-duration="1000">
                                        <img src="/assets/images/Home/architect 2.png" alt="Room 2" loading="lazy" className="rounded-xl h-full w-full object-cover hover:scale-110 transform transition-transform duration-300" />
                                    </div>
                                    <div className="col-span-2 row-span-4 col-start-3 row-start-1 rounded-xl overflow-hidden" data-aos="flip-right" data-aos-delay="300" data-aos-duration="1000">
                                        <img src="/assets/images/Home/architect 4.jpg" alt="Room 3" loading="lazy" className="h-full w-full object-cover rounded-xl hover:scale-110 transform transition-transform duration-300" />
                                    </div>
                                    <div className="col-span-2 row-span-2 col-start-5 row-start-1 rounded-xl overflow-hidden" data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000">
                                        <img src="/assets/images/Home/Srisailam.jpg" alt="Room 4" loading="lazy" className="rounded-xl object-cover h-full hover:scale-110 transform transition-transform duration-300" />
                                    </div>
                                    <div className="row-span-2 col-start-5 row-start-3 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                                        <img src="/assets/images/Home/architect 5.jpg" alt="Room 5" loading="lazy" className="h-full object-cover rounded-xl hover:scale-110 transform transition-transform duration-300" />
                                    </div>
                                    <div className="row-span-2 col-start-6 row-start-3 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                                        <img src="/assets/images/Home/architect 3.png" alt="Room 6" loading="lazy" className="h-full object-cover rounded-xl hover:scale-110 transform transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden block">
                                <div className="grid grid-cols-2 gap-4 space-y-3 md:grid-cols-6 md:space-y-0 lg:grid-cols-6 lg:space-y-0 ">
                                    <div className="col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-xl" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                        <img
                                            src="/assets/images/Home/architect 1.png"
                                            alt="Room 1"
                                            loading="lazy"
                                            className="rounded-xl w-full h-64 md:h-full object-cover hover:scale-110 transform transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-3 rounded-xl overflow-hidden" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                        <img
                                            src="/assets/images/Home/architect 2.png"
                                            alt="Room 2"
                                            loading="lazy"
                                            className="rounded-xl w-full h-64 md:h-full object-cover hover:scale-110 transform transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 md:row-span-4 md:col-start-3 md:row-start-1 rounded-xl overflow-hidden" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                        <img
                                            src="/assets/images/Home/architect 4.jpg"
                                            alt="Room 3"
                                            loading="lazy"
                                            className="rounded-xl w-full h-64 md:h-full object-cover hover:scale-110 transform transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-1 rounded-xl overflow-hidden" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                        <img
                                            src="/assets/images/Home/architect 1.png"
                                            alt="Room 4"
                                            loading="lazy"
                                            className="rounded-xl w-full h-64 md:h-full object-cover hover:scale-110 transform transition-transform duration-300 "
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-1 md:row-span-2 md:col-start-5 md:row-start-3 rounded-xl overflow-hidden" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                        <img
                                            src="/assets/images/Home/architect 5.jpg"
                                            alt="Room 5"
                                            loading="lazy"
                                            className="rounded-xl w-full h-64 md:h-full object-cover hover:scale-110 transform transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-1 md:row-span-2 md:col-start-6 md:row-start-3 rounded-xl overflow-hidden" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                        <img
                                            src="/assets/images/Home/architect 3.png"
                                            alt="Room 6"
                                            loading="lazy"
                                            className="rounded-xl w-full h-64 md:h-full object-cover hover:scale-110 transform transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mt-10">
                                <Link to="/gallery">
                                    <button className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                        <span className="relative z-10 text-[20px] -ml-4"> View More </span>
                                        <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-20  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                        <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="lg:pb-20 pb-10 max-w-[1450px] mx-auto px-4 ">
                    <div className="">
                        <div className="space-y-2">
                            <h2 className="text-center montez-regular text-[#FFC83E] md:text-[45px] text-[32px]">Contact</h2>
                            <p className="text-center poppins-semibold text-[#6CBF02] md:text-[36px] text-[28px]">Connect With Us</p>
                        </div>
                        <div className="flex gap-10 lg:flex-row flex-col  mt-10">
                            <div className="bg-cover bg-center flex-40 rounded-[30px]" style={{ backgroundImage: "url('/assets/images/Home/homecontact.png')" }}>
                                <div className="flex  justify-center items-center h-full px-10 py-10 lg:py-0 relative">
                                    <div className="">
                                        <h2 className="text-center montez-regular text-[#FFC83E] text-[32px]" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">Divya Desan Travels</h2>
                                        <div className="" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                            <p className="text-white text-justify poppins-medium text-lg leading-[30px] mt-10">Divya Desan Travels offers the best tour packages in Chennai and across South India.</p>
                                            <p className="text-white text-justify poppins-medium text-lg leading-[30px]">Affordable and reliable car rentals for local trips and outstation tours, with well-maintained vehicles, professional drivers, and transparent pricing.</p>
                                        </div>
                                    </div>
                                    <div className="absolute right-0"><img src="/assets/images/Home/contactarrow.png" alt="arrow" className='w-[35px]' /></div>
                                </div>
                            </div>

                            <form className="space-y-7 flex-40" onSubmit={handleSubmit}>
                                <div className="relative">
                                    <label htmlFor='name' className="absolute -top-3.5 left-3 bg-white px-3 text-lg text-gray-600 poppins-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-[#6CBF02] rounded-lg focus:border-[#6CBF02] focus:outline-none transition-colors poppins-medium"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="phoneno" className="absolute -top-3.5 left-3 bg-white px-3 text-lg text-gray-600 poppins-medium" >
                                        Mobile
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneno"
                                        value={formData.phoneno}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-[#6CBF02] rounded-lg focus:border-[#6CBF02] focus:outline-none transition-colors poppins-medium"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor='email' className="absolute -top-3.5 left-3 bg-white px-3 text-lg text-gray-600 poppins-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-[#6CBF02] rounded-lg focus:border-[#6CBF02] focus:outline-none transition-colors poppins-medium"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor='message' className="absolute -top-3.5 left-3 bg-white px-3 text-lg text-gray-600 poppins-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border-2 border-[#6CBF02] rounded-lg focus:border-[#6CBF02] focus:outline-none transition-colors resize-vertical poppins-medium"
                                        required
                                    />
                                </div>

                                <div className="flex justify-center items-center ">
                                    <button type='submit' className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                        <span className="relative z-10 text-[20px] -ml-4">Submit </span>
                                        <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-12  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                        <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}