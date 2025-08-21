// import React from 'react'
// import Register from './Register'
// import { Link } from 'react-router-dom'

// function Packagedetails() {
//     return (
//         <div>
//             <div className=" lg:h-90 h-70  relative bg-cover bg-center lg:mt-20 mt-5" style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}>
//                 <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
//                 <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
//                     <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">Package Details</h2>
//                     <div className="flex space-x-2 ">
//                         <Link to="/packages">
//                             <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300 ">Package</h2>
//                         </Link>
//                         <h2 className="md:text-[24px] text-[20px] poppins-medium  text-[#FFC83E] "><span className="text-white">/ </span>Package Details</h2>
//                     </div>
//                 </div>
//             </div>
//             <section className='lg:py-20 py-15 max-w-[1450px] mx-auto px-4'>
//                 <div className="">
//                     <h2 className="text-xl md:text-2xl fondamento-regular text-center text-[#6CBF02] tracking-wide">Chennai Local Temple One Day Tour Package</h2>
//                     <h2 className="text-lg poppins-medium opacity-75 mt-2 text-center">Choose your places and visit within the timeframe: 6.00 AM to 9.00 PM | Contact us for more details</h2>
//                 </div>

//                 <div className="mt-10">
//                     <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center">Kapaleeswarar Temple Park</h2>
//                     <div className="max-w-[700px] mx-auto"><img src="/assets/images/Package/packageimage.jpg" alt="package" className=" rounded-[20px] mt-5" /></div>
//                     <div className="space-y-3 mt-10">
//                         <p className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify">If you are religious and are hoping to visit some beautiful temples, then Chennai should be the place for you. The temples here are an embodiment of the culture, customs and spirituality of the Hindu faith and are known for their rich mythology, traditions and the thousands of devotees who come here every year to catch a glimpse of these Gods and Goddesses .</p>
//                         <p className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify">Chennai Star Travels arranges Pilgrimage package tours that covering the temples in Chennai. Different packages are available at reasonable cost offering wide selection for the tourists. Chennai Star Travels arranges Tours in Chennai which include places of sightseeing and temples at an affordable cost. Embark on a journey that takes you to some of the most attractive destinations of Chennai with popular temples like Kapaleeshwarar Temple, Parthasarathy Temple,..</p>
//                         <p className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify">Our one-day local temple tour package in Chennai is a must for anyone looking for a spiritual experience that goes beyond just sightseeing. It is an opportunity to immerse you in the rich cultural heritage of Chennai and to gain a deeper understanding of the city's spiritual traditions. Our expert guides are well-versed in the history, architecture, and spiritual significance of each temple, providing you with an unforgettable experience that will leave you feeling renewed and rejuvenated. Join us on this journey of spiritual discovery and explore the rich cultural heritage of Chennai.</p>
//                     </div>
//                 </div>

//                 <div className="mt-10">
//                     <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center">Kapaleeswarar Temple Park</h2>
//                    <div className="mt-10 flex flex-col lg:flex-row gap-10">
//                         <div className="max-w-[550px] relative"> <img src="/assets/images/Package/packagecar.png" alt="image" className='rounded-[30px] relative' />
//                         <div className="bg-[#6CBF02] px-5 py-2 w-fit rounded-full absolute top-5 left-5">
//                             <p className="text-2xl poppins-medium text-white"> ₹ 2000</p>
//                         </div>
//                         <div className=" absolute bottom-10 left-5">
//                             <p className="text-2xl poppins-semibold text-white tracking-wide"> Swift Dzire (4+1)</p>
//                         </div>
//                         </div>

