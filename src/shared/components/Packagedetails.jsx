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
//                         <p className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify">Ertiga (7+1) arranges Pilgrimage package tours that covering the temples in Chennai. Different packages are available at reasonable cost offering wide selection for the tourists. Ertiga (7+1) arranges Tours in Chennai which include places of sightseeing and temples at an affordable cost. Embark on a journey that takes you to some of the most attractive destinations of Chennai with popular temples like Kapaleeshwarar Temple, Parthasarathy Temple,..</p>
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
//                                     <h2 className="poppins-medium md:text-[26px] text-[20px]">Ertiga (7+1)</h2>
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

// import React, { useState } from 'react'
// import Register from './Register';
// import { Link } from 'react-router-dom';

// function Packagedetails() {
//     // Package data
//     const packageData = {
//         title: "Chennai Local Temple One Day Tour Package",
//         subtitle: "Choose your places and visit within the timeframe: 6.00 AM to 9.00 PM | Contact us for more details"
//     };

//     // Temple sections data
//     const templeSections = [
//         {
//             id: 1,
//             title: "Kapaleeswarar Temple Park",
//             image: "/assets/images/Package/packageimage.jpg",
//             descriptions: [
//                 "If you are religious and are hoping to visit some beautiful temples, then Chennai should be the place for you. The temples here are an embodiment of the culture, customs and spirituality of the Hindu faith and are known for their rich mythology, traditions and the thousands of devotees who come here every year to catch a glimpse of these Gods and Goddesses .",
//                 "Ertiga (7+1) arranges Pilgrimage package tours that covering the temples in Chennai. Different packages are available at reasonable cost offering wide selection for the tourists. Ertiga (7+1) arranges Tours in Chennai which include places of sightseeing and temples at an affordable cost. Embark on a journey that takes you to some of the most attractive destinations of Chennai with popular temples like Kapaleeshwarar Temple, Parthasarathy Temple,..",
//                 "Our one-day local temple tour package in Chennai is a must for anyone looking for a spiritual experience that goes beyond just sightseeing. It is an opportunity to immerse you in the rich cultural heritage of Chennai and to gain a deeper understanding of the city's spiritual traditions. Our expert guides are well-versed in the history, architecture, and spiritual significance of each temple, providing you with an unforgettable experience that will leave you feeling renewed and rejuvenated. Join us on this journey of spiritual discovery and explore the rich cultural heritage of Chennai."
//             ]
//         }
//     ];

//     // Car booking section data
//     const carBookingSection = {
//         title: "Kapaleeswarar Temple Park",
//         featuredCar: {
//             image: "/assets/images/Package/packagecar.png",
//             price: "₹ 2000",
//             name: "Swift Dzire (4+1)"
//         }
//     };

//     const carOptions = [
//         {
//             id: 1,
//             name: "Etios (4+1)",
//             price: "₹3000",
//             image: "/assets/images/Package/car.png",
//             featuredImage: "/assets/images/Package/packagecar.png" // Different image for featured view
//         },
//         {
//             id: 2,
//             name: "Swift Dzire (4+1)",
//             price: "₹2000",
//             image: "/assets/images/Package/car.png",
//             featuredImage: "/assets/images/Package/packagecar.png"
//         },
//         {
//             id: 3,
//             name: "Ertiga (7+1)",
//             price: "₹4000",
//             image: "/assets/images/Package/car.png",
//             featuredImage: "/assets/images/Package/packagecar.png"
//         }
//     ];

//     // State for selected car (default to first car)
//     const [selectedCar, setSelectedCar] = useState(carOptions[0]);

//     // Handle car selection
//     const handleCarSelect = (car) => {
//         setSelectedCar(car);
//     };

//     // Additional content data
//     const additionalContent = [
//         "Traveling to a new destination is an adventure that is often filled with excitement, new experiences, and endless possibilities. However, it can also be a stressful experience, particularly if you're unfamiliar with the area and don't have reliable transportation. The last thing you want to do is to get lost, spend hours searching for parking, or miss out on important landmarks or attractions because you're unsure of how to get there."
//     ];

