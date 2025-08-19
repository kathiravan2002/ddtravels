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
        </div>

  )
}

export default Main