//                         <div className="w-full space-y-8 ">
//                             <div className="flex justify-between w-full border-2 border-gray-400 py-2 px-5 rounded-[20px]">
//                                 <div className="">
//                                     <h2 className="poppins-medium md:text-[26px] text-[20px]">Etios (4+1)</h2>
//                                     <p className="poppins-medium md:text-[24px] text-[18px] opacity-75"> ₹2000</p>
//                                 </div>
//                                 <div className="">
//                                     <img src="/assets/images/Package/car.png" alt="car_image" className="md:w-40 w-20" />
//                                 </div>
//                             </div>
//                             <div className="flex justify-between w-full border-2 border-gray-400 py-2 px-5 rounded-[20px]">
//                                 <div className="">
//                                     <h2 className="poppins-medium md:text-[26px] text-[20px]">Swift Dzire(4+1)</h2>
//                                     <p className="poppins-medium md:text-[24px] text-[18px] opacity-75"> ₹2000</p>
//                                 </div>
//                                 <div className="">
//                                     <img src="/assets/images/Package/car.png" alt="car_image" className="md:w-40 w-20" />
//                                 </div>
//                             </div>
//                             <div className="flex justify-between w-full border-2 border-gray-400 py-2 px-5 rounded-[20px]">
//                                 <div className="">
//                                     <h2 className="poppins-medium md:text-[26px] text-[20px]">Xylo (7+1)</h2>
//                                     <p className="poppins-medium md:text-[24px] text-[18px] opacity-75"> ₹2000</p>
//                                 </div>
//                                 <div className="">
//                                     <img src="/assets/images/Package/car.png" alt="car_image" className="md:w-40 w-20" />
//                                 </div>
//                             </div>
//                         </div>
//                    </div>
//                 </div>

//                 <div className="mt-10">
//                     <p className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify">Traveling to a new destination is an adventure that is often filled with excitement, new experiences, and endless possibilities. However, it can also be a stressful experience, particularly if you're unfamiliar with the area and don't have reliable transportation. The last thing you want to do is to get lost, spend hours searching for parking, or miss out on important landmarks or attractions because you're unsure of how to get there.</p>
//                 </div>
//             </section>
//             <Register />
//         </div>
//     )
// }

// export default Packagedetails

import React, { useState } from 'react'
import Register from './Register';
import { Link } from 'react-router-dom';