//     return (
//         <div className="">
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
//                 {/* Package Header */}
//                 <div className="">
//                     <h2 className="text-xl md:text-2xl fondamento-regular text-center text-[#6CBF02] tracking-wide">
//                         {packageData.title}
//                     </h2>
//                     <h2 className="text-lg poppins-medium opacity-75 mt-2 text-center">
//                         {packageData.subtitle}
//                     </h2>
//                 </div>

//                 {/* Temple Sections */}
//                 {templeSections.map((temple) => (
//                     <div key={temple.id} className="mt-10">
//                         <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center">
//                             {temple.title}
//                         </h2>
//                         <div className="max-w-[700px] mx-auto">
//                             <img
//                                 src={temple.image}
//                                 alt="package"
//                                 className="rounded-[20px] mt-5"
//                             />
//                         </div>
//                         <div className="space-y-3 mt-10">
//                             {temple.descriptions.map((description, index) => (
//                                 <p
//                                     key={index}
//                                     className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify"
//                                 >
//                                     {description}
//                                 </p>
//                             ))}
//                         </div>
//                     </div>
//                 ))}

//                 <div className="mt-10">
//                     <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center">
//                         Car Package Details 
//                     </h2>
//                     <div className="mt-10 flex flex-col lg:flex-row gap-10">
//                         {/* Featured/Selected Car */}
//                         <div className="max-w-[550px] relative">
//                             <img
//                                 src={selectedCar.featuredImage}
//                                 alt={`Featured ${selectedCar.name}`}
//                                 className='rounded-[30px] relative'
//                             />
//                             <div className="bg-[#6CBF02] px-5 py-2 w-fit rounded-full absolute top-5 left-5">
//                                 <p className="text-2xl poppins-medium text-white">
//                                     {selectedCar.price}
//                                 </p>
//                             </div>
//                             <div className="absolute bottom-10 left-5">
//                                 <p className="text-2xl poppins-semibold text-white tracking-wide">
//                                     {selectedCar.name}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Car Options List */}
//                         <div className="w-full space-y-8">
//                             {carOptions.map((car) => (
//                                 <div
//                                     key={car.id}
//                                     onClick={() => handleCarSelect(car)}
//                                     className={`flex justify-between w-full border-2 py-2 px-5 rounded-[20px] cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedCar.id === car.id
//                                             ? 'border-[#6CBF02] bg-[#6CBF02]/10 shadow-md'
//                                             : 'border-gray-400 hover:border-[#6CBF02]/50'
//                                         }`}
//                                 >
//                                     <div className="">
//                                         <h2 className={`poppins-semibold  text-[20px] ${selectedCar.id === car.id ? 'text-[#6CBF02]' : ''
//                                             }`}>
//                                             {car.name}
//                                         </h2>
//                                         <p className="poppins-medium text-[18px] opacity-75">
//                                             {car.price}
//                                         </p>
//                                     </div>
//                                     <div className="">
//                                         <img
//                                             src={car.image}
//                                             alt={`${car.name}_image`}
//                                             className="md:w-40 w-20"
//                                         />
//                                     </div>
//                                     {selectedCar.id === car.id && (
//                                         <div className="absolute right-2 top-2">
//                                             <div className="w-6 h-6 bg-[#6CBF02] rounded-full flex items-center justify-center">
//                                                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Additional Content */}
//                 <div className="mt-10">
//                     {additionalContent.map((content, index) => (
//                         <p
//                             key={index}
//                             className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify"
//                         >
//                             {content}
//                         </p>
//                     ))}
//                 </div>
//             </section>
//             <Register />
//         </div>
//     )
// }

// export default Packagedetails


// import React, { useState } from 'react';
// import Register from './Register';
// import { Link } from 'react-router-dom';

