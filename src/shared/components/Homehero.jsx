import React from 'react'

function Homehero() {
    return (
        <div className='overflow-hidden'>
            <section className="relative  h-screen bg-cover overflow-hidden bg-center " style={{ backgroundImage: "url('/assets/images/Hero/BG.png')" }}>
                <div className="absolute bottom-0 z-30"><img src="/assets/images/Hero/Air Port.png" alt="images" className="object-cover object-center h-full" /></div>
                <div className="absolute lg:top-[70%] top-[90%] left-[50%] flight-animation">
                    <img src="/assets/images/Hero/Flight.png" alt="flight" className="lg:w-[300px] sm:w-[200px] w-[100px]" />
                </div>
                <div className="absolute top-52 inset-0 left-52 slide-animation ">  <img src="/assets/images/Hero/cloud 4.svg" alt="images" className="max-w-[300px] " /></div>
                <div className="absolute top-64 inset-0 left-[75%] slide-animation">  <img src="/assets/images/Hero/Cloud.svg" alt="images" className="max-w-[200px] " /></div>
                <div className="absolute 2xl:top-[85%] xl:top-[85%] lg:top-[87%] md:top-[91%] sm:top-[92%] z-40  top-[96%] inset-0 car-animation  ">
                    <img src="/assets/images/Hero/car.svg" alt="car" className="lg:w-[300px] sm:w-[200px] w-[100px]" />
                </div>
                {/* <div className="absolute top-[85%]  inset-0 car-animation  ">
                 <img src="/assets/images/Hero/car.svg" alt="car" className="w-[300px] " />
                </div> */}
            </section>
        </div>
    )
}

export default Homehero