function Packagedetails() {
    // Package data
    const packageData = {
        title: "Chennai Local Temple One Day Tour Package",
        subtitle: "Choose your places and visit within the timeframe: 6.00 AM to 9.00 PM | Contact us for more details"
    };

    // Temple sections data
    const templeSections = [
        {
            id: 1,
            title: "Kapaleeswarar Temple Park",
            image: "/assets/images/Package/packageimage.jpg",
            descriptions: [
                "If you are religious and are hoping to visit some beautiful temples, then Chennai should be the place for you. The temples here are an embodiment of the culture, customs and spirituality of the Hindu faith and are known for their rich mythology, traditions and the thousands of devotees who come here every year to catch a glimpse of these Gods and Goddesses .",
                "Chennai Star Travels arranges Pilgrimage package tours that covering the temples in Chennai. Different packages are available at reasonable cost offering wide selection for the tourists. Chennai Star Travels arranges Tours in Chennai which include places of sightseeing and temples at an affordable cost. Embark on a journey that takes you to some of the most attractive destinations of Chennai with popular temples like Kapaleeshwarar Temple, Parthasarathy Temple,..",
                "Our one-day local temple tour package in Chennai is a must for anyone looking for a spiritual experience that goes beyond just sightseeing. It is an opportunity to immerse you in the rich cultural heritage of Chennai and to gain a deeper understanding of the city's spiritual traditions. Our expert guides are well-versed in the history, architecture, and spiritual significance of each temple, providing you with an unforgettable experience that will leave you feeling renewed and rejuvenated. Join us on this journey of spiritual discovery and explore the rich cultural heritage of Chennai."
            ]
        }
    ];

    // Car booking section data
    const carBookingSection = {
        title: "Kapaleeswarar Temple Park",
        featuredCar: {
            image: "/assets/images/Package/packagecar.png",
            price: "₹ 2000",
            name: "Swift Dzire (4+1)"
        }
    };

    const carOptions = [
        {
            id: 1,
            name: "Etios (4+1)",
            price: "₹3000",
            image: "/assets/images/Package/car.png",
            featuredImage: "/assets/images/Package/packagecar.png" // Different image for featured view
        },
        {
            id: 2,
            name: "Swift Dzire (4+1)",
            price: "₹2000",
            image: "/assets/images/Package/car.png",
            featuredImage: "/assets/images/Package/packagecar.png"
        },
        {
            id: 3,
            name: "Xylo (7+1)",
            price: "₹4000",
            image: "/assets/images/Package/car.png",
            featuredImage: "/assets/images/Package/packagecar.png"
        }
    ];

    // State for selected car (default to first car)
    const [selectedCar, setSelectedCar] = useState(carOptions[0]);

    // Handle car selection
    const handleCarSelect = (car) => {
        setSelectedCar(car);
    };

    // Additional content data
    const additionalContent = [
        "Traveling to a new destination is an adventure that is often filled with excitement, new experiences, and endless possibilities. However, it can also be a stressful experience, particularly if you're unfamiliar with the area and don't have reliable transportation. The last thing you want to do is to get lost, spend hours searching for parking, or miss out on important landmarks or attractions because you're unsure of how to get there."
    ];

    return (
        <div className="">
            <div className=" lg:h-90 h-70  relative bg-cover bg-center lg:mt-20 mt-5" style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">Package Details</h2>
                    <div className="flex space-x-2 ">
                        <Link to="/packages">
                            <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300 ">Package</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] poppins-medium  text-[#FFC83E] "><span className="text-white">/ </span>Package Details</h2>
                    </div>
                </div>
            </div>
            <section className='lg:py-20 py-15 max-w-[1450px] mx-auto px-4'>
                {/* Package Header */}
                <div className="">
                    <h2 className="text-xl md:text-2xl fondamento-regular text-center text-[#6CBF02] tracking-wide">
                        {packageData.title}
                    </h2>
                    <h2 className="text-lg poppins-medium opacity-75 mt-2 text-center">
                        {packageData.subtitle}
                    </h2>
                </div>

                {/* Temple Sections */}
                {templeSections.map((temple) => (
                    <div key={temple.id} className="mt-10">
                        <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center">
                            {temple.title}
                        </h2>
                        <div className="max-w-[700px] mx-auto">
                            <img
                                src={temple.image}
                                alt="package"
                                className="rounded-[20px] mt-5"
                            />
                        </div>
                        <div className="space-y-3 mt-10">
                            {temple.descriptions.map((description, index) => (
                                <p
                                    key={index}
                                    className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify"
                                >
                                    {description}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="mt-10">
                    <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center">
                        Car Package Details 
                    </h2>
                    <div className="mt-10 flex flex-col lg:flex-row gap-10">
                        {/* Featured/Selected Car */}
                        <div className="max-w-[550px] relative">
                            <img
                                src={selectedCar.featuredImage}
                                alt={`Featured ${selectedCar.name}`}
                                className='rounded-[30px] relative'
                            />
                            <div className="bg-[#6CBF02] px-5 py-2 w-fit rounded-full absolute top-5 left-5">
                                <p className="text-2xl poppins-medium text-white">
                                    {selectedCar.price}
                                </p>
                            </div>
                            <div className="absolute bottom-10 left-5">
                                <p className="text-2xl poppins-semibold text-white tracking-wide">
                                    {selectedCar.name}
                                </p>
                            </div>
                        </div>

                        {/* Car Options List */}
                        <div className="w-full space-y-8">
                            {carOptions.map((car) => (
                                <div
                                    key={car.id}
                                    onClick={() => handleCarSelect(car)}
                                    className={`flex justify-between w-full border-2 py-2 px-5 rounded-[20px] cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedCar.id === car.id
                                            ? 'border-[#6CBF02] bg-[#6CBF02]/10 shadow-md'
                                            : 'border-gray-400 hover:border-[#6CBF02]/50'
                                        }`}
                                >
                                    <div className="">
                                        <h2 className={`poppins-semibold  text-[20px] ${selectedCar.id === car.id ? 'text-[#6CBF02]' : ''
                                            }`}>
                                            {car.name}
                                        </h2>
                                        <p className="poppins-medium text-[18px] opacity-75">
                                            {car.price}
                                        </p>
                                    </div>
                                    <div className="">
                                        <img
                                            src={car.image}
                                            alt={`${car.name}_image`}
                                            className="md:w-40 w-20"
                                        />
                                    </div>
                                    {selectedCar.id === car.id && (
                                        <div className="absolute right-2 top-2">
                                            <div className="w-6 h-6 bg-[#6CBF02] rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Content */}
                <div className="mt-10">
                    {additionalContent.map((content, index) => (
                        <p
                            key={index}
                            className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify"
                        >
                            {content}
                        </p>
                    ))}
                </div>
            </section>
            <Register />
        </div>
    )
}

export default Packagedetails