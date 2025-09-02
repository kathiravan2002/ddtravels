// import React from 'react'
// import Register from './Register'
// import { Link } from 'react-router-dom'
// import { PiArrowBendUpRightFill } from 'react-icons/pi'

// function Package() {

//     const data =[
//         {
//             image:'/assets/images/Package/packageimage.jpg',
//             title:'Chennai Local Temple One Day Tour',
//             time:'6.00AM to 9.00PM',
//         },
//         {
//             image:'/assets/images/Package/packageimage.jpg',
//             title:'Chennai Local Sight Seeing One Day Tour',
//             time:'6.00AM to 9.00PM',
//         },
//         {
//             image:'/assets/images/Package/packageimage.jpg',
//             title:'Chennai Local Temple One Day Tour',
//             time:'6.00AM to 9.00PM',
//         },
//         {
//             image:'/assets/images/Package/packageimage.jpg',
//             title:'Chennai Local Temple One Day Tour',
//             time:'6.00AM to 9.00PM',
//         },
//         {
//             image:'/assets/images/Package/packageimage.jpg',
//             title:'Chennai Local Sight Seeing One Day Tour',
//             time:'6.00AM to 9.00PM',
//         },
//         {
//             image:'/assets/images/Package/packageimage.jpg',
//             title:'Chennai Local Temple One Day Tour',
//             time:'6.00AM to 9.00PM',
//         },
//     ]
//     return (
//         <div>
//             <div className=" lg:h-90 h-70  relative bg-cover bg-center lg:mt-20 mt-5" style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}>
//                 <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
//                 <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
//                     <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">Our Packages</h2>
//                     <div className="flex space-x-2 ">
//                         <Link to='/'>
//                             <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300 ">Home</h2>
//                         </Link>
//                         <h2 className="md:text-[24px] text-[20px] poppins-medium  text-[#FFC83E] "><span className="text-white">/ </span>Packages</h2>
//                     </div>
//                 </div>
//             </div>
//             <section className="lg:py-20 py-15 max-w-[1450px] mx-auto px-4">
//                 <div className="flex gap-10">
//                     <div className="border-2 border-gray-400 py-4 px-4 rounded-[20px] w-[300px]">
//                         <h2 className="text-xl fondamento-regular text-[#6CBF02] text-center " >Packages</h2>
//                         <ul className="list-disc poppins-medium text-lg text-start marker:text-[#6CBF02] space-y-5 px-4 mt-5">
//                             <li className="">Chennai Car Rental Package</li>
//                             <li className="">Chennai Local Tour Packages</li>
//                             <li className="">Chennai Urban Temples/Paadal Petra Shiva Sthalams/Divya Desam Temples One Day Tour Packages</li>
//                             <li className="">Chennai Local Tour Packages</li>
//                             <li className="">One Way Drop Service</li>
//                             <li className="">One Day Tour Packages</li>
//                             <li className="">Tamil Nadu Temples Tour Packages</li>
//                             <li className="">Hill Station Tour Packages</li>
//                             <li className="">Kerala Tour Packages</li>
//                             <li className="">Andhra Tour Packages</li>
//                             <li className="">Karnataka Tour Packages </li>
//                         </ul>
//                     </div>
//                     <div className="flex-30">
//                     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  ">
//                         {data.map((place,index)=>(
//                         <div className="bg-white rounded-lg border-2 border-[#6CBF02]">
//                             <div className="w-full "><img src={place.image} alt="image" className="rounded-t-[7px]" /></div>
//                             <div className=" space-y-2  px-2 py-4">
//                                 <p className="poppins-medium text-base opacity-85">{place.title}</p>
//                                 <p className="poppins-medium text-[14px] opacity-85">Timeframe: {place.time}</p>
//                                 <div className="flex  "> <button className="port-lligat-sans-regular cursor-pointer text-white px-4 py-2 text-[16px] rounded-4xl bg-[#6CBF02] flex gap-2 items-center justify-center">See Details <PiArrowBendUpRightFill className='flex shrinl-0 text-[24px]' /></button></div>
//                             </div>
//                         </div>
//                         ))}
//                     </div>
//                     </div>
//                 </div>
//             </section>
//             <Register />
//         </div>
//     )
// }

