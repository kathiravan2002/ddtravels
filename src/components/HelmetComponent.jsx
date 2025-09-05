import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({title,canonical}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="DivyaDesanTravels, Divya Desan Travels, DD Travels, One Day Temple Tour, Two Days Temple Tour, One Day Pilgrimage Tour, Two Days Pilgrimage Tour, Chennai One Day Tour Packages, Chennai Two Days Tour Packages, Kanchipuram One Day Tour, Kanchipuram Two Days Tour, Mahabalipuram One Day Tour, Mahabalipuram Two Days Tour, Tiruvannamalai One Day Trip, Tiruvannamalai Two Days Trip, Pondicherry One Day Tour, Pondicherry Two Days Tour, Pichavaram Mangrove Tour, Navagraha Temple Tour, Rameswaram Tour Package, Madurai Meenakshi Temple Tour, Srirangam Temple Tour, Thanjavur Big Temple Tour, Chidambaram Nataraja Temple Tour, Velankanni Church Tour, South India Temple Tour, Tamil Nadu Pilgrimage Tour, 108 Divya Desam Yatra, Vaishnavite Temples Tour, Saivite Temples Tour, Spiritual Yatra Packages, Religious Travel Services, Customized Pilgrimage Tours, Temple Tourism India, Heritage and Culture Tour, Family Pilgrimage Tour, Weekend Temple Trips" />            <meta name="description" content="The International Conference on Advanced Business and Digital Transformation brings together global experts to discuss innovations in business strategy, digital technologies, and transformative practices. Join us in 2025 to explore the future of business in the digital age." />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Divya Desan Travels" />
            <meta property="og:description" content="Book one day and two days temple tour packages with Divya Desan Travels. Explore Kanchipuram, Mahabalipuram, Tiruvannamalai, Pondicherry, and Pichavaram Mangrove with comfortable travel and guided service." />
            <meta property="og:url" content="https://divyadesantravels.com/" />
            <meta property="og:image" content="https://divyadesantravels.com/assets/images/Logo.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://divyadesantravels.com/assets/images/DDlogoFav.png" />

        </Helmet>
    )
}

export default HelmetComponent