// function Packagedetails() {
//   // All data merged into a single object
//   const packageDetails = {
//     packageData: {
//       title: "Chennai Local Temple One Day Tour Package",
//       subtitle: "Choose your places and visit within the timeframe: 6.00 AM to 9.00 PM | Contact us for more details",
//     },
//     templeSection: {
//       id: 1,
//       title: "Kapaleeswarar Temple Park",
//       image: "/assets/images/Package/packageimage.jpg",
//       description: {
//         1: "If you are religious and are hoping to visit some beautiful temples, then Chennai should be the place for you. The temples here are an embodiment of the culture, customs and spirituality of the Hindu faith and are known for their rich mythology, traditions and the thousands of devotees who come here every year to catch a glimpse of these Gods and Goddesses.",
//         2: "Ertiga (7+1) arranges Pilgrimage package tours that covering the temples in Chennai. Different packages are available at reasonable cost offering wide selection for the tourists. Ertiga (7+1) arranges Tours in Chennai which include places of sightseeing and temples at an affordable cost. Embark on a journey that takes you to some of the most attractive destinations of Chennai with popular temples like Kapaleeshwarar Temple, Parthasarathy Temple,..",
//         3: "Our one-day local temple tour package in Chennai is a must for anyone looking for a spiritual experience that goes beyond just sightseeing. It is an opportunity to immerse you in the rich cultural heritage of Chennai and to gain a deeper understanding of the city's spiritual traditions. Our expert guides are well-versed in the history, architecture, and spiritual significance of each temple, providing you with an unforgettable experience that will leave you feeling renewed and rejuvenated. Join us on this journey of spiritual discovery and explore the rich cultural heritage of Chennai.",
//       },
//     },
//     carBookingSection: {
//       title: "Kapaleeswarar Temple Park",
//       featuredCar: {
//         image: "/assets/images/Package/packagecar.png",
//         price: "₹ 2000",
//         name: "Swift Dzire (4+1)",
//       },
//     },
//     carOptions: {
//       1: {
//         id: 1,
//         name: "Etios (4+1)",
//         price: "₹3000",
//         image: "/assets/images/Package/car.png",
//         featuredImage: "/assets/images/Package/packagecar.png",
//       },
//       2: {
//         id: 2,
//         name: "Swift Dzire (4+1)",
//         price: "₹2000",
//         image: "/assets/images/Package/car.png",
//         featuredImage: "/assets/images/Package/packagecar.png",
//       },
//       3: {
//         id: 3,
//         name: "Ertiga (7+1)",
//         price: "₹4000",
//         image: "/assets/images/Package/car.png",
//         featuredImage: "/assets/images/Package/packagecar.png",
//       },
//     },
//     additionalContent: {
//       content:
//         "Traveling to a new destination is an adventure that is often filled with excitement, new experiences, and endless possibilities. However, it can also be a stressful experience, particularly if you're unfamiliar with the area and don't have reliable transportation. The last thing you want to do is to get lost, spend hours searching for parking, or miss out on important landmarks or attractions because you're unsure of how to get there.",
//     },
//   };

//   // State for selected car (default to first car)
//   const [selectedCar, setSelectedCar] = useState(packageDetails.carOptions[1]);

//   // Handle car selection
//   const handleCarSelect = (car) => {
//     setSelectedCar(car);
//   };

//   return (
//     <div className="">
//       <div
//         className="lg:h-90 h-70 relative bg-cover bg-center lg:mt-20 mt-5"
//         style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}
//       >
//         <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70"></div>
//         <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
//           <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">
//             Package Details
//           </h2>
//           <div className="flex space-x-2">
//             <Link to="/packages">
//               <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300">
//                 Package
//               </h2>
//             </Link>
//             <h2 className="md:text-[24px] text-[20px] poppins-medium text-[#FFC83E]">
//               <span className="text-white">/ </span>Package Details
//             </h2>
//           </div>
//         </div>
//       </div>
//       <section className="lg:py-20 py-15 max-w-[1450px] mx-auto px-4">
//         {/* Package Header */}
//         <div className="">
//           <h2 className="text-xl md:text-2xl fondamento-regular text-center text-[#6CBF02] tracking-wide">
//             {packageDetails.packageData.title}
//           </h2>
//           <h2 className="text-lg poppins-medium opacity-75 mt-2 text-center">
//             {packageDetails.packageData.subtitle}
//           </h2>
//         </div>

//         {/* Temple Section */}
//         <div className="mt-10">
//           <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center">
//             {packageDetails.templeSection.title}
//           </h2>
//           <div className="max-w-[700px] mx-auto">
//             <img
//               src={packageDetails.templeSection.image}
//               alt="package"
//               className="rounded-[20px] mt-5"
//             />
//           </div>
//           <div className="space-y-3 mt-10">
//             {Object.values(packageDetails.templeSection.description).map((description, index) => (
//               <p
//                 key={index}
//                 className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify"
//               >
//                 {description}
//               </p>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10">
//           <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center">
//             Car Package Details
//           </h2>
//           <div className="mt-10 flex flex-col lg:flex-row gap-10">
//             {/* Featured/Selected Car */}
//             <div className="max-w-[550px] relative">
//               <img
//                 src={selectedCar.featuredImage}
//                 alt={`Featured ${selectedCar.name}`}
//                 className="rounded-[30px] relative"
//               />
//               <div className="bg-[#6CBF02] px-5 py-2 w-fit rounded-full absolute top-5 left-5">
//                 <p className="text-2xl poppins-medium text-white">{selectedCar.price}</p>
//               </div>
//               <div className="absolute bottom-10 left-5">
//                 <p className="text-2xl poppins-semibold text-white tracking-wide">
//                   {selectedCar.name}
//                 </p>
//               </div>
//             </div>

//             {/* Car Options List */}
//             <div className="w-full space-y-8">
//               {Object.values(packageDetails.carOptions).map((car) => (
//                 <div
//                   key={car.id}
//                   onClick={() => handleCarSelect(car)}
//                   className={`flex justify-between w-full border-2 py-2 px-5 rounded-[20px] cursor-pointer transition-all duration-300 hover:shadow-lg ${
//                     selectedCar.id === car.id
//                       ? 'border-[#6CBF02] bg-[#6CBF02]/10 shadow-md'
//                       : 'border-gray-400 hover:border-[#6CBF02]/50'
//                   }`}
//                 >
//                   <div className="">
//                     <h2
//                       className={`poppins-semibold text-[20px] ${
//                         selectedCar.id === car.id ? 'text-[#6CBF02]' : ''
//                       }`}
//                     >
//                       {car.name}
//                     </h2>
//                     <p className="poppins-medium text-[18px] opacity-75">{car.price}</p>
//                   </div>
//                   <div className="">
//                     <img src={car.image} alt={`${car.name}_image`} className="md:w-40 w-20" />
//                   </div>
//                   {selectedCar.id === car.id && (
//                     <div className="absolute right-2 top-2">
//                       <div className="w-6 h-6 bg-[#6CBF02] rounded-full flex items-center justify-center">
//                         <svg
//                           className="w-4 h-4 text-white"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Additional Content */}
//         <div className="mt-10">
//           <p className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify">
//             {packageDetails.additionalContent.content}
//           </p>
//         </div>
//       </section>
//       <Register />
//     </div>
//   );
// }

// export default Packagedetails;


