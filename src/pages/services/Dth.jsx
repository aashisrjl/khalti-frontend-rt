import React from 'react'
import Services from '../Services'
import Navbar from '../component/Navbar'
import Header from '../component/header'
import Guide from './Guide'
import Faq from './Faq'
import Whykhalti from './Whykhalti'
import Video from './Video'
import DthBody from './DthBody'

const Dth = () => {
  return (
    <>
    < Header />
    < Navbar />
    < Services />
    < DthBody />
    < Guide />
    < Faq /> 
    < Whykhalti />
    < Video />
      
    </>
  )
}

export default Dth
