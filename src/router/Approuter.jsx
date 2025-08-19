import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../core/Main'
import Homepage from '../components/Homepage'

function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />}>
                <Route path="/" element={<Homepage/>}/>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Approuter