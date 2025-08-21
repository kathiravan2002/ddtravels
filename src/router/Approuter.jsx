import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../core/Main'
import Homepage from '../components/Homepage'
import Aboutpage from '../components/Aboutpage'
import Scrolltotop from './Scrolltop'
import ContactUspage from '../components/ContactUspage'
import Packagepage from '../components/Packagepage'
import Packagedetailspage from '../components/Packagedetailspage'
import Gallerypage from '../components/Gallerypage'

function Approuter() {
    return (
        <BrowserRouter>
        <Scrolltotop/>
            <Routes>
                <Route element={<Main />}>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about-us" element={<Aboutpage/>}/>
                <Route path="/contact-us" element={<ContactUspage/>}/>
                <Route path="/packages" element={<Packagepage/>}/>
                <Route path="/package-details" element={<Packagedetailspage/>}/>
                <Route path="/gallery" element={<Gallerypage/>}/>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Approuter