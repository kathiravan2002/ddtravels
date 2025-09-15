import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({title,canonical}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="DivyadesanTravels, Divya Desan Travels, Divya Desam Travels, divya desam tours, Tirupati one day tour, tirupati darshan, One Day Temple Tour, Temple Tour Packages from Chennai, Pilgrimage Tour Packages, Chennai One Day Tour Packages, Kanchipuram Temple One Day Tour Packages, Kanchipuram Temple Tour, Mahabalipuram Sightseeing, Tiruvannamalai One Day Trip, Pondicherry Tour Packages, Pondicherry Sightseeing, Pichavaram Mangrove Tour, Navagraha Temple Tour, Rameswaram Tour Package, Srirangam Temple Tour, Chidambaram Nataraja Temple Tour, Velankanni Church Tour, South India Temple Tour, Tamil Nadu Pilgrimage Tour, 108 Divya Desam Yatra, Vaishnavite Temples Tour, Saivite Temples Tour, Spiritual Yatra Packages, Religious Travel Services, Customized Pilgrimage Tours, Temple Tourism Tamilnadu, Heritage and Culture Tour, One day Family Holidays tour Packages, Weekend Temple Trips, Chennai Local sightseeing Places, Arupadai Veedu Murugan Yatra, Ahobilam Srisailam Tour Packages from Chennai, Pacha Bhoota Sthalam Tour Packages, Srikalahasti Tirutani Temple Tour, NRI and Senior Citizens Darshan, Infant darshan, Friends Holidays Trip, Siruvapuri, Periyapalayam and Putlur Tour, Cab rental services, Hour Packages, One-way Trip" />
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