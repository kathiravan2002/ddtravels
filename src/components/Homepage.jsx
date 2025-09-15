import React, { useEffect, useRef, useState } from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent';

function Homepage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);
    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);
    };

    const goToPrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const multiplier = {
        translate: 0.1,
        rotate: 0.01,
    };

    useEffect(() => {
        function calculateWheel() {
            const slides = document.querySelectorAll(".single");
            slides.forEach((slide) => {
                const rect = slide.getBoundingClientRect();
                const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
                let ty =
                    Math.abs(r) * multiplier.translate -
                    rect.width * multiplier.translate;

                if (ty < 0) ty = 0;

                const transformOrigin = r < 0 ? "left top" : "right top";
                slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate
                    }deg)`;
                slide.style.transformOrigin = transformOrigin;
            });
        }

        function raf() {
            requestAnimationFrame(raf);
            calculateWheel();
        }

        raf();
    }, []);

    const images = [
        "/assets/images/Home/architect 1.png",
        "/assets/images/Home/architect 2.png",
        "/assets/images/Home/architect 3.png",
        "/assets/images/Home/architect 1.png",
        "/assets/images/Home/architect 2.png",
        "/assets/images/Home/architect 3.png",


    ];

    const popular = [
        { src: "/assets/images/Home/kapaleeswarar.jpg", name: "Kapaleeswarar" },
        { src: "/assets/images/Home/mahapalipuram.jpg", name: "Mahabalipuram" },
        { src: "/assets/images/Home/Sri Kalahasti Temple.jpg", name: "Sri Kalahasti Temple" },
        { src: "/assets/images/Home/Srisailam.jpg", name: "Srisailam" },
        { src: "/assets/images/Home/tirupathi.jpg", name: "Tirupati" },
        { src: "/assets/images/Home/Vellore Golden Temple.jpg", name: "Vellore Golden Temple" },
        { src: "/assets/images/Thiru.jpg", name: "Tiruvannamalai" },
        { src: "/assets/images/pondy.jpg", name: "Pondicherry" },
    ];

    const card = [
        {
            image: '/assets/images/Package/tirupatibalaji.jpg',
            title: 'Tirupati One Day Tour Package',
            content1: 'Sacred Tirupati Balaji Darshan',
            time: '24/7',
            content2: 'Experience a divine journey to the holy Tirumala hills and seek blessings of Lord Venkateswara.',
            link: 'package-details/tirupati-one-day-tour-package'
        },
        {
            image: '/assets/images/Package/oneday2.jpg',
            title: 'Kanchipuram One Day Tour Package',
            content1: 'Spiritual Kanchipuram Temple Tour',
            time: '24/7',
            content2: 'Discover the rich heritage and sacred temples of the City of Thousand Temples.',
            link: 'package-details/kanchipuram-one-day-tour-package'
        },
        {
            image: '/assets/images/Package/oneday6.jpg',
            title: 'Ahobilam',
            content1: 'Divine Ahobilam Temple Tour',
            time: '24/7',
            content2: 'Experience the sacred Nava Narasimha temples nestled in the Nallamala hills.',
            link: 'package-details/ahobilam-tour-package'
        },
        {
            image: '/assets/images/Package/pondibeach.jpg',
            title: 'Pondicherry',
            content1: 'Pondicherry One-Day Tour Package',
            time: '24/7',
            content2: 'Discover the French colonial charm of Pondicherry with serene beaches',
            link: 'package-details/pondicherry-tour-package'
        },
        {
            image: '/assets/images/Package/oneday1.jpg',
            title: 'Mahabalipuram',
            content1: 'Mahabalipuram One Day Heritage and Culture Trip',
            time: '24/7',
            content2: 'Explore the UNESCO World Heritage monuments of Mahabalipuram and ancient sculptures.',
            link: 'package-details/mahabalipuram-tour-package'
        },

    ]


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneno: "",
        message: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phoneno, message } = formData;
        const phoneNumber = '+918925530559'; // e.g., +919876543210
        const whatsappMessage = `***** Contact Request *****
  • Name: ${name}
  • Email: ${email}
  • Phone No: ${phoneno}
  • Message: ${message}
    `;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl);
    };
    return (
        <div>
            <HelmetComponent title={'Divya Desan Travels'} canonical={'https://divyadesantravels.com/'} />
            <Home activeSlide={activeSlide} handleSlideChange={handleSlideChange} goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} images={images} swiperRef={swiperRef} setActiveSlide={setActiveSlide} popular={popular} card={card} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}

export default Homepage