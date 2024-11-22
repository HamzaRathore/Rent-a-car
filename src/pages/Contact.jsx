import React from 'react'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import Footer from './../components/Footer';

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactUs/>
        <div className='mt-12 -mb-6'>
        <Footer />
      </div>
      
    </div>
  )
}

export default Contact
