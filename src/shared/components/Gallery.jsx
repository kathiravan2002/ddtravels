import React from 'react'
import Register from './Register'
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <div className='overflow-hidden'>
            <div className=" lg:h-90 h-70  relative bg-cover bg-center lg:mt-20 mt-5" style={{ backgroundImage: "url('/assets/images/About/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] port-lligat-sans-regular text-[#6CBF02] lg:mt-0 mt-15">Gallery</h2>
                    <div className="flex space-x-2 ">
                        <Link to="/">
                            <h2 className="md:text-[24px] text-[20px] poppins-medium text-white hover:text-[#FFC83E] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] poppins-medium  text-[#FFC83E] "><span className="text-white">/ </span>Gallerys</h2>
                    </div>
                </div>
            </div>

            <section className="lg:pb-20 py-15 max-w-[1450px] mx-auto px-4">
                <div className="space-y-2">
                    <h2 className="text-[#FFB600] fondamento-regular-italic md:text-[32px] text-[32px] text-center">Our Gallery</h2>
                    <h2 className="text-[#6CBF02] poppins-medium  text-[24px] text-center">Some Beautiful Snapshoots</h2>
                    <p className="poppins-medium text-base text-center opacity-80">A glimpse of our journeys and happy moments with travelers.</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-5">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5" >
                      <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="flip-right" data-aos-delay="300" data-aos-duration="1000">
                        <img src="/assets/images/Gallery/photo1.png" alt="image1" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300" />
                      </div>
                      <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
                        <img src="/assets/images/Gallery/photo2.png" alt="image2" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
                        <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/Gallery/photo3.png" alt="image4" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300" />
                        </div>
                        <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="flip-right" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/Gallery/photo4.png" alt="image5" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300" />
                        </div>
                        <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/Gallery/photo5.png" alt="image6" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300" />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-4 grid-cols-1 gap-5">
                        <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/Gallery/photo6.png" alt="image7" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300 " />
                        </div>
                        <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="flip-right" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/Gallery/photo7.png" alt="image8" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300" />
                        </div>
                        <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/Gallery/photo8.png" alt="image9" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300" />
                        </div>
                        <div className="max-w-[700px] overflow-hidden lg:rounded-[25px] rounded-[15px]" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/Gallery/photo9.png" alt="image10" className="lg:rounded-[25px] rounded-[15px] hover:scale-110 duration-300" />
                        </div>
                    </div>
                </div>
            </section>
            <Register />
        </div>
    )
}

export default Gallery