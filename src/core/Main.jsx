import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Main() {
  return (
    <div>
      <Header />
      <main className={`  max-w-screen`}>
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-28 right-5 z-50 ">
        <a
          href="https://wa.me/918925530559" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/images/whatsapp.png"
            alt="whatsapp"
            className="whatsapp-icon hover:scale-110 duration-300 w-[45px] md:w-[56px]"
          />
        </a>
      </div>
    </div>

  )
}

export default Main