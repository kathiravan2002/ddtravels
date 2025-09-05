import React from 'react'
import Gallery from '../shared/components/Gallery'
import HelmetComponent from './HelmetComponent'

function Gallerypage() {
  return (
    <div>
      <HelmetComponent title={'Our Gallery - Divya Desan Travels'} canonical={'https://divyadesantravels.com/gallery'} />
      <Gallery />
    </div>
  )
}

export default Gallerypage