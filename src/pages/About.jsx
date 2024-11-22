import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col mt-20'>
      <Navbar />

      <div className='w-11/12 sm:w-4/5 mx-auto mt-16 flex-grow'>
        <div className='border-b-4 border-red-900 pb-2'>
          <h1 className='text-3xl sm:text-4xl'>About Us</h1>
        </div>
        <p className='pt-6 text-base sm:text-lg'>
          Shopping for a used car? Ready to meet your match? Download the free VivaCars.com app to find the perfect car for you today. Shop the best deals with access to millions of listings, over 10 million reviews, and tools to calculate payments on cars you like. Focused search filters help you zero in on the best used cars in best condition for sale near you.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
          <div className='flex items-center'>
            <p className='text-red-900 font-bold text-lg mx-2'>✓</p>
            <p className='text-base sm:text-xl'>Navigation system</p>
          </div>
          <div className='flex items-center'>
            <p className='text-red-900 font-bold text-lg mx-2'>✓</p>
            <p className='text-base sm:text-xl'>Leather seats</p>
          </div>
          <div className='flex items-center'>
            <p className='text-red-900 font-bold text-lg mx-2'>✓</p>
            <p className='text-base sm:text-xl'>Bluetooth connection</p>
          </div>
          <div className='flex items-center'>
            <p className='text-red-900 font-bold text-lg mx-2'>✓</p>
            <p className='text-base sm:text-xl'>Sunroof/moonroof</p>
          </div>
          <div className='flex items-center'>
            <p className='text-red-900 font-bold text-lg mx-2'>✓</p>
            <p className='text-base sm:text-xl'>Remote Start</p>
          </div>
          <div className='flex items-center'>
            <p className='text-red-900 font-bold text-lg mx-2'>✓</p>
            <p className='text-base sm:text-xl'>Heated seats</p>
          </div>
        </div>

        <div className='w-full h-auto sm:h-32 mt-8 flex flex-wrap justify-between items-center rounded-xl shadow-xl bg-gradient-to-b from-red-800 to-gray-900 px-4'>
          <div className='flex flex-col items-center mb-4 sm:mb-0'>
            <h1 className='text-3xl sm:text-4xl'>4.7</h1>
            <p className='text-sm sm:text-xl'>Reviews</p>
          </div>
          <div className='flex flex-col items-center mb-4 sm:mb-0'>
            <h1 className='text-3xl sm:text-4xl'>3Million+</h1>
            <p className='text-sm sm:text-xl'>Downloads</p>
          </div>
          <div className='flex flex-col items-center mb-4 sm:mb-0'>
            <h1 className='text-3xl sm:text-4xl'>7</h1>
            <p className='text-sm sm:text-xl'>In Rent</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl sm:text-4xl'>5</h1>
            <p className='text-sm sm:text-xl'>Fault Reports</p>
          </div>
        </div>
      </div>

      {/* Add space before footer */}
      <div className='mt-12 -mb-6'>
        <Footer />
      </div>
    </div>
  )
}

export default About
