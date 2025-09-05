import React from 'react'
import About from '../shared/components/About'
import { useInView } from 'react-intersection-observer';
import HelmetComponent from './HelmetComponent';

function Aboutpage() {

   const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once when the section becomes visible
        threshold: 0.3, // Trigger when 30% of the section is visible
    });
    const testimonials = [
        {
            id: 1,
            name: "Ramesh K., Hyderabad",
            title: "Memories for a Lifetime",
            quote: "From planning to execution, everything was smooth.",
            description: "We had the most amazing honeymoon, thanks to DD Travels. They understood exactly what we wanted!. I've used DD Travels multiple times, and they never disappoint. Their team is responsive, knowledgeable, and always ready to help. Travel has never been this easy!",
            image: "/assets/images/About/testimonial.png"
        },
        {
            id: 2,
            name: "Priya S., Mumbai",
            title: "Exceptional Service",
            quote: "Divya Desan Travels made our family vacation unforgettable.",
            description: "The attention to detail and personalized service exceeded our expectations. From booking to the final day, everything was perfectly organized. Our kids had the time of their lives, and we created memories that will last forever!",
            image: "/assets/images/About/testimonial.png"
        },
        {
            id: 3,
            name: "Arjun M., Bangalore",
            title: "Professional Excellence",
            quote: "Best travel agency I've ever worked with.",
            description: "Their expertise in planning corporate retreats is unmatched. The team handled all logistics seamlessly, allowing us to focus on our business objectives. Highly recommend DD Travels for both personal and professional travel needs!",
            image: "/assets/images/About/testimonial.png"
        }
    ];
  return (
    <div>
        <HelmetComponent title={'About Us - Divya Desan Travels'} canonical={'https://divyadesantravels.com/about-us'} />
        <About testimonials={testimonials} ref={ref} inView={inView}/>
        </div>
  )
}

export default Aboutpage