import React from 'react'

function Herosection() {
    return (
        <div>
            <section className="relative  h-screen bg-cover overflow-hidden" style={{ backgroundImage: "url('/assets/images/Hero/BG.png')" }}>
                <div className="absolute bottom-0"><img src="/assets/images/Hero/Air Port.png" alt="images" className="" /></div>
              <div className="relative top-50 left-40">  <img src="/assets/images/Hero/cloud 4.svg" alt="images" className="max-w-[300px] " /></div>
              <div className="relative top-40 ">  <img src="/assets/images/Hero/Cloud.svg" alt="images" className="max-w-[200px] " /></div>
              <div className="">

              </div>
            </section>
        </div>
    )
}

export default Herosection