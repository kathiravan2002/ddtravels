import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../core/Main'
import Homepage from '../components/Homepage'
import Aboutpage from '../components/Aboutpage'

function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />}>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about-us" element={<Aboutpage/>}/>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Approuter