import { useEffect, useState } from 'react'
import './App.css'
import Approuter from './router/Approuter'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
  Aos.init({
    duration: 800,
    once: true,       
    mirror: true      
  });
}, []);


  return (
    <>
       <Approuter/>
    </>
  )
}

export default App
