import React from 'react'
import Package from '../shared/components/Package'
import HelmetComponent from './HelmetComponent'

function Packagepage() {
  return (
    <div>
      <HelmetComponent title={'Packages - Divya Desan Travels'} canonical={'https://divyadesantravels.com/packages'} />
      <Package />
    </div>
  )
}

export default Packagepage