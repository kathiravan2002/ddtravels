import { CircleCheckBig } from 'lucide-react'
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Register from './Register';
function About() {

    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once when the section becomes visible
        threshold: 0.3, // Trigger when 30% of the section is visible
    });
    const testimonials = [
        {
            id: 1,
            name: "Ramesh K., Hyderabad",
            title: "Memories for a Lifetime",
            quote: "From planning to execution, everything was smooth.",
            description: "We had the most amazing honeymoon, thanks to DD Travels. They understood exactly what we wanted!. I've used DD Travels multiple times, and they never disappoint. Their team is responsive, knowledgeable, and always ready to help. Travel has never been this easy!",
            image: "/assets/images/About/testimonial.png"
        },
        {
            id: 2,
            name: "Priya S., Mumbai",
            title: "Exceptional Service",
            quote: "DD Travels made our family vacation unforgettable.",
            description: "The attention to detail and personalized service exceeded our expectations. From booking to the final day, everything was perfectly organized. Our kids had the time of their lives, and we created memories that will last forever!",
            image: "/assets/images/About/testimonial.png"
        },
        {
            id: 3,
            name: "Arjun M., Bangalore",
            title: "Professional Excellence",
            quote: "Best travel agency I've ever worked with.",
            description: "Their expertise in planning corporate retreats is unmatched. The team handled all logistics seamlessly, allowing us to focus on our business objectives. Highly recommend DD Travels for both personal and professional travel needs!",
            image: "/assets/images/About/testimonial.png"
        }
    ];
    return (
        <div className='overflow-hidden'>
            <div className=" lg:h-90 h-70  relative bg-cover bg-center lg:mt-20 mt-5" style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">About Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] poppins-medium  text-[#FFC83E] "><span className="text-white">/ </span>About Us</h2>
                    </div>
                </div>
            </div>

            <section className="lg:py-20 py-15 max-w-[1450px] mx-auto px-4">
                <div className="">
                    <div className="mt-2 flex lg:flex-row xl:gap-20 gap-10 flex-col-reverse justify-center items-center ">
                        <div className="space-y-2 flex-70" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            <h2 className="text-[#FFB600] fondamento-regular-italic md:text-[32px] text-[32px]">Get To Know Us</h2>
                            <h2 className="text-[#6CBF02] poppins-medium  text-[24px] ">We are Car Rental Provider for Tours and Travel</h2>
                            <p className="text-[17px] leading-[30px] text-justify poppins-medium opacity-75">Welcome to <span className="text-[#6CBF02]"> Divya Desan Travels</span> your trusted travel companion in Chennai since 2018. We are dedicated to offering safe, reliable, and comfortable travel experiences for families, devotees, corporates, and holiday seekers. Our services include Chennai local trips, temple tours, South India tours, and hill station getaways, covering destinations like Kanchipuram, Mahabalipuram, Tirupati, Sri Kalahasti, Ahobilam, Srisailam, Vellore, and Sholingur.</p>
                            <p className="text-[17px] leading-[30px] text-justify poppins-medium opacity-75">At Divya Desan Travels, we believe every journey should create lasting memories filled with comfort and peace of mind. To ensure a smooth and enjoyable trip, we provide well-maintained Innova Crysta, Swift, Etios, and sedans driven by professional chauffeurs. With our commitment to quality service, we continue to make travel easy, safe, and memorable for every customer we serve.</p>
                            <div className="flex gap-5 xl:flex-row flex-col mt-4">
                                <p className="text-[18px] tracking-wide poppins-medium opacity-75 flex gap-4  items-center"> <img src='/assets/images/About/honesty.png' alt='trusted' className='md:w-16 w-12' />Trusted Travel Partner </p>
                                <p className="text-[18px] tracking-wide poppins-medium opacity-75 flex gap-4  items-center"> <img src='/assets/images/About/travel.png' alt='map' className='md:w-16 w-12' />Local & Outstation Tour Packages </p>
                                <p className="text-[18px] tracking-wide poppins-medium opacity-75 flex gap-4  items-center"> <img src='/assets/images/About/car.png' alt='car' className='md:w-16 w-12 -rotate-y-180' /> Wide Range of Vehicles </p>
                            </div>
                        </div>
                        <div className="max-w-[480px] mx-auto " data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000"><img src="/assets/images/About/about.png" alt="aboutus" className="" /></div>
                    </div>
                </div>
            </section>

            <section className='relative '>
                <div className=" md:h-[65dvh] h-[40dvh]  relative bg-cover bg-center  " style={{ backgroundImage: "url('/assets/images/About/aboutbg.png')" }}>
                    <div className="absolute inset-0 bg-[#000000] opacity-70  "></div>
                    <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-4 px-4">
                        <h2 className="text-[24px] md:text-[28px]  port-lligat-sans-regular text-white ">Love Where Your're Going</h2>
                        <p className="md:text-[32px] text-[26px] poppins-semibold text-white text-center">Explore Your Life - Travel Where You Want with <span className="text-[#FFB600]">DD Travels!</span></p>
                        <img src="/assets/images/About/car2.png" alt="car_icon" className="w-[84px]" />
                    </div>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto relative  ">
                <div ref={ref} className="shadow-[0_0_10px_rgba(0,0,0,0.15)] py-10 z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-5 md:gap-8 lg:gap-25 rounded-[10px] md:absolute sm:-bottom-20  -bottom-90 2xl:ml-10 xl:ml-0 bg-white lg:mt-7 mt-0">
                    <div className="flex flex-col items-center text-center">
                        <p className="text-[#121C27] text-[24px]  md:text-[40px]  poppins-semibold">
                            {inView ? <CountUp start={0} end={1000} duration={3} suffix="+" /> : '0+'}</p>
                        <p className="text-[#121C27] text-[14px]  md:text-[18px]  poppins-bold opacity-75">
                            Happy Travelers
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <p className="text-[#121C27] text-[24px]  md:text-[40px]  poppins-semibold">
                            {inView ? <CountUp start={0} end={7} duration={3} suffix="+" /> : '0+'}</p>
                        <p className="text-[#121C27] text-[14px]  md:text-[18px]  poppins-bold opacity-75">
                            Years of Experience
                        </p>
                    </div>

                    <div className="">
                        <div className="flex flex-col items-center text-center ">
                            <p className="text-[#121C27] text-[24px]  md:text-[40px]  poppins-semibold">
                                {inView ? <CountUp start={0} end={100} duration={3} suffix="%" /> : '0+'} </p>
                            <p className="text-[14px]  md:text-[18px]  poppins-bold opacity-75">
                                Customer Satisfaction Rate
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col items-center text-center">
                            <p className="text-[#121C27] text-[24px]  md:text-[40px]  poppins-semibold">
                                24/7
                            </p>
                            <p className="text-[14px] md:text-[18px]  poppins-bold opacity-75">
                                Support for bookings
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="lg:py-20 py-15 md:mt-15 mt-0 max-w-[1400px] mx-auto px-4">
                <div className="space-y-2">
                    <h2 className="text-center montez-regular text-[#FFC83E] md:text-[45px] text-[32px]">Why Choose Us</h2>
                    <p className="text-center poppins-semibold text-[#6CBF02] md:text-[36px] text-[28px]">Your Trusted Travel Partner</p>
                    <p className="text-center poppins-medium md:text-[24px] text-[20px]">At DD Travels, we make your journey smooth, safe, and memorable.</p>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 mt-10">

                    <div className="grid grid-cols-1 gap-10 ">
                        <div className="bg-[#C8FF9E] px-5 py-2 flex gap-5 lg:flex-row flex-col-reverse rounded-[10px] items-center" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            <div className="space-y-2 flex-70">
                                <h2 className="poppins-semibold text-[20px] lg:text-end text-center">24/7 Support</h2>
                                <p className="poppins-medium text-base text-justify leading-relaxed">Travel with confidence knowing our team is available around the clock. Day or night, we're here to help  - whenever you need us.</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/assets/images/About/support.png" alt="support" className="w-[65px]" />
                            </div>
                        </div>
                        <div className="bg-[#FFE196] px-5 py-2 flex gap-5 lg:flex-row flex-col-reverse items-center rounded-[10px] relative  2xl:right-20" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            <div className="space-y-2 flex-70">
                                <h2 className="poppins-semibold text-[20px] lg:text-end text-center">1000+ Happy Travelers</h2>
                                <p className="poppins-medium text-base text-justify leading-relaxed">Join our growing family of satisfied explorers who trust us for unforgettable travel experiences.</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/assets/images/About/happy.png" alt="support" className="w-[65px]" />
                            </div>
                        </div>
                    </div>


                    <div className="max-w-[457px] mx-auto">
                        <img src="/assets/images/About/trustedimage.png" alt="trustedimage" className="" />
                    </div>


                    <div className="grid grid-cols-1 gap-10 ">
                        <div className="bg-[#FFE196] px-5 py-2 flex gap-5 lg:flex-row flex-col items-center rounded-[10px] " data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                            <div className="flex items-center">
                                <img src="/assets/images/About/experience.png" alt="support" className="w-[65px]" />
                            </div>
                            <div className="space-y-2 flex-70">
                                <h2 className="poppins-semibold text-[20px] lg:text-start text-center">7+ Years of Experience</h2>
                                <p className="poppins-medium text-base text-justify leading-relaxed">With over five years in the travel industry, we’ve mastered the art of planning seamless and memorable trips.</p>
                            </div>
                        </div>
                        <div className="bg-[#C8FF9E] px-5 py-2 flex gap-5 lg:flex-row flex-col items-center rounded-[10px] relative  2xl:-right-20" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                            <div className="flex items-center">
                                <img src="/assets/images/About/satisfication.png" alt="support" className="w-[65px]" />
                            </div>
                            <div className="space-y-2 flex-70">
                                <h2 className="poppins-semibold text-[20px] lg:text-start text-center">100% Customer Satisfaction</h2>
                                <p className="poppins-medium text-base text-justify leading-relaxed">Our priority is your happiness. Every trip is planned with care to ensure a smooth, enjoyable, and stress-free experience from start to finish.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:pb-20 pb-15  max-w-[1450px] mx-auto px-4">
                <div className="space-y-2">
                    <h2 className="text-center montez-regular text-[#FFC83E] md:text-[45px] text-[32px]">Our Testimonials</h2>
                    <p className="text-center poppins-semibold text-[#6CBF02] md:text-[36px] text-[28px]">Reviews From Clients</p>
                    <p className="text-center poppins-medium md:text-[24px] text-[20px]">We believe the best proof of our service is the words of our travelers.</p>
                </div>
                {/* <div className="mt-10 flex items-center gap-5">
                    <div className="max-w-[480px] mx-auto "><img src="/assets/images/About/testimonial.png" alt="aboutus" className="" /></div>
                    <div className="flex-50">
                        <div className="space-y-3 px-4">
                            <h2 className="text-[28px] montez-regular text-[#6CBF02]">Ramesh K., Hyderabad</h2>
                            <p className="text-[18px] poppins-medium">Memories for a Lifetime</p>
                            <p className="flex gap-5 items-center text-[18px] poppins-medium leading-[30px] text-center mt-10 "><img src="/assets/images/About/quotes 1.png" alt="quotes" className='w-[35px]' />From planning to execution, everything was smooth. </p>
                            <p className="text-[18px] poppins-medium leading-[30px] text-justify">We had the most amazing honeymoon, thanks to DD Travels. They understood exactly what we wanted!. I’ve used DD Travels multiple times, and they never disappoint. Their team is responsive, knowledgeable, and always ready to help. Travel has never been this easy!</p>
                        </div>
                        <div className=" flex gap-5 mt-5">
                            <button className='cursor-pointer'><img src="/assets/images/About/leftarrow.png" alt="leftarrow" className="w-[45px]" /></button>
                            <button className='cursor-pointer'><img src="/assets/images/About/leftarrow.png" alt="rightarrow" className="w-[45px] rotate-180" /></button>
                        </div>
                    </div>
                </div> */}
                <div className="mt-10">
                    <div className="flex lg:flex-row flex-col items-center gap-5">
                        <div className="max-w-[480px] mx-auto">
                            <img
                                src="/assets/images/About/testimonial.png"
                                alt="testimonial"
                                className=""
                            />
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.swiper-button-prev-custom',
                                nextEl: '.swiper-button-next-custom',
                            }}
                            // pagination={{
                            //     clickable: true,
                            //     dynamicBullets: true,
                            // }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="testimonial-swiper lg:flex-50 w-full"
                        >
                             {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>

                                    <div className="">
                                        <div className="space-y-3 px-4">
                                            <h2 className="text-[28px] montez-regular text-[#6CBF02]">
                                                {testimonial.name}
                                            </h2>
                                            <p className="text-[18px] poppins-medium">
                                                {testimonial.title}
                                            </p>
                                            <p className="flex gap-5 items-center text-[18px] poppins-medium leading-[30px] text-center mt-10">
                                                <img
                                                    src="/assets/images/About/quotes 1.png"
                                                    alt="quotes"
                                                    className='w-[35px]'
                                                />
                                                {testimonial.quote}
                                            </p>
                                            <p className="text-[18px] poppins-medium leading-[30px] text-justify">
                                                {testimonial.description}
                                            </p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Custom Navigation Buttons */}
                    <div className="flex gap-5 justify-center mt-5">
                        <button className='swiper-button-prev-custom cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out border-none bg-transparent'>
                            <img
                                src="/assets/images/About/leftarrow.png"
                                alt="previous"
                                className="w-[45px]"
                            />
                        </button>
                        <button className='swiper-button-next-custom cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out border-none bg-transparent'>
                            <img
                                src="/assets/images/About/leftarrow.png"
                                alt="next"
                                className="w-[45px] rotate-180"
                            />
                        </button>
                    </div>
                </div>
            </section>

            <Register />
        </div>

    )
}

export default About