import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Register from './Register';
import packageService from '../data/packageService.json';
import { PiArrowBendUpRightFill } from 'react-icons/pi';
import { X, ArrowUpRight } from 'lucide-react';
function Packagedetails() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [packageDetails, setPackageDetails] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const details = packageService.packageDetails[packageId];

      if (details) {
        setPackageDetails(details);
        const firstCar = Object.values(details.carOptions)[0];
        setSelectedCar(firstCar);
      } else {
        setError('Package not found');
        console.log(packageId)
      }
    } catch (err) {
      console.error('Error loading package details:', err);
      setError('Error loading package details');
    }
    setLoading(false);
  }, [packageId]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleBack = () => {
    const category = packageDetails.packageData.category;
    navigate(`/packages?category=${category}`);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    days: '',
    carType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, days, carType } = formData;
    const phoneNumber = '+918925530559'; 
    const whatsappMessage = `Name: ${name} \nPhone no: ${mobile}\n Days: ${days} \n Car Type: ${carType}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl);
  };
  const carTypes = [
    'Ertiga',
    'Etios',
    'Innova Crysta',
    'Swift Dzire',

  ];
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#6CBF02] mx-auto mb-4"></div>
          <div className="text-2xl text-[#6CBF02] poppins-medium">Loading package details...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl text-red-600 mb-4 poppins-semibold">Package Not Found</h2>
          <p className="text-lg text-gray-600 mb-6 poppins-medium">
            The package you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/packages"
            className="bg-[#6CBF02] hover:bg-[#5ba002] text-white px-6 py-3 rounded-full transition-colors duration-300 poppins-medium"
          >
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  if (!packageDetails) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl text-red-600 mb-4 poppins-semibold">Package Not Available</h2>
          <p className="text-lg text-gray-600 mb-6 poppins-medium">
            This package is currently not available for booking.
          </p>
          <Link
            to="/packages"
            className="bg-[#6CBF02] hover:bg-[#5ba002] text-white px-6 py-3 rounded-full transition-colors duration-300 poppins-medium"
          >
            Browse Other Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden ">
      <div
        className="lg:h-90 h-70 relative bg-cover bg-center lg:mt-20 mt-5"
        style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}
      >
        <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
          <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">
            Package Details
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handleBack}
              className="md:text-[24px] cursor-pointer text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300"
            >
              Back
            </button>
            <h2 className="md:text-[24px] text-[20px] poppins-medium text-[#FFC83E]">
              <span className="text-white">/ </span>Package Details
            </h2>
          </div>
        </div>
      </div>
      
      <section className="lg:pt-20 pt-15 max-w-[1450px] mx-auto px-4">
        <div className="mb-10">
          <h1 className=" text-2xl fondamento-regular text-center text-[#6CBF02] tracking-wide" >
            {packageDetails.packageData.title}
          </h1>
          <h2 className="text-lg poppins-medium opacity-75 mt-2 text-center max-w-7xl mx-auto">
            {packageDetails.packageData.subtitle} | <Link to="/contact-us"><span className="text-[#6CBF02] underline">Contact Us More Deatils</span></Link>
          </h2>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center mb-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            {packageDetails.templeSection.title}
          </h2>

          <div className="max-w-[700px] mx-auto mb-8" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
            <img
              src={packageDetails.templeSection.image}
              alt={packageDetails.templeSection.title}
              className="rounded-[20px] w-full shadow-lg"
            />
          </div>

          <div className="space-y-4 mt-10" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
            {Object.values(packageDetails.templeSection.description).map((description, index) => (
              <p
                key={index}
                className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify"
              >
                {description}
              </p>
            ))}
          </div>
          {packageDetails?.templeSection.visitplaces && Object.values(packageDetails.templeSection.visitplaces).length > 0 && (
            <div className="border-2 border-[#6CBF02] rounded-[10px] p-5 w-fit mx-auto mt-10">
              <h2 className="text-center md:text-2xl text-xl poppins-semibold text-[#FFC83E] mb-6">Our Travel Destinations</h2>
              <div className="flex flex-col justify-center space-y-5">
                {Object.values(packageDetails?.templeSection.visitplaces || {}).map((visitplaces, index) => (
                  <p key={index} className="flex gap-3 items-center poppins-medium opacity-80 leading-[30px] md:text-lg text-base "><img src="/assets/images/arrow.png" alt="Temples" className="w-6" />{visitplaces}</p>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4 mt-10" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
            {Object.values(packageDetails?.templeSection.templedescription || {}).map((description, index) => (
              <p
                key={index}
                className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify"
              >
                {description}
              </p>
            ))}
          </div>

        </div>

        <div className="mt-16">
          <h2 className="text-2xl text-[#6CBF02] poppins-semibold text-center mb-10">
            {packageDetails.carBookingSection.title}
          </h2>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="max-w-[566px] relative ">
              <img
                src={selectedCar.featuredImage}
                alt={`Featured ${selectedCar.name}`}
                className="rounded-[30px] w-full shadow-[0_0_10px_rgba(0,0,0,0.15)]"
              />
              <div className="bg-[#6CBF02] px-5 py-2 rounded-full absolute md:top-5 top-2 left-5" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <p className="md:text-xl text-base poppins-medium text-white" >{selectedCar.price}</p>
              </div>
              <div className="absolute lg:bottom-12  bottom-2 left-5 bg-black bg-opacity-50 px-4 py-2 rounded-full">
                <p className="md:text-xl text-lg poppins-semibold text-white tracking-wide">
                  {selectedCar.name}
                </p>
              </div>
            </div>

            <div className="w-full space-y-5">
              {/* <h3 className="text-xl poppins-semibold text-[#6CBF02] mb-4">
                Choose Your Vehicle:
              </h3> */}
              {Object.values(packageDetails.carOptions).map((car) => (
                <div
                  key={car.id}
                  onClick={() => handleCarSelect(car)}
                  className={`relative flex justify-between items-center w-full border-2 py-2 px-5 rounded-[20px] cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedCar.id === car.id
                    ? 'border-[#6CBF02] bg-[#6CBF02]/10 shadow-md'
                    : 'border-gray-300 hover:border-[#6CBF02]/50'
                    }`}
                >
                  <div className="flex-1">
                    <h4
                      className={`poppins-semibold text-[18px] md:text-[20px] ${selectedCar.id === car.id ? 'text-[#6CBF02]' : 'text-gray-800'
                        }`}
                    >
                      {car.name}
                    </h4>
                    <p className="poppins-medium text-[14px] md:text-[16px] opacity-75 text-gray-600">
                      {car.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={car.image}
                      alt={`${car.name}_image`}
                      className="w-16 h-12 md:w-20 md:h-16 object-contain"
                    />

                    {selectedCar.id === car.id && (
                      <div className="w-6 h-6 bg-[#6CBF02] rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8">
            <h3 className="text-xl poppins-semibold text-[#6CBF02] mb-4">
              About This Package
            </h3>
            <p className="poppins-medium opacity-80 leading-[30px] md:text-lg text-base text-justify">
              {packageDetails.additionalContent.content}
            </p>
          </div>
        </div>


      </section>
      {/* <div className="py-10 flex justify-center">
          <button className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
            <span className="relative z-10 text-[20px] -ml-4"> Book Now </span>
            <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-18  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
            <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
          </button>
      </div> */}
      <div className="  flex items-center justify-center">
        {/* Book Now Button */}
        <div className="py-10 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white cursor-pointer py-3 px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2"
            style={{ fontFamily: 'Port Lligat Sans, sans-serif' }}
          >
            <span className="relative z-10 text-[20px] -ml-4"> Book Now </span>
            <PiArrowBendUpRightFill className='absolute z-10 group-hover:translate-x-18 opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
          </button>
        </div>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#6CBF02] to-[#5AA002] text-white p-6 rounded-t-2xl relative">
                <h2 className="text-lg poppins-semibold text-center">Book your ride now with Divya Desan Travels.</h2>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm poppins-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6CBF02] focus:border-transparent outline-none transition-all poppins-medium"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm poppins-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6CBF02] focus:border-transparent outline-none transition-all poppins-medium"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="days" className="block text-sm poppins-semibold text-gray-700 mb-2">
                    Number of Days *
                  </label>
                  <input
                    type="number"
                    id="days"
                    name="days"
                    value={formData.days}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6CBF02] focus:border-transparent outline-none transition-all poppins-medium"
                    placeholder="Number of days"
                  />
                </div>

                <div>
                  <label htmlFor="carType" className="block text-sm poppins-semibold text-gray-700 mb-2">
                    Car Type *
                  </label>
                  <select
                    id="carType"
                    name="carType"
                    value={formData.carType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6CBF02] focus:border-transparent outline-none transition-all bg-white poppins-medium"
                  >
                    <option value="">Select car type</option>
                    {carTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[#6CBF02] to-[#5AA002] text-white py-3 px-6 rounded-lg poppins-semibold hover:from-[#5AA002] hover:to-[#4A8F02] transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Register />
    </div>
  );
}

export default Packagedetails;