// export default Package
// import React, { useState } from 'react'
// import { ArrowUpRight} from 'lucide-react'
// import { Link } from 'react-router-dom';
// import { CgMenuGridO } from 'react-icons/cg';
// import { IoClose } from 'react-icons/io5';
// import { FaFilter } from 'react-icons/fa';


// function Package() {
//     const [selectedCategory, setSelectedCategory] = useState('all');
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
//     const packageCategories = [
//         { id: 'all', name: 'All Packages' },
//         { id: 'car-rental', name: 'Chennai Car Rental Package' },
//         { id: 'local-tour', name: 'Chennai Local Tour Packages' },
//         { id: 'temple-tour', name: 'Chennai Urban Temples/Paadal Petra Shiva Sthalams/Divya Desam Temples One Day Tour Packages' },
//         { id: 'one-way', name: 'One Way Drop Service' },
//         { id: 'one-day', name: 'One Day Tour Packages' },
//         { id: 'tn-temples', name: 'Tamil Nadu Temples Tour Packages' },
//         { id: 'hill-station', name: 'Hill Station Tour Packages' },
//         { id: 'kerala', name: 'Kerala Tour Packages' },
//         { id: 'andhra', name: 'Andhra Tour Packages' },
//         { id: 'karnataka', name: 'Karnataka Tour Packages' }
//     ];

//     const data = [
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Chennai Local Temple One Day Tour',
//             time: '6.00AM to 9.00PM',
//             category: 'temple-tour'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Chennai Local Sight Seeing One Day Tour',
//             time: '6.00AM to 9.00PM',
//             category: 'local-tour'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Taxi Rental Services – Chennai',
//             time: '6.00AM to 9.00PM',
//             category: 'car-rental'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Car Hire Packages for Chennai Trips',
//             time: '6.00AM to 9.00PM',
//             category: 'car-rental'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Innova Rental Deals in Chennai',
//             time: '6.00AM to 9.00PM',
//             category: 'car-rental'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Temple Tour Traveller Packages – Chennai',
//             time: '6.00AM to 9.00PM',
//             category: 'car-rental'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'One Way Drop Service to Bangalore',
//             time: 'As per requirement',
//             category: 'one-way'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Ooty Hill Station Tour',
//             time: '3 Days 2 Nights',
//             category: 'hill-station'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Kerala Backwater Tour',
//             time: '4 Days 3 Nights',
//             category: 'kerala'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Tamil Nadu Temple Circuit',
//             time: '5 Days 4 Nights',
//             category: 'tn-temples'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Tirupati One Day Tour',
//             time: '4.00AM to 11.00PM',
//             category: 'andhra'
//         },
//         {
//             image: '/assets/images/Package/packageimage.jpg',
//             title: 'Bangalore City Tour',
//             time: '2 Days 1 Night',
//             category: 'karnataka'
//         }
//     ];

//     const filteredData = selectedCategory === 'all'
//         ? data
//         : data.filter(item => item.category === selectedCategory);

//     return (
//         <div>
//             <div className=" lg:h-90 h-70  relative bg-cover bg-center lg:mt-20 mt-5" style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}>
//                 <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
//                 <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
//                     <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">Our Packages</h2>
//                     <div className="flex space-x-2 ">
//                         <Link to="/">
//                             <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300 ">Home</h2>
//                         </Link>
//                         <h2 className="md:text-[24px] text-[20px] poppins-medium  text-[#FFC83E] "><span className="text-white">/ </span>Packages</h2>
//                     </div>
//                 </div>
//             </div>

//             <section className="lg:py-20 py-15 max-w-[1450px] mx-auto px-4">
//                 <div className="flex flex-col lg:flex-row gap-10">
//                     {/* Menu Button for Mobile */}
//                     <div className="lg:hidden ">
//                         <button
//                             onClick={toggleMenu}
//                             className="p-2 bg-[#6CBF02] text-white rounded-md focus:outline-none flex gap-2 items-center text-[18px] poppins-medium"
//                         >
//                            <FaFilter  className='text-white text-[24px]' />

//                             Filter Packages
//                         </button>
//                     </div>

//                     {/* Sidebar for Categories */}
//                     <div
//                         className={`fixed top-0 left-0 h-full bg-white border-2 border-gray-400 pb-4 px-4 rounded-[20px] w-[300px] overflow-scroll xl:overflow-hidden transform transition-transform duration-300 ease-in-out z-50 lg:z-0 lg:static lg:transform-none lg:h-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//                             } lg:translate-x-0`}
//                     >
//                         <div className="flex justify-between items-center lg:hidden sticky top-0 bg-white mt-5">
//                             <h2 className="  text-xl fondamento-regular text-[#6CBF02] text-center ">
//                                 Packages
//                             </h2>
//                             <button
//                                 onClick={toggleMenu}
//                                 className="p-2 text-[#6CBF02] focus:outline-none"
//                             >
//                                <IoClose className='text-[#6CBF02] text-[36px]'/>

//                             </button>
//                         </div>
//                         <h2 className="text-xl fondamento-regular text-[#6CBF02] text-center hidden lg:block mt-5">
//                             Packages
//                         </h2>
//                         <ul className="list-disc poppins-medium text-lg text-start marker:text-[#6CBF02] space-y-5 px-4 mt-5">
//                             {packageCategories.map((category) => (
//                                 <li
//                                     key={category.id}
//                                     className={`cursor-pointer hover:text-[#6CBF02] duration-300 ${selectedCategory === category.id
//                                             ? 'text-[#6CBF02] poppins-semibold'
//                                             : ''
//                                         }`}
//                                     onClick={() => {
//                                         setSelectedCategory(category.id);
//                                         setIsMenuOpen(false); // Close menu on category selection in mobile
//                                     }}
//                                 >
//                                     {category.name}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Overlay for Mobile Menu */}
//                     {isMenuOpen && (
//                         <div
//                             className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden"
//                             onClick={toggleMenu}
//                         ></div>
//                     )}

//                     {/* Packages Grid */}
//                     <div className="flex-1">
//                         <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
//                             {filteredData.map((place, index) => (
//                                 <div
//                                     key={index}
//                                     className="bg-white rounded-lg border-2 border-[#6CBF02]"
//                                 >
//                                     <div className="w-full overflow-hidden">
//                                         <img
//                                             src={place.image}
//                                             alt="image"
//                                             className="rounded-t-[7px] w-full h-48 object-cover hover:scale-110 duration-300"
//                                         />
//                                     </div>
//                                     <div className="space-y-2 px-2 py-4"> 
//                                         <p className="poppins-medium text-[18px] opacity-85 ">
//                                             {place.title}
//                                         </p>
//                                         <p className="poppins-medium text-[16px] opacity-85">
//                                             Timeframe: {place.time}
//                                         </p>
//                                         <div className="flex justify-center mt-3">
//                                            <Link to='/package-details'> <button className="port-lligat-sans-regular cursor-pointer text-white px-4 py-2 text-[18px] rounded-4xl bg-[#6CBF02] flex gap-2 items-center justify-center">
//                                                 See Details{' '}
//                                                 <ArrowUpRight className="flex shrink-0 text-[24px]" />
//                                             </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Package


import React, { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { FaFilter } from 'react-icons/fa';
import packageService from '../data/packageService.json';
import { PiArrowBendUpRightFill } from 'react-icons/pi';

function Package() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [packageCategories, setPackageCategories] = useState([]);
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        try {
            setPackageCategories(packageService.packageCategories);
            setPackages(packageService.packages);
            setLoading(false);
        } catch (error) {
            console.error('Error loading package data:', error);
            setLoading(false);
        }
        const searchParams = new URLSearchParams(location.search);
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl && packageService.packageCategories.some(cat => cat.id === categoryFromUrl)) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [location.search]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const filteredData = selectedCategory === 'all'
        ? packages
        : packages.filter(item => item.category === selectedCategory);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-2xl text-[#6CBF02]">Loading packages...</div>
            </div>
        );
    }

    return (
        <div className=''>
            <div className=" lg:h-90 h-70  relative bg-cover bg-center lg:mt-20 mt-5" style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">Our Packages</h2>
                    <div className="flex space-x-2 ">
                        <Link to="/">
                            <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] poppins-medium  text-[#FFC83E] "><span className="text-white">/ </span>Packages</h2>
                    </div>
                </div>
            </div>

            <section className="lg:py-20 py-15 max-w-[1450px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:hidden sticky top-[98px] bg-white py-2 z-20">
                        <button
                            onClick={toggleMenu}
                            className="p-2 bg-[#6CBF02] text-white rounded-md focus:outline-none flex gap-2 items-center text-[18px] poppins-medium"
                        >
                            <FaFilter className='text-white text-[24px]' />
                            Filter Packages
                        </button>
                    </div>

                    <div
                        className={`fixed top-0 left-0 h-full bg-white border-2 border-gray-400 pb-4 px-4 rounded-[20px] w-[300px]  transform transition-transform duration-300 ease-in-out z-50 lg:z-0 lg:sticky lg:top-32 lg:transform-none lg:h-fit ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                            } lg:translate-x-0`}
                    >
                        <div className="flex justify-between items-center lg:hidden sticky top-0 bg-white mt-5 ">
                            <h2 className="text-xl fondamento-regular text-[#6CBF02] text-center">
                                Packages
                            </h2>
                            <button
                                onClick={toggleMenu}
                                className="p-2 text-[#6CBF02] focus:outline-none"
                            >
                                <IoClose className='text-[#6CBF02] text-[36px]' />
                            </button>
                        </div>
                        <h2 className="text-2xl fondamento-regular text-[#6CBF02] text-center hidden lg:block mt-5">
                            Packages
                        </h2>
                        <ul className="list-disc poppins-medium text-lg text-start marker:text-[#6CBF02] space-y-5 px-4 mt-5 overflow-auto lg:h-[calc(95vh-200px)] h-full ">
                            {packageCategories.map((category) => (
                                <li
                                    key={category.id}
                                    className={`cursor-pointer hover:text-[#6CBF02] duration-300 ${selectedCategory === category.id
                                        ? 'text-[#6CBF02] poppins-semibold'
                                        : ''
                                        }`}
                                    onClick={() => {
                                        setSelectedCategory(category.id);
                                        setIsMenuOpen(false);
                                        navigate(`/packages?category=${category.id}`);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {isMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden"
                            onClick={toggleMenu}
                        ></div>
                    )}

                    <div className="flex-1">
                        {filteredData.length > 0 ? (
                            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                {filteredData.map((packageItem, index) => (
                                    <div
                                        key={packageItem.id}
                                        className="bg-white rounded-lg border-2 border-[#6CBF02] shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="w-full overflow-hidden">
                                            <img
                                                src={packageItem.image}
                                                alt={packageItem.title}
                                                className="rounded-t-[7px] w-full h-48 object-cover hover:scale-110 duration-300"
                                            />
                                        </div>
                                        <div className="space-y-2 px-4 py-4">
                                            <h3 className="poppins-medium text-[18px] opacity-85 line-clamp-2 h-[54px]">
                                                {packageItem.title}
                                            </h3>
                                            <p className="poppins-medium text-[16px] opacity-75 ">
                                                Timeframe: {packageItem.time}
                                            </p>
                                            {packageItem.description && (
                                                <p className="poppins-medium text-[14px] opacity-70 line-clamp-2 h-[42px]">
                                                    {packageItem.description}
                                                </p>
                                            )}
                                            <div className="flex justify-center mt-4">
                                                <Link to={`/package-details/${packageItem.id}`}>
                                                    <button className="group relative overflow-hidden hover:text-[#000] bg-[#6CBF02] text-white  port-lligat-sans-regular   cursor-pointer px-10 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                                        <span className="relative z-10 text-[16px] -ml-4"> See Details </span>
                                                        <PiArrowBendUpRightFill className='absolute z-10  group-hover:translate-x-[60px]  opacity-0 group-hover:opacity-100 text-[24px] flex shrink-0 group-hover:text-[#000] transition-transform duration-500' />
                                                        <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-[#FFC83E] rounded-md"></div>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-xl text-gray-500 poppins-medium">
                                    No packages found for the selected category.
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        navigate('/packages');
                                    }}

                                    className="mt-4 bg-[#6CBF02] text-white px-6 py-2 rounded-full hover:bg-[#5ba002] transition-colors duration-300"
                                >
                                    Show All Packages